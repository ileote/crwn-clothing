import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzpWZ5fDNH4BcFYB22sNi71i_EgfUl3WI",
  authDomain: "crwn-db-2df83.firebaseapp.com",
  projectId: "crwn-db-2df83",
  storageBucket: "crwn-db-2df83.appspot.com",
  messagingSenderId: "101380647025",
  appId: "1:101380647025:web:4c9ea10cf3c97687d493d0",
  measurementId: "G-VFFXD0TY8Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;