// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACH9nwqGWarOth-NNtjMQFFSRF-L2ZzWw",
  authDomain: "prueba-f0df9.firebaseapp.com",
  projectId: "prueba-f0df9",
  storageBucket: "prueba-f0df9.appspot.com",
  messagingSenderId: "26859760444",
  appId: "1:26859760444:web:5085c063cc8fe6f2bfcc39",
  measurementId: "G-6428LYQJ4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);