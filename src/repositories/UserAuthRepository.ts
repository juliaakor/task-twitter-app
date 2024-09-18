import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, Firestore, query, collection, where, getDocs, QuerySnapshot } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { defaultUserInfo } from '@constants/auth';
import { compareHashedProvider, generateHashProvider } from '@lib/format';
import { AuthRepository, ExtendedUserCredential, GoogleUserProfile } from '@type/auth';
import { User, UserLogin, UserRegistration } from '@type/models';

export class UserAuthRepository implements AuthRepository {
  private auth: Auth = auth;

  private db: Firestore = db;

  private token: string = '';

  private userId: string = '';

  private async getUserAuthSnapshot(email: string, phone: string) {
    const usersRef = collection(this.db, 'users');

    const emailQuery = query(usersRef, where('email', '==', email));
    const phoneQuery = query(usersRef, where('phone', '==', phone));

    const [emailSnapshot, phoneSnapshot] = await Promise.all([getDocs(emailQuery), getDocs(phoneQuery)]);

    return { emailSnapshot, phoneSnapshot };
  }

  private async getUserByEmailOrPhone(emailOrPhone: string): Promise<User> {
    const { emailSnapshot, phoneSnapshot } = await this.getUserAuthSnapshot(emailOrPhone, emailOrPhone);

    if (!emailSnapshot.empty) {
      return emailSnapshot.docs[0].data() as User;
    }

    if (!phoneSnapshot.empty) {
      return phoneSnapshot.docs[0].data() as User;
    }

    throw new Error('User not found');
  }

  static validateSnapshot(value: string, snapshot: QuerySnapshot, error: string) {
    if (!value) return;

    if (!snapshot.empty) {
      throw new Error(error);
    }
  }

  async validateSignUp(email: string, phone: string) {
    const { emailSnapshot, phoneSnapshot } = await this.getUserAuthSnapshot(email, phone);

    UserAuthRepository.validateSnapshot(email, emailSnapshot, 'Email is already in use');
    UserAuthRepository.validateSnapshot(phone, phoneSnapshot, 'Phone number is already in use');
  }

  async getTokenAndCredential(email: string, password: string, isSignUp: boolean) {
    const userCredential = isSignUp
      ? await createUserWithEmailAndPassword(this.auth, email, password)
      : await signInWithEmailAndPassword(this.auth, email, password);
    const token = await userCredential.user.getIdToken(true);

    return { token, userCredential };
  }

  static async validateUserPassword(password: string, hashedUserPassword: string) {
    const passwordMatch = await compareHashedProvider(password, hashedUserPassword);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }
  }

  async signUpUser(data: UserRegistration): Promise<User | undefined> {
    const { birthday, email, name, password, phone } = data;

    await this.validateSignUp(email, phone);

    if (email) {
      const { token, userCredential } = await this.getTokenAndCredential(email, password, true);
      this.token = token;
      this.userId = userCredential.user.uid;
    } else if (phone) {
      const usersRef = collection(this.db, 'users');
      const newUserRef = doc(usersRef);
      this.userId = newUserRef.id;
    }

    const usersRef = collection(this.db, 'users');
    const userRef = doc(usersRef, this.userId);
    const user = {
      ...defaultUserInfo,
      birthday,
      email: email || '',
      id: this.userId,
      name,
      password: await generateHashProvider(password),
      phone: phone || '',
      username: `@${name.replace(' ', '_')}${this.userId?.slice(5)}`,
    } as User;

    await setDoc(userRef, user);

    return { ...user, token: this.token };
  }

  async signInUser(data: UserLogin): Promise<User | undefined> {
    const { emailOrPhone, password } = data;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);

    let userEmail = '';
    let userPassword = '';
    let userInfo: Omit<User, 'email' | 'password'>;

    if (isEmail) {
      const user = await this.getUserByEmailOrPhone(emailOrPhone);
      userEmail = user.email ?? '';
      userPassword = user.password ?? '';
      userInfo = { ...user };

      await UserAuthRepository.validateUserPassword(password, userPassword);

      const { token: firebaseToken } = await this.getTokenAndCredential(userEmail, password, false);
      this.token ??= firebaseToken;
    } else {
      const user = await this.getUserByEmailOrPhone(emailOrPhone);
      userPassword = user.password ?? '';
      userInfo = { ...user };

      await UserAuthRepository.validateUserPassword(password, userPassword);
    }

    this.userId = userInfo.id ?? '';
    if (!this.userId) {
      throw new Error('User ID is undefined');
    }

    return { ...userInfo, email: userEmail, id: this.userId, token: this.token };
  }

  static getUserInfoFromGoogleCredential({
    additionalUserInfo,
    user: { displayName = 'Unknown', email = 'Unknown', photoURL },
  }: ExtendedUserCredential) {
    const profile = additionalUserInfo?.profile as GoogleUserProfile;

    const name = profile?.given_name || displayName;
    const surname = profile?.family_name || '';
    const birthday = profile?.birthday || '';
    const emailFromProfile = profile?.email || email;

    return {
      avatarUrl: photoURL || null,
      birthday,
      email: emailFromProfile,
      name,
      surname,
    };
  }

  async checkAndCreateGoogleUser(userCredential: ExtendedUserCredential, userId: string) {
    const userRef = doc(this.db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const { avatarUrl, birthday, email, name, surname } =
        UserAuthRepository.getUserInfoFromGoogleCredential(userCredential);

      const newUser = {
        ...defaultUserInfo,
        avatarUrl,
        birthday,
        email,
        id: userId,
        name,
        username: `@${surname}${userId.slice(5)}`,
      } as User;

      await setDoc(userRef, newUser);

      return newUser;
    }

    const userData = userDoc.data() as User;

    return userData;
  }

  async signUpUserWithGoogle(): Promise<User | undefined> {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/user.birthday.read');

    const userCredential = (await signInWithPopup(this.auth, provider)) as ExtendedUserCredential;
    const userId = userCredential.user.uid;
    const token = await userCredential.user.getIdToken(true);

    const userData = await this.checkAndCreateGoogleUser(userCredential, userId);

    return userData ? { ...userData, token } : undefined;
  }

  async signOut(): Promise<void> {
    this.token = '';
    this.userId = '';
    await firebaseSignOut(this.auth);
  }
}
