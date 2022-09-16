// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalo_tAK4077P333FMF4OSwYjUwFk-pcM",
  authDomain: "react-firebase-app-18f5a.firebaseapp.com",
  projectId: "react-firebase-app-18f5a",
  storageBucket: "react-firebase-app-18f5a.appspot.com",
  messagingSenderId: "538146610289",
  appId: "1:538146610289:web:84d76cf4da758cbf508fd0",
  measurementId: "G-HZN5JF8DCM"
};

// Initialize Firebase
// eslint-disable-next-line
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
