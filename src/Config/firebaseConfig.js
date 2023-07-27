// v9 compact packages

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADk6yhgvncWO4AnjJxoIKioCucZMkasxw",
    authDomain: "react-crud-app-547c8.firebaseapp.com",
    projectId: "react-crud-app-547c8",
    storageBucket: "react-crud-app-547c8.appspot.com",
    messagingSenderId: "111763646670",
    appId: "1:111763646670:web:ecc70532a56e10c71d489f",
    measurementId: "G-3W4TLD5WHQ"
  };

  const Fireapp  = firebase.initializeApp(firebaseConfig);
  
  export default Fireapp
