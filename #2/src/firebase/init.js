// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXsTlEyxZDg1F2FFPehjq6aNz4BxePvWA",
  authDomain: "react-firebase-boilerpla-6c000.firebaseapp.com",
  projectId: "react-firebase-boilerpla-6c000",
  storageBucket: "react-firebase-boilerpla-6c000.appspot.com",
  messagingSenderId: "971701796358",
  appId: "1:971701796358:web:e13730870facaf05a54d87",
  measurementId: "G-RZ1QMPC7L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
