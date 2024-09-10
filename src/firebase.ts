import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { ENV } from '@constants/env';

const firebaseConfig = {
  apiKey: ENV.firebaseApiKey,
  appId: ENV.firebaseAppId,
  authDomain: ENV.firebaseApiKey,
  measurementId: ENV.firebaseApiKey,
  messagingSenderId: ENV.firebaseApiKey,
  projectId: ENV.firebaseApiKey,
  storageBucket: ENV.firebaseApiKey,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
