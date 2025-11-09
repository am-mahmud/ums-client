// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAMtCVurMb21GJk1r1EHCKb5FiRFTt-FI",
  authDomain: "ums-web-ec7b9.firebaseapp.com",
  projectId: "ums-web-ec7b9",
  storageBucket: "ums-web-ec7b9.firebasestorage.app",
  messagingSenderId: "837105834575",
  appId: "1:837105834575:web:5c18cbdcd28d4a40a1683a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);