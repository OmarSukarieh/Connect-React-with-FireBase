import firebase from "firebase";
require('firebase/auth');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6x5csqFi2a9oWWFzyQTL29hcKzMD1xxg",
  authDomain: "react-firebase-au.firebaseapp.com",
  databaseURL: "https://react-firebase-au.firebaseio.com",
  projectId: "react-firebase-au",
  storageBucket: "react-firebase-au.appspot.com",
  messagingSenderId: "729182361602",
  appId: "1:729182361602:web:9091491508ed3a1c786f1b",
};

/*if (!firebase.apps.length) {
  // Initialize Firebase
  
}*/



  const fire = firebase.initializeApp(firebaseConfig); 
  export default fire;