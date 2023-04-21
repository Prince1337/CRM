// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBpIMPgaR2t_QQY_86Vl1C69xnkc7QCV90",
  authDomain: "myapp-e6346.firebaseapp.com",
  projectId: "myapp-e6346",
  storageBucket: "myapp-e6346.appspot.com",
  messagingSenderId: "420028018076",
  appId: "1:420028018076:web:a695b92548227c82f72c59",
  measurementId: "G-PS0MDYDVX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const baseUrl = 'http://localhost:8080';