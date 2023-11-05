// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuT-uz9cIdlmACI2smJMIB_m_BVsbyBY4",
  authDomain: "bookwaves-c18d0.firebaseapp.com",
  projectId: "bookwaves-c18d0",
  storageBucket: "bookwaves-c18d0.appspot.com",
  messagingSenderId: "602643334045",
  appId: "1:602643334045:web:28b885e5d661664425a574",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);