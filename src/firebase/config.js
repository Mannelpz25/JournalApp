// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlqpujpaM_VVSjxDlZZAnclczw8FMlOE0",
  authDomain: "react-cursos-27194.firebaseapp.com",
  projectId: "react-cursos-27194",
  storageBucket: "react-cursos-27194.appspot.com",
  messagingSenderId: "977132039569",
  appId: "1:977132039569:web:103ccc4019e0c3fde43e30"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp);