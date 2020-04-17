import { checkIn } from './firebase.js';

const logInButton = document.querySelector('#logIn');

const creatAccountButton = document.querySelector('#creatAccount');

function createAccount() {
  
   let createAccountView = `
      <div class="login">
        
         <input id="email" type="email" placeholder="email" />
        <br>
        <input id="pass" type="password" placeholder="pass" />
        <button id="checkIn" >Registrarse</button>
      </div>`
     // primero se dibuja en el DOM 
    root.innerHTML = createAccountView
    // escuchar primero hay que manipular
    let checkInButton = document.querySelector('#checkIn')
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')
    checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
    
  }
  creatAccountButton.onclick = createAccount


 

   
function logIn(){
    
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

    let loginView = `
     `
  root.innerHTML = loginView
   
  }

  logInButton.onclick = logIn;
