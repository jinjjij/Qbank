// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzXtbj14WPGmwXxCqH4GrqObda1QeSlQM",
  authDomain: "qbank-64381.firebaseapp.com",
  projectId: "qbank-64381",
  storageBucket: "qbank-64381.appspot.com",
  messagingSenderId: "718897691418",
  appId: "1:718897691418:web:6019d1b69a6e3a525b8aa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

export {fireStore};