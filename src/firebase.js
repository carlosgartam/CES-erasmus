import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFbDfMVu0YbJ6kqsByffGJ9Inyv2JETrY",
    authDomain: "sds2-la.firebaseapp.com",
    projectId: "sds2-la",
    storageBucket: "sds2-la.appspot.com",
    messagingSenderId: "178231827449",
    appId: "1:178231827449:web:720e2d200ad38095a0fb28",
    measurementId: "G-T2MJ6FH8ZF"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();