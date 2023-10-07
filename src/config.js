import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLX7O50Wl3lnBKITNsxiRDmBbP-DW8ZfQ",
  authDomain: "lets-chat-e6227.firebaseapp.com",
  projectId: "lets-chat-e6227",
  storageBucket: "lets-chat-e6227.appspot.com",
  messagingSenderId: "1086411035250",
  appId: "1:1086411035250:web:5d84373a59610455c5e8eb",
  measurementId: "G-LV48Z4BJFN"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };