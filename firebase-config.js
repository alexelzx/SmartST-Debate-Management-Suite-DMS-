// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, doc, onSnapshot, setDoc, updateDoc, collection } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9TyyYR3_rIzi7lNt4mRwTiinefy1YQn0",
  authDomain: "smartst-debate.firebaseapp.com",
  projectId: "smartst-debate",
  storageBucket: "smartst-debate.firebasestorage.app",
  messagingSenderId: "128238171772",
  appId: "1:128238171772:web:c08fe0c458ed7d9630fbf9",
  measurementId: "G-EN8YW4TJTR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, onSnapshot, setDoc, updateDoc, collection };