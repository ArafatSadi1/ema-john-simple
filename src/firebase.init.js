// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovk0-IE-LeqUhxKIZAUhcNqnkXdjl9xE",
  authDomain: "ema-jhon-simple-4db12.firebaseapp.com",
  projectId: "ema-jhon-simple-4db12",
  storageBucket: "ema-jhon-simple-4db12.appspot.com",
  messagingSenderId: "929731803553",
  appId: "1:929731803553:web:172b8461937a3c84db33e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;