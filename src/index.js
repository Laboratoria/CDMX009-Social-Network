import singIn from './login.js'

function init (){
    singIn()
}
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBuxP-xlUpYjWc5KNNt6q0hKbsxc8L4cE4",
    authDomain: "cdmx009-f4cac.firebaseapp.com",
    databaseURL: "https://cdmx009-f4cac.firebaseio.com",
    projectId: "cdmx009-f4cac",
    storageBucket: "cdmx009-f4cac.appspot.com",
    messagingSenderId: "206411662308",
    appId: "1:206411662308:web:8c3266d5640e307ca57df1",
    measurementId: "G-L6NB5984DB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  window.addEventListener('load', init);