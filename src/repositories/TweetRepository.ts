import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  DocumentReference,
  Firestore,
} from 'firebase/firestore';

import { db } from '@/firebase';
import { BaseRepository } from '@repositories/BaseRepository';
import { User } from '@type/models';
import { Tweet, TweetWithAuthor } from '@type/models/Tweet';

export class TweetRepository implements BaseRepository<Tweet> {
  private db: Firestore = db;

  async findAll(): Promise<TweetWithAuthor[]> {
    const tweetsQuery = query(collection(this.db, 'tweets'), orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(tweetsQuery);

    const tweets = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot) => {
        const tweet = { id: docSnapshot.id, ...docSnapshot.data() } as Tweet;

        const userRef = tweet.author as DocumentReference<User>;
        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : null;

        return {
          ...tweet,
          author: userData
            ? {
                avatarUrl: userData.avatarUrl,
                id: userData.id,
                name: userData.name,
                username: userData.username,
              }
            : {},
        } as TweetWithAuthor;
      })
    );

    return tweets;
  }

  async findOne(id: string): Promise<Tweet | null> {
    const docRef = doc(this.db, 'tweets', id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? ({ id: docSnap.id, ...docSnap.data() } as Tweet) : null;
  }

  async create(tweetData: Partial<Tweet>, userId: string): Promise<void> {
    const userRef = doc(this.db, 'users', userId);

    const docRef = doc(this.db, 'tweets', tweetData.id!);

    const tweetPayload = {
      ...tweetData,
      author: userRef,
    };

    await setDoc(docRef, tweetPayload);
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, 'tweets', id);
    await deleteDoc(docRef);
  }

  async update(id: string, data: Partial<Tweet>): Promise<void> {
    const docRef = doc(this.db, 'tweets', id);
    await setDoc(docRef, data, { merge: true });
  }

  async findByUser(userId: string): Promise<Tweet[]> {
    const userRef = doc(this.db, 'users', userId);

    const tweetsQuery = query(collection(this.db, 'tweets'), where('author', '==', userRef));
    const querySnapshot = await getDocs(tweetsQuery);

    const tweets = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const tweetData = doc.data();
        const authorRef = tweetData.author as DocumentReference;
        const authorSnap = await getDoc(authorRef);
        const authorData = authorSnap.exists() ? (authorSnap.data() as User) : null;

        return {
          id: doc.id,
          ...tweetData,
          author: authorData ? { ...authorData, id: authorRef.id } : null,
        } as unknown as Tweet;
      })
    );

    return tweets;
  }

  async toggleLike(tweetId: string, userId: string): Promise<void> {
    const tweetRef = doc(this.db, 'tweets', tweetId);
    const tweetSnap = await getDoc(tweetRef);

    if (!tweetSnap.exists()) {
      throw new Error('Tweet not found');
    }

    const tweetData = tweetSnap.data() as Tweet;
    const likes = tweetData.likes || [];

    const userLikedIndex = likes.indexOf(userId);

    if (userLikedIndex === -1) {
      likes.push(userId);
    } else {
      likes.splice(userLikedIndex, 1);
    }

    await setDoc(tweetRef, { likes }, { merge: true });
  }

  async searchTweetsByContentAndUser(queryStr: string, userId: string): Promise<TweetWithAuthor[]> {
    const userRef = doc(this.db, 'users', userId);

    const tweetsQuery = query(
      collection(this.db, 'tweets'),
      where('author', '==', userRef),
      where('content', '>=', queryStr),
      where('content', '<=', `${queryStr}\uf8ff`),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(tweetsQuery);

    const tweets = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot) => {
        const tweet = { id: docSnapshot.id, ...docSnapshot.data() } as Tweet;

        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : null;

        return {
          ...tweet,
          author: userData
            ? {
                avatarUrl: userData.avatarUrl,
                id: userData.id,
                name: userData.name,
                username: userData.username,
              }
            : {},
        } as TweetWithAuthor;
      })
    );

    return tweets;
  }
}
