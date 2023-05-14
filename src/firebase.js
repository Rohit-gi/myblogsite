import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwj8RVh9TT1X0-cob-19ZjLiw8eSZlvko",
  authDomain: "myblogsite-6ba2a.firebaseapp.com",
  projectId: "myblogsite-6ba2a",
  storageBucket: "myblogsite-6ba2a.appspot.com",
  messagingSenderId: "652034255072",
  appId: "1:652034255072:web:a4614c7109569d2e18c885",
  measurementId: "G-1HTQ27X03V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
