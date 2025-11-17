// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-react-63286.firebaseapp.com",
  projectId: "mern-blog-react-63286",
  storageBucket: "mern-blog-react-63286.firebasestorage.app",
  messagingSenderId: "30003978708",
  appId: "1:30003978708:web:71c96b78e6f5f10acef641",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
