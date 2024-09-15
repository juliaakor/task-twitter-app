import { DocumentReference } from 'firebase/firestore';

import { User } from './User';

export interface Tweet {
  id: string;
  author: DocumentReference;
  content: string;
  likes: string[];
  createdAt: string;
  isDeleted: boolean;
  images?: string[];
}

export type TweetWithAuthor = Omit<Tweet, 'author'> & {
  author: Partial<User>;
};
