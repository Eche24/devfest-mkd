import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGTPVbCAH9VEhEv_UfzdQtsR7I96Dr1Mc",
    authDomain: "gdg-makurdi.firebaseapp.com",
    databaseURL: "https://gdg-makurdi.firebaseio.com",
    projectId: "gdg-makurdi",
    storageBucket: "gdg-makurdi.appspot.com",
    messagingSenderId: "965233811045",
    appId: "1:965233811045:web:171e3b0f6b7c722b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots:true });
  
  export default db;