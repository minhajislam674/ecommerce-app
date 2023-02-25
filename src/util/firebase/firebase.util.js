import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(obj => {
      const docRef = doc(collectionRef, obj.title.toLowerCase());
      batch.set(docRef, obj);
    });

    await batch.commit();
    console.log("batch committed")
  }
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return; 

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
          ...additionalInformation,
        });
      } catch (error) {
        console.log("error while creating user", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

  }

  export const signOutUser = async () => {
    await signOut(auth);
  }

  export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
  }