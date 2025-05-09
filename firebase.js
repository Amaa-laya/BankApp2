// firebase.js (for v8)
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbeZV5oPuaUTWw9vslifkFv7OE4otYilM",
  authDomain: "bankapp-4ce0d.firebaseapp.com",
  projectId: "bankapp-4ce0d",
  storageBucket: "bankapp-4ce0d.appspot.com",
  messagingSenderId: "338244266891",
  appId: "1:338244266891:web:b5f9ae780eb56b59d6dd8e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };

