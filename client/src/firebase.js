// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-3a3d7.firebaseapp.com",
  projectId: "realestate-3a3d7",
  storageBucket: "realestate-3a3d7.appspot.com",
  messagingSenderId: "56898914826",
  appId: "1:56898914826:web:4637bb7df97c23b2266df3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



// this code is totally form google firebase.