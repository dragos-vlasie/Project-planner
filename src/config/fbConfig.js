import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyDpegUxXrqGP9KNucO787qyTxujz1tPLqU",
    authDomain: "project-planer-ed38e.firebaseapp.com",
    databaseURL: "https://project-planer-ed38e.firebaseio.com",
    projectId: "project-planer-ed38e",
    storageBucket: "project-planer-ed38e.appspot.com",
    messagingSenderId: "397975288864"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase