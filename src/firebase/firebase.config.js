// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoPSmYpHNg5gMjeqlKQMTgPbnLhV_-Sn4",
  authDomain: "coffee-store-3e0a3.firebaseapp.com",
  projectId: "coffee-store-3e0a3",
  storageBucket: "coffee-store-3e0a3.appspot.com",
  messagingSenderId: "952403203543",
  appId: "1:952403203543:web:0bb8446f2cc58247d36792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth