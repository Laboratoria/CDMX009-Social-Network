import {router} from './index.js';  
  // Your web app's Firebase configuration
  /* 
  const firebaseConfig = {
    apiKey: "AIzaSyA1p8FeSsOXzP-VWvdJBRfvpnN1uix9e74",
    authDomain: "social-58419.firebaseapp.com",
    databaseURL: "https://social-58419.firebaseio.com",
    projectId: "social-58419",
    storageBucket: "social-58419.appspot.com",
    messagingSenderId: "15996157976",
    appId: "1:15996157976:web:0793e1a4a6a0860359036d",
    measurementId: "G-1FXE1SSQXJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/

//conexion  RealTime Database 
 // const database = firebase.database();
  const database = firebase.firestore();
  //Guardar datos  manual al momento de dar click en el boton guardar
  /*
  document.querySelector('#Guardar').addEventListener('click', () =>{ 
    database.ref("pruebadatos") 
    .set({
      nombre:"Ely",
      edad:'32', 
      sexo:'Femenino'
    })
  });*/ 

//Entra al servicio de google
export const authGoogle = () => {  
  const provider = new firebase.auth.GoogleAuthProvider();
  //const datos = document.querySelector('#VerGoogle');
  //funcion de dar click en el boton de google
 
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log('Parece que ya se registró con Google');
      //router('profile');
      //guardarDatos(result.user);  
    })
    .catch(function(error) {
      console.log('Hay un error para Google');
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      // ...
    }); 
}  

//Guarda los datos tradio del usuario de google
/*
function guardarDatos(user){
    const usuario = {   
        uid:user.uid,
        nombre:user.displayName, 
        email:user.email, 
         foto:user.photoURL
       }
       database.ref("GuardarDatos/" + user.uid) //Esta linea no permite guardar doble los datos
       .set(usuario)
}

//Se lee la base de Datos de Google
// s = snap de la base de datos y muestra la imagen de usuario un listado
database.ref('GuardarDatos')
.on('child_added',  (s) =>{
   let user = s.val(); 
   datos.innerHTML = '<img width="100" src="'+user.foto+'">'; 
});*/ 


/**
 * Proecesp para 
 * entrar con face
 * 
 * 
 */
export const authFacebook = () => {
  const providerFace = new firebase.auth.FacebookAuthProvider();
  //const datosFacebook = document.querySelector('#VerFacebook');
  //funcion de dar click en el boton de google

  firebase.auth().signInWithPopup(providerFace)
  .then(function(result) {
    console.log(result.user);
    console.log('Parece que ya se registró con Facebook');
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // ...
    //guardarFacebook(user);
  })
  .catch(function(error) {
    console.log('Hay un error para Facebook');
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      // ...
    }); 
}      

/*
//Guarda los datos tradio del usuario de google
function guardarFacebook(user){
    const usuario = {   
        uid:user.uid,
        nombre:user.displayName, 
        email:user.email, 
         foto:user.photoURL
       }
       database.ref("GuardarFacebook/" + user.uid) //Esta linea no permite guardar doble los datos
       .set(usuario)
}

//Se lee la base de Datos de Google
// s = snap de la base de datos y muestra la imagen de usuario un listado
database.ref('GuardarFacebook')
.on('child_added',  (s) =>{
   let user = s.val(); 
   datosFacebook.innerHTML = '<img width="100" src="'+user.foto+'">'; 
}); */