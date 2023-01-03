import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInwithRedirect, 
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSKUZ4uPD9GXiewI1QsS5owztRzi4fMxA",
  authDomain: "clothing-store-db-de08c.firebaseapp.com",
  projectId: "clothing-store-db-de08c",
  storageBucket: "clothing-store-db-de08c.appspot.com",
  messagingSenderId: "721593835056",
  appId: "1:721593835056:web:32e65710849fba59dfd7f5"
};

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid );
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log("error while creating user", error.message);
      }
    }
    return userDocRef;
  }