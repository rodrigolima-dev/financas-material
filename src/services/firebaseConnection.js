
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXVi1BOcc48jKASaTOroD9vKifeHcp_Cw",
  authDomain: "financas-a0e4f.firebaseapp.com",
  projectId: "financas-a0e4f",
  storageBucket: "financas-a0e4f.appspot.com",
  messagingSenderId: "45927616277",
  appId: "1:45927616277:web:a6b398f423f6470bc0e31c",
  measurementId: "G-P718R50E89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database, ref, set, get}