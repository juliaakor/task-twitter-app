import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { ENV } from '@constants/env';

const firebaseConfig = {
  apiKey: ENV.firebaseApiKey,
  appId: ENV.firebaseAppId,
  authDomain: ENV.firebaseAuthDomain,
  measurementId: ENV.firebaseMeasurementId,
  messagingSenderId: ENV.firebaseMessagingSenderId,
  projectId: ENV.firebaseProjectId,
  storageBucket: ENV.firebaseStorageBucket,
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
