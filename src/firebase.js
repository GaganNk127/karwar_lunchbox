import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClXKgCIBIlNvogBWRsbyZ5P25eWn4h13M",
  authDomain: "karwarlunchbox.firebaseapp.com",
  projectId: "karwarlunchbox",
  storageBucket: "karwarlunchbox.firebasestorage.app",
  messagingSenderId: "562585860654",
  appId: "1:562585860654:web:a5d59b8f1f45dd1397bdbf",
  measurementId: "G-6KC3QF8FMG",
};

// Validate required environment variables
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase configuration is missing. Please check your environment variables.');
  throw new Error('Firebase configuration is incomplete');
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
