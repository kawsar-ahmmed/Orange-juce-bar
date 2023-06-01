// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtXO_DyQ0IsKTLAZnRXjKuqsyBd_qRKg",
  authDomain: "orange-juice-bar.firebaseapp.com",
  projectId: "orange-juice-bar",
  storageBucket: "orange-juice-bar.appspot.com",
  messagingSenderId: "1007545538645",
  appId: "1:1007545538645:web:7382ba861d0b9637f19cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
