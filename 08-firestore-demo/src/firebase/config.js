/*
* npm install firebase
*/

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcq0URCVG5JEUiJOJZJoObZFecYBNB4B0",
    authDomain: "nereaml-64b79.firebaseapp.com",
    databaseURL: "https://nereaml-64b79.firebaseio.com",
    projectId: "nereaml-64b79",
    storageBucket: "nereaml-64b79.appspot.com",
    messagingSenderId: "160773543213",
    appId: "1:160773543213:web:beba4a0942d025bf926fa4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();