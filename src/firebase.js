import "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmUQMEYzDvTjn5pC0Wl4srqStIYc2kapQ",
  authDomain: "twitter-clone-b518e.firebaseapp.com",
  projectId: "twitter-clone-b518e",
  storageBucket: "twitter-clone-b518e.appspot.com",
  messagingSenderId: "113102791503",
  appId: "1:113102791503:web:98e532f0f09dc9aec21b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
