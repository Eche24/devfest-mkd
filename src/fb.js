import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChi-hyIfzpvWg0ehU18K5dS_Pz5dSrTds",
  authDomain: "devfestmakurdi.firebaseapp.com",
  databaseURL: "https://devfestmakurdi.firebaseio.com",
  projectId: "devfestmakurdi",
  storageBucket: "devfestmakurdi.appspot.com",
  messagingSenderId: "1021366833604",
  appId: "1:1021366833604:web:f71bd2a311b7a144"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots:true });
  
  export default db;

  