import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAp_Kv1MaS8ynbH4RXHaPjLqw27ECCWeOE",
	authDomain: "react-chat-9985c.firebaseapp.com",
	projectId: "react-chat-9985c",
	storageBucket: "react-chat-9985c.appspot.com",
	messagingSenderId: "387510078612",
	appId: "1:387510078612:web:2a5e148e7d9a1cc058b881",
	measurementId: "G-HPY5KD275H"
  };
  
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);
  	firebase.analytics();
  const auth = firebase.auth();
  const db = firebase.firestore();

  auth.useEmulator('http://localhost:9099');
  if(window.location.hostname === 'localhost'){
	  db.useEmulator('localhost', '8081');
  }

  export  {auth, db };
  export default firebase;