import singIn from './login.js';
import profile from './profile.js';
import welcomeView from './welcome.js';
import showOupladWindow from './uopladContent.js';
let btns= document.querySelectorAll('.btnNav');

function router(root) {
  singIn();
  switch(root){
    case 'profile':
      profile();
      break;
    case 'welcome':
      welcomeView();
      break;
    case 'oupladContent':
      showOupladWindow();
      break;
  }
}

// btns.forEach(btn => btn.onclick= e => router(e.target.id))
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuxP-xlUpYjWc5KNNt6q0hKbsxc8L4cE4',
  authDomain: 'cdmx009-f4cac.firebaseapp.com',
  databaseURL: 'https://cdmx009-f4cac.firebaseio.com',
  projectId: 'cdmx009-f4cac',
  storageBucket: 'cdmx009-f4cac.appspot.com',
  messagingSenderId: '206411662308',
  appId: '1:206411662308:web:8c3266d5640e307ca57df1',
  measurementId: 'G-L6NB5984DB',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
window.addEventListener('load', router);
