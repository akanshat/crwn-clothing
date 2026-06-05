import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAFHmZDvf5-IHf7JyveAFRbTvxUFq6o6A",
  authDomain: "crwn-3e701.firebaseapp.com",
  databaseURL: "https://crwn-3e701.firebaseio.com",
  projectId: "crwn-3e701",
  storageBucket: "crwn-3e701.firebasestorage.app",
  messagingSenderId: "694712890700",
  appId: "1:694712890700:web:866cd6e2b2956211934be9",
  measurementId: "G-RR6260H7Q5"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, 'users', userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    if (error?.code === 'auth/popup-closed-by-user') return;
    console.error(
      '[Google sign-in]',
      error?.code,
      error?.message,
      '\nIf you see deleted_client in the browser, Firebase is still using a deleted OAuth client.',
      'Fix: scripts/relink-google-oauth.sh or Firebase Console → Auth → Google (new Web client).'
    );
    throw error;
  }
};
export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const signUpWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const signOutUser = () => signOut(auth);
