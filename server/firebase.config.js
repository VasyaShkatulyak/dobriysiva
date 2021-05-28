import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDguwbDNgJj2j5__P3UeeaQ0KRY_HFLIog",
    authDomain: "psenica-d23e0.firebaseapp.com",
    projectId: "psenica-d23e0",
    storageBucket: "psenica-d23e0.appspot.com",
    messagingSenderId: "660474432318",
    appId: "1:660474432318:web:2dea26f3d3d3617789fa6f",
    measurementId: "G-LVW480BCL3"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
