// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "chat-6d72b.firebaseapp.com",
  projectId: "chat-6d72b",
  storageBucket: "chat-6d72b.appspot.com",
  messagingSenderId: "566000729922",
  appId: "1:566000729922:web:acc3a3cf9d4716257a92db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
