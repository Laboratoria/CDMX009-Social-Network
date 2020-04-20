import { registros } from './pantalla2.js'
import { home } from './pantalla3.js'

let root = document.querySelector('#root');
 export const login = () => {
let p = `

     <img class='image' src="/img/portada.jpg">
     <h1> Bienvenida a nuestra comunidad  
     de programadoras </h1>
     <img class='logo' src="./img/logo.jpg">
      <form class ='input'>
         <input type="text" id="email" class="email" placeholder="example@gmail.com" required>
         <input type="password" id="password" class="password" placeholder="Password" required>
         <input type="button" value="Ingresar" id="getInTo" class="acess">
      </form>
      <p class='options'> Ingresa con:</p>
           <img class="logoF" src="/img/F.jpg">
             <img class="logoG" src="/img/G.jpg">
      <p class="not">¿No tienes cuenta?</p>
      <a class="re" id="registro">Registrate</a>
      </div>
   <footer>
     <p class="dr">Developed © 2020 CW, Inc.</p>
   </footer> 
`;
root.innerHTML = p;

let bttn = document.querySelector('.logoG');
bttn.addEventListener('click', login);
function login (){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        saveUser (result.user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}


let bttn1 = document.querySelector('.logoF');
bttn1.addEventListener('click', loginF);
function loginF(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        saveUser (result.user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
   }

   let signInWithEmail = document.querySelector('#getInTo');
   signInWithEmail.addEventListener('click', signIn);
      function signIn(){
       let email= document.querySelector('#email').value;
       let password= document.querySelector('#password').value;
       firebase.auth().signInWithEmailAndPassword(email, password)
       .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
       // ...
     });
   } 
   function observer(){
     firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           // User is signed in.
             console.log("existe usuraio activo")
             let displayName= user.displayName;
             let email= user.email;
             console.log(user);
             let emailVerified = user.emailVerified; 
             let photoURL = user.photoURL;
             let isAnonymous = user.isAnonymus;
             let uid = user.uid;
             let providerData= user.provideData;
             
         } else {
             console.log("no exite usuario activo")
           // No user is signed in.
         }
       });
   }
   observer();
   // Aquí irá la  función para pasar al perfil del usuario
   let registro = document.querySelector('#registro');
   registro.addEventListener('click', registra);
   function registra(){
   registros()
   }
   }

   //Guarda en B.D cloud firestore usuarios registrados en la colleccion usersRef
   function saveUser (user){
    let usuario = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
     }
     usersRef.doc(user.uid).set(usuario)
   }
  
   