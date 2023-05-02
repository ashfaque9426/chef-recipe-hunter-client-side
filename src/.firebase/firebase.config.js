// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkb0QIRE0Ahc0veCil6tfwzyKko8KGmP0",
    authDomain: "the-food-artisan.firebaseapp.com",
    projectId: "the-food-artisan",
    storageBucket: "the-food-artisan.appspot.com",
    messagingSenderId: "1083850881996",
    appId: "1:1083850881996:web:7f8182d5799aed0578fb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;