import bcrypt from 'bcryptjs';
import {
  Auth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updateFirebasePassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, getDocs, query, orderBy, Firestore, where } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { compareHashedProvider } from '@lib/format';
import { BaseRepository } from '@repositories/BaseRepository';
import { User } from '@type/models/User';

export class UserRepository extends BaseRepository<User> {
  private db: Firestore = db;

  private auth: Auth = auth;

  static sanitizeUser(user: User): Omit<User, 'password'> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...sanitizedUser } = user;

    return sanitizedUser;
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const usersQuery = query(collection(this.db, 'users'), orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(usersQuery);

    const users = querySnapshot.docs.map((doc) => {
      const user = { id: doc.id, ...doc.data() } as User;

      return UserRepository.sanitizeUser(user);
    });

    return users;
  }

  async findOne(id: string): Promise<Omit<User, 'password'> | null> {
    const docRef = doc(this.db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = { id: docSnap.id, ...docSnap.data() } as User;

      return UserRepository.sanitizeUser(user);
    }

    return null;
  }

  async update(id: string, userData: Partial<Omit<User, 'password'>>): Promise<void> {
    const docRef = doc(this.db, 'users', id);

    await setDoc(docRef, userData, { merge: true });
  }

  async updatePassword(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const docRef = doc(this.db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = { id: docSnap.id, ...docSnap.data() } as User;
      const isPasswordValid = await compareHashedProvider(currentPassword, user.password || '');

      if (isPasswordValid) {
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await setDoc(docRef, { password: hashedNewPassword }, { merge: true });
      } else {
        throw new Error('Current password is incorrect');
      }
    } else {
      throw new Error('User not found');
    }
  }

  async updateFirebaseAuthPassword(currentPassword: string, newPassword: string): Promise<void> {
    const user = this.auth.currentUser;

    if (!user) {
      throw new Error('No user is currently logged in');
    }

    const credential = EmailAuthProvider.credential(user.email || '', currentPassword);

    try {
      await reauthenticateWithCredential(user, credential);

      await updateFirebasePassword(user, newPassword);
    } catch (error) {
      throw new Error('Failed to update password in Firebase Auth');
    }
  }

  async searchUsers(queryStr: string): Promise<Omit<User, 'password'>[]> {
    const usersQuery = query(
      collection(this.db, 'users'),
      where('name', '>=', queryStr),
      where('name', '<=', `${queryStr}\uf8ff`),
      orderBy('name')
    );

    const querySnapshot = await getDocs(usersQuery);

    const users = querySnapshot.docs.map((doc) => {
      const user = { id: doc.id, ...doc.data() } as User;

      return UserRepository.sanitizeUser(user);
    });

    return users;
  }
}
