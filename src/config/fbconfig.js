// TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKaJkKducJ0FQEfHgX9XpNNU4cYGqwjlw",
  authDomain: "project-piglet-909a2.firebaseapp.com",
  projectId: "project-piglet-909a2",
  storageBucket: "project-piglet-909a2.appspot.com",
  messagingSenderId: "245194952075",
  appId: "1:245194952075:web:7fa1e82734200f3d64738e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
