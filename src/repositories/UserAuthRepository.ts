import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  signOut as firebaseSignOut,
  UserCredential as FirebaseUserCredential,
  AdditionalUserInfo,
} from 'firebase/auth';
import { getDoc, setDoc, doc, Firestore, query, collection, where, getDocs } from 'firebase/firestore';

import { User } from '@/types/models/User';
import { UserLogin } from '@/types/models/UserLogin';
import { UserRegistration } from '@/types/models/UserRegistration';

import { auth, db } from '../firebase';

interface AuthRepository {
  signUpUser(data: UserRegistration): Promise<User | undefined>;
  signInUser(data: UserLogin): Promise<User | undefined>;
  signUpUserWithGoogle(): Promise<User | undefined>;
}

interface GoogleUserProfile {
  email?: string;
  given_name?: string;
  family_name?: string;
}

interface ExtendedUserCredential extends FirebaseUserCredential {
  additionalUserInfo?: AdditionalUserInfo;
}

export class UserAuthRepository implements AuthRepository {
  private auth: Auth = auth;

  private db: Firestore = db;

  async signUpUser(data: UserRegistration): Promise<User | undefined> {
    const { birthday, email, name, password, phone } = data;

    const usersRef = collection(this.db, 'users');
    const emailQuery = query(usersRef, where('email', '==', email));
    const phoneQuery = query(usersRef, where('phone', '==', phone));

    const [emailSnapshot, phoneSnapshot] = await Promise.all([getDocs(emailQuery), getDocs(phoneQuery)]);

    if (!emailSnapshot.empty) {
      throw new Error('Email is already in use');
    }

    if (!phoneSnapshot.empty) {
      throw new Error('Phone number is already in use');
    }

    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const userId = userCredential.user.uid;
    const token = await userCredential.user.getIdToken(true);

    const userRef = doc(this.db, 'users', userId);
    const user = {
      avatarUrl: '',
      bio: '',
      birthday,
      createdAt: new Date().toISOString(),
      email,
      followers: [],
      following: [],
      id: userId,
      name,
      password,
      phone,
      username: `@${name}_${birthday}`,
    } as User;

    await setDoc(userRef, user);

    return { ...user, token };
  }

  async signInUser(data: UserLogin): Promise<User | undefined> {
    const { emailOrPhone, password } = data;
    const userCredential = await signInWithEmailAndPassword(this.auth, emailOrPhone, password);
    const userId = userCredential.user.uid;
    const token = await userCredential.user.getIdToken(true);

    const userRef = doc(this.db, 'users', userId);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) return undefined;

    const userData = userDoc.data() as User;

    return { ...userData, id: userId, token };
  }

  async signUpUserWithGoogle(): Promise<User | undefined> {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/user.birthday.read');

    const userCredential = (await signInWithPopup(this.auth, provider)) as ExtendedUserCredential;
    const userId = userCredential.user.uid;
    const token = await userCredential.user.getIdToken(true);
    const userRef = doc(this.db, 'users', userId);
    const userDoc = await getDoc(userRef);

    let userData: User | undefined;
    if (!userDoc.exists()) {
      const profile = userCredential.additionalUserInfo?.profile as GoogleUserProfile;

      const email = profile?.email || userCredential.user.email || '';
      const name = profile?.given_name || userCredential.user.displayName || '';
      const surname = profile?.family_name || '';

      await setDoc(userRef, {
        bio: '',
        createdAt: new Date().toISOString(),
        email,
        followers: [],
        following: [],
        id: userId,
        imageUrl: userCredential.user.photoURL || null,
        name,
        username: `@${name}_${surname}`,
      } as User);
    }

    const userDocAfter = await getDoc(userRef);
    if (userDocAfter.exists()) {
      const data = userDocAfter.data() as User;
      userData = {
        ...data,
        id: userId,
        token,
      };
    }

    return userData;
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(this.auth);
  }
}
