// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARIphgigEJ2THIGv2HW2OrLSy01H711lk",
    authDomain: "rn-instacgram.firebaseapp.com",
    projectId: "rn-instacgram",
    storageBucket: "rn-instacgram.appspot.com",
    messagingSenderId: "695846279640",
    appId: "1:695846279640:web:63fd9bc3bce5c9a1387aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };