// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQJFe1_5oztcRH8P9UYOmWzBB9R3T6Nv8",
    authDomain: "vidyayan-dashboard.firebaseapp.com",
    projectId: "vidyayan-dashboard",
    storageBucket: "vidyayan-dashboard.appspot.com",
    messagingSenderId: "910445200239",
    appId: "1:910445200239:web:058c16e40e7b49999cde9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;