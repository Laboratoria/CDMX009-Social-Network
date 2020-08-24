import { changeView } from './view-controler/router.js';


const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

const initFirebase = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyA9A0nhwI6q1W6-72LbE4LC9Mi9i3nWSew',
    authDomain: 'bichigra-m.firebaseapp.com',
    databaseURL: 'https://bichigra-m.firebaseio.com',
    projectId: 'bichigra-m',
    storageBucket: 'bichigra-m.appspot.com',
    messagingSenderId: '349399643965',
    appId: '1:349399643965:web:f1b27146da69266891b754',
    measurementId: 'G-VSB54NJVLP',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore();
};

window.addEventListener('load', initFirebase);
window.addEventListener('load', init);
