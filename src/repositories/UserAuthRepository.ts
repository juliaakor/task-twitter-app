import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, Firestore, query, collection, where, getDocs } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { defaultUserInfo } from '@constants/auth';
import { compareHashedProvider, generateHashProvider } from '@lib/format';
import { AuthRepository, ExtendedUserCredential, GoogleUserProfile } from '@type/auth';
import { User, UserLogin, UserRegistration } from '@type/models';

export class UserAuthRepository implements AuthRepository {
  private auth: Auth = auth;

  private db: Firestore = db;

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

  async validateSignUp(email: string, phone: string) {
    const { emailSnapshot, phoneSnapshot } = await this.getUserAuthSnapshot(email, phone);

    if (!emailSnapshot.empty) {
      throw new Error('Email is already in use');
    }

    if (!phoneSnapshot.empty) {
      throw new Error('Phone number is already in use');
    }
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

    const { token, userCredential } = await this.getTokenAndCredential(email, password, true);
    const userId = userCredential.user.uid;

    const userRef = doc(this.db, 'users', userId);
    const user = {
      ...defaultUserInfo,
      birthday,
      email,
      id: userId,
      name,
      password: await generateHashProvider(password),
      phone,
      username: `@${name}_${birthday}`,
    } as User;

    await setDoc(userRef, user);

    return { ...user, token };
  }

  async signInUser(data: UserLogin): Promise<User | undefined> {
    const { emailOrPhone, password } = data;

    const {
      email: userEmail = '',
      password: userPassword = '',
      ...userInfo
    } = await this.getUserByEmailOrPhone(emailOrPhone);
    const userId = userInfo.id;

    await UserAuthRepository.validateUserPassword(password, userPassword);

    const { token } = await this.getTokenAndCredential(userEmail, password, false);

    return { ...userInfo, email: userEmail, id: userId, password: userPassword, token };
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
        username: `@${name}_${surname}`,
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
    await firebaseSignOut(this.auth);
  }
}
