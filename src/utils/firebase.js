// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASzWgdvHi1RjIPmmzwaw03eBaodCoeMeE",
  authDomain: "movies-pilot.firebaseapp.com",
  projectId: "movies-pilot",
  storageBucket: "movies-pilot.appspot.com",
  messagingSenderId: "665619244355",
  appId: "1:665619244355:web:4d9f790901ffb4a0fc7bf6",
  measurementId: "G-2HPKE8ZX6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();