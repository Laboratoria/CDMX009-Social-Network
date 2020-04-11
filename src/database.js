   // Your web app's Firebase configuration
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
  firebase.initializeApp(firebaseConfig);
//conexion  RealTime Database 
  const database = firebase.database();
  //Guardar datos  manual al momento de dar click en el boton guardar
  document.querySelector('#Guardar').addEventListener('click', () =>{ 
    database.ref("pruebadatos") 
    .set({
      nombre:"Ely",
      edad:'32', 
      sexo:'Femenino'
    })
  }); 

//Entra al servicio de google
const provider = new firebase.auth.GoogleAuthProvider();
const datos = document.querySelector('#VerGoogle');
//funcion de dar click en el boton de google
document.querySelector('#Google').addEventListener('click', () =>{ 
    firebase.auth().signInWithPopup(provider).then(function(result) {
       guardarDatos(result.user);  
    });
});

//Guarda los datos tradio del usuario de google
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
   datos.innerHTML = '<img src="'+user.foto+'">'; 
}); 
