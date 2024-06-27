// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo4QK4LUDyVPBPMwXm_b9Xpg0O62D9OTk",
  authDomain: "netflix-clone-7cad4.firebaseapp.com",
  projectId: "netflix-clone-7cad4",
  storageBucket: "netflix-clone-7cad4.appspot.com",
  messagingSenderId: "348047251406",
  appId: "1:348047251406:web:f1946e1b417c85c7fbbd9f",
  measurementId: "G-XPSYQ5598B"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();