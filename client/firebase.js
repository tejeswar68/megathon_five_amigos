// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr3VceoaP8W6jXc5xs7V6n94_8vMEaRu8",
    authDomain: "megathon5555.firebaseapp.com",
    projectId: "megathon5555",
    storageBucket: "megathon5555.appspot.com",
    messagingSenderId: "342282018151",
    appId: "1:342282018151:web:6d90ed86ef97456a7ba3c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };