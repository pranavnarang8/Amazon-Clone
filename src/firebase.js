import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtxfrR2-AnJp11-jbOcjfeHN8gQcHncC0",
  authDomain: "clone-19857.firebaseapp.com",
  projectId: "clone-19857",
  storageBucket: "clone-19857.appspot.com",
  messagingSenderId: "815447041891",
  appId: "1:815447041891:web:58c44c61a7fa8a1d4dd556",
  measurementId: "G-RWLFQN3PFH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//to initialize the firebase database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
