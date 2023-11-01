// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBUlIhqbKRnxQsxO8sv-GnuaMsCk9WF4Bc",
    authDomain: "mybazaar-e7d63.firebaseapp.com",
    projectId: "mybazaar-e7d63",
    storageBucket: "mybazaar-e7d63.appspot.com",
    messagingSenderId: "213335119636",
    appId: "1:213335119636:web:159d4b20dbd21066825401",
    measurementId: "G-9CE6GN5VHS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };