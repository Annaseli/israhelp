// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn485PueWKrybBAVJabFK2HtDUKSUnKd0",
    authDomain: "israhelp-ddfd8.firebaseapp.com",
    projectId: "israhelp-ddfd8",
    storageBucket: "israhelp-ddfd8.appspot.com",
    messagingSenderId: "714111216987",
    appId: "1:714111216987:web:3b4589928c53fd3a013e7e",
    measurementId: "G-0XL38KMRPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);