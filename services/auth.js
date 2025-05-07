// Add Firebase email verification, not implemented yet in flow.
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};