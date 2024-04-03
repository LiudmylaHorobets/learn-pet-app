import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_iKkmqXhdY3EALob7rW_PiEja5TN5kdo',
  authDomain: 'learn-app-c8082.firebaseapp.com',
  projectId: 'learn-app-c8082',
  storageBucket: 'learn-app-c8082.appspot.com',
  messagingSenderId: '336847184417',
  appId: '1:336847184417:web:b09a8befb438c989fe7960',
  measurementId: 'G-64RGK00Y1R',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
