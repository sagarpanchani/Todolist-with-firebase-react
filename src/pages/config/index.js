// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr9GNGE_ntW6SnFO-P7F7LW11DMzZoWT4",
  authDomain: "cricket-updates-59aea.firebaseapp.com",
  databaseURL: "https://cricket-updates-59aea-default-rtdb.firebaseio.com",
  projectId: "cricket-updates-59aea",
  storageBucket: "cricket-updates-59aea.appspot.com",
  messagingSenderId: "1067104887570",
  appId: "1:1067104887570:web:1070b3900981928ebe89cb",
  measurementId: "G-D6XVVYR2J2"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();
const firestore = getFirestore();
export {auth, db,firestore}