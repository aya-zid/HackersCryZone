import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; 
import { firebaseConfig } from './firebaseConfig';
import './contact.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

