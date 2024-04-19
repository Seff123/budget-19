// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD70wqk2KYojBO_fAEiWEhDbiz4lo8vw2s",
  authDomain: "budget-19.firebaseapp.com",
  projectId: "budget-19",
  storageBucket: "budget-19.appspot.com",
  messagingSenderId: "208067569050",
  appId: "1:208067569050:web:60fa8ff0da64988b6fc623",
  measurementId: "G-4H0G6G25WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
