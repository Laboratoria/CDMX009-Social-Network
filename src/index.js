import { login } from './login.js';

let rootContainer = document.getElementById('rootContainer');
let btns = document.querySelectorAll('.root');
let user = 'Dors';

console.log('You are here');

const getLoginData = () => {

  console.log("Y la data?");  
  let loginEmail = document.querySelector("#loginEmail").value
  let loginPsw = document.querySelector("#loginPsw").value
  
  console.log(loginEmail);
  console.log(loginPsw);

  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPsw).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

} 

const renderLogin = () => {
    let loginView = `
    <p>Welcome ${user}</p>
    <input type="text" name="email" id="loginEmail" placeholder="Email">
    <input type="password" name="password" id="loginPsw" placeholder="Password">
    <input id="loginSend" type="button" value="Log-in">
  `
  rootContainer.innerHTML = loginView;
  
  let loginBtn = document.querySelector("#loginSend");
  //loginBtn.onclick = getLoginData();
  loginBtn.addEventListener("click", getLoginData);

}

const getSigninData = () => {

  console.log("La data:");  
  let signinName = document.querySelector("#signinName").value
  let signinEmail = document.querySelector("#signinEmail").value
  let signinPsw = document.querySelector("#signinPsw").value
  
  console.log(signinName);
  console.log(signinEmail);
  console.log(signinPsw);

  firebase.auth().createUserWithEmailAndPassword(signinEmail, signinPsw).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

}

const renderSignin = () => { 
    let signinView = `
    <p >Welcome</p>
    <input type="text" name="name" id="signinName" placeholder="Name">
    <input type="text" name="email" id="signinEmail" placeholder="Email">
    <input type="password" name="password" id="signinPsw" placeholder="Password">
    <input id="signinSend" type="button" value="Sign-in"></input>
  `
  rootContainer.innerHTML = signinView;

  let signinBtn = document.querySelector("#signinSend");
  //signinBtn.onclick = getSigninData();
  signinBtn.addEventListener("click", getSigninData);
}

const clear = () => {
  let loginView = `
    
  `
  rootContainer.innerHTML = loginView;
} 

const closeSesion = () =>{
  firebase.auth().signOut().then(function(){
    console.log('Cerrando sesión');
    clear();
  }).catch(function(error){
    console.log(error);
  })
  
}

const showAccount = () =>{
  let loginView = `
    <p>Welcome ${user}</p>
    <p> Congratulations!! This is your personal account.</p>
    <input id="logout" type="button" value="Log out">
  `
  rootContainer.innerHTML = loginView;

  let logout = document.querySelector("#logout");
  logout.addEventListener("click", closeSesion);
}


const userStatus = () => {
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Activo");
      showAccount();
      // User is signed in.
      var displayName = user.displayName;
      console.log('displayName: ' + displayName);
      var email = user.email;
      console.log('email: ' + email);
      var emailVerified = user.emailVerified;
      console.log('emailVerified: ' + emailVerified);
      var photoURL = user.photoURL;
      console.log('photoURL: ' + photoURL);
      var isAnonymous = user.isAnonymous;
      console.log('isAnonymous: ' + isAnonymous);
      var uid = user.uid;
      console.log('uid: ' + uid);
      var providerData = user.providerData;
      console.log('providerData: ' + providerData);
      // ...
    } else {
      console.log("Inactivo");
      // User is signed out.
      // ...
    }
  });
}

userStatus();

const router = (route) => {
    console.log(route)
    if(route == 'login'){
        renderLogin();
    }else{
        renderSignin();
    }
}

btns.forEach(btn=>btn.onclick=e=>router(e.target.id))


