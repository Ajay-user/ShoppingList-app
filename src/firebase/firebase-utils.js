// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebase_Config = {
  apiKey: "AIzaSyDo_LTZHp0QwpzXBpNctaZL3AIM0_RJvoI",
  authDomain: "style-shop-db.firebaseapp.com",
  databaseURL: "https://style-shop-db.firebaseio.com",
  projectId: "style-shop-db",
  storageBucket: "style-shop-db.appspot.com",
  messagingSenderId: "986039959679",
  appId: "1:986039959679:web:b910856c934bc1be837f4a",
  measurementId: "G-PJMVSQXYE6",
};

// Initialize Firebase
firebase.initializeApp(firebase_Config);

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

//  setup google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// set prompt
provider.setCustomParameters({ prompt: "select_account" });
// sign-in with popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// utility create a user profile in firebase firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};
