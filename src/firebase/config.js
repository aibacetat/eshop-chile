import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAnedyVpAkdFOm7fyiJOilNfxjYkgQidEY",
  authDomain: "eshop-chile.firebaseapp.com",
  projectId: "eshop-chile",
  storageBucket: "eshop-chile.appspot.com",
  messagingSenderId: "720565066587",
  appId: "1:720565066587:web:d3158961964bcc3f9b587e"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
