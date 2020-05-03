import { example } from './example.js';

example();

  

//Comenzar firebase código que te entrega la pág
var firebaseConfig = {
  apiKey: "AIzaSyCDLFpwwCuLGd9UevIDrQDRivklLAJVIVc",
  authDomain: "natalia-33785.firebaseapp.com",
  databaseURL: "https://natalia-33785.firebaseio.com",
  projectId: "natalia-33785",
  storageBucket: "natalia-33785.appspot.com",
  messagingSenderId: "771319153180",
  appId: "1:771319153180:web:fcf4418e667092a05695d9",
  measurementId: "G-42MBED2ZWZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Función para comenzar a declarar firebase
  let contactosRef = firebase.database().ref('contactosWeb');
  document.getElementById('alertInfo').style.display= 'none';
  
  //Llamar al formulario
  document.getElementById('formContacto').addEventListener('submit', guardarFormulario);
  
  function guardarFormulario(e){
  e.preventDefault();
  let email = document.getElementById('txtEmail').value;
  let password = document.getElementById('txtPass').value;
  
  let nuevoComentarioRef = contactosRef.push();
  nuevoComentarioRef.set({
  email: email,
  password: password,
  });
  
  document.getElementById('alertInfo').style.display= 'block';
  //Borrar la info
  document.getElementById('formContacto').reset();
  //Mensaje de confirmación
  setTimeout(function(){
  document.getElementById('alertInfo').style.display= 'none';
  }, 2000);
  }
  