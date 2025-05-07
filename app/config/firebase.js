import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbnRdDcIi_WRW9PObLZE3zXXpPYvcB4lk',
  authDomain: 'qr-code-bb715.firebaseapp.com',
  projectId: 'qr-code-bb715',
  storageBucket: 'qr-code-bb715',
  messagingSenderId: '360549327083',
  appId: '1:360549327083:web:7ce5cbe6e5787d7dc21eae',
  measurementId: 'G-BH6NBWW3EP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
