import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const tweetsRef = collection(db, "tweets");
export const hashtagsRef = collection(db, "timeline");

export const setDataToDB = async (
  tweetID,
  displayName,
  username,
  textContent,
  profImg
) => {
  await setDoc(doc(tweetsRef, tweetID), {
    displayName: displayName,
    username: username,
    textContent: textContent,
    profImg: profImg,
    id: tweetID,
    time: serverTimestamp(),
  });
  console.log(serverTimestamp());
};
