// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwbFJqomDDC2vVluU23m_yS5cArZkdng",
  authDomain: "my-app-1cc6a.firebaseapp.com",
  projectId: "my-app-1cc6a",
  storageBucket: "my-app-1cc6a.appspot.com",
  messagingSenderId: "188567368181",
  appId: "1:188567368181:web:70804939ad5a74f107f0bc",
  measurementId: "G-G59EXDL53C"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const database=getFirestore(app);
