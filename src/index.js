/*import { example } from './example.js';
example();*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkfImtzIXqG7KbK3b6Tu3MABA91hPqdFA",
    authDomain: "social-network-pruebas.firebaseapp.com",
    databaseURL: "https://social-network-pruebas.firebaseio.com",
    projectId: "social-network-pruebas",
    storageBucket: "social-network-pruebas.appspot.com",
    messagingSenderId: "327573056555",
    appId: "1:327573056555:web:38bda7ccadbd1fb70c0e6e",
    measurementId: "G-ZLRFD83MS0"
};

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();