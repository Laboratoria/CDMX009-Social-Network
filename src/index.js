import { checkIn, logInFacebook, logInGoogle, home } from './firebase.js';

const logInButton = document.querySelector('#logIn');

const creatAccountButton = document.querySelector('#creatAccount');

function createAccount() {
  
  document.getElementById('logInUser').style.display = 'none';
  document.getElementById('init').style.display = 'none';
  document.getElementById('logInNetwoork').style.display = 'none';
  document.getElementById('LogInNewUser').style.display = 'none';
  const createAccountView = `
      <div class="login" id="createAccount">
        
         <input id="email" type="email" placeholder="email" />
        <br>
        <input id="pass" type="password" placeholder="pass" />
        <button id="checkIn" >Registrarse</button>
        <button id="back" >volver</button>
      </div>`
     // primero se dibuja en el DOM 
    root.innerHTML = createAccountView
    // escuchar primero hay que manipular
    let checkInButton = document.querySelector('#checkIn')
    let backButton = document.querySelector('#back')
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')
    checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
    backButton.onclick = e=> init()
  }
  creatAccountButton.onclick = createAccount


 function init() {
  document.getElementById('logInUser').style.display = 'block';
  document.getElementById('init').style.display = 'block';
  document.getElementById('logInNetwoork').style.display = 'block';
  document.getElementById('LogInNewUser').style.display = 'block';
  document.getElementById('createAccount').style.display = 'none';
 }

   
function logIn(){

  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";
    
  let emailLogIn = document.querySelector('#emailLogIn').value
  let passLogIn = document.querySelector('#passLogIn').value
    console.log(emailLogIn);

     console.log(passLogIn);
    
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(errorCode);
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
     
    });
    
   /* let loginView = `

    <button id="back" >volver</button>

     `
  root.innerHTML = loginView
 // let backButton = document.querySelector('#back')

  //backButton.onclick = e=> init()*/
  //document.getElementById("emailLogIn").reset();

  home ()
  }

  logInButton.onclick = logIn;

