import { DocumentReference } from 'firebase/firestore';

export interface Tweet {
  id: string;
  author: DocumentReference;
  content: string;
  likes: string[];
  createdAt: string;
  isDeleted: boolean;
  images?: string[];
}
