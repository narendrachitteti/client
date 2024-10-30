// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIycRF309QaaX1SGLDGBcXu5_Pshbledc",
  authDomain: "e-commerce-1daba.firebaseapp.com",
  projectId: "e-commerce-1daba",
  storageBucket: "e-commerce-1daba.appspot.com",
  messagingSenderId: "354878840982",
  appId: "1:354878840982:web:151c6887d30723ad1662b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
