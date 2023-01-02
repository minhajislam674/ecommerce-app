import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInwithRedirect, 
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

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