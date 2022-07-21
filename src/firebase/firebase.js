import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsPgwnHn8KKZ-AbFbiEvFRSvKw1itW4ro",
  authDomain: "reactjs-coderhouse-8d4ef.firebaseapp.com",
  projectId: "reactjs-coderhouse-8d4ef",
  storageBucket: "reactjs-coderhouse-8d4ef.appspot.com",
  messagingSenderId: "83223187362",
  appId: "1:83223187362:web:14692663bfcebadd3eacfb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)