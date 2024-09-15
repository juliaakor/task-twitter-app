import bcrypt from 'bcryptjs';
import { doc, getDoc, setDoc, collection, getDocs, query, orderBy, Firestore } from 'firebase/firestore';

import { db } from '@/firebase';
import { compareHashedProvider } from '@lib/format';
import { BaseRepository } from '@repositories/BaseRepository';
import { User } from '@type/models/User';

export class UserRepository extends BaseRepository<User> {
  private db: Firestore = db;

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
}
