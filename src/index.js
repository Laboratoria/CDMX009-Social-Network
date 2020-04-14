//import { example } from './example.js';
//
//example();
//import {firebase} from '@firebase/app';
//require('firebase/auth');
let allApp;
let createNewuser= document.getElementById('createUserNw');
createNewuser.addEventListener('click', () => {
  console.log('boton que funciona');
    let emailNew= document.getElementById('emailNw').value;
    let password= document.getElementById('passwordNw').value;
    document.getElementById('createUser').style.display = 'none';
    document.getElementById('logingUsers').style.display = 'block';
    firebase.auth().createUserWithEmailAndPassword(emailNew, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
      });
});

let userNew= document.getElementById('newUser');
userNew.addEventListener('click', () => {
  document.getElementById('createUser').style.display = 'block';
  document.getElementById('logingUsers').style.display = 'none';
});

let oldUser= document.getElementById('logInUser');
oldUser.addEventListener('click', () => {
  let email= document.getElementById('email').value;
  let password= document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    // ...
  });
});

function theWatcher(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('usuario activo');
    printSite();
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('no hay usuarios');
  }
});
};

theWatcher();

function printSite() {
document.getElementById('firstPage').style.display= 'none';
document.getElementById('allTheSite').style.display= 'block';
//allApp = ` 

//let placeToPrint= document.getElementById('allTheSite');
//placeToPrint.innerHTML= allApp;

}   

let btnGoogle = document.getElementById('loginGoogle');
btnGoogle.addEventListener('click', ()=>{
  const provedorGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provedorGoogle).then(function(result){
        console.log(result.user);
        const nameUser = result.user.displayName;
        const imgProfile = result.user.photoURL;
        console.log(nameUser);
        console.log(imgProfile);




    });
});



let btnFacebook = document.getElementById('loginFacebook');
btnFacebook.addEventListener('click', () =>{
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(providerFacebook).then(function(result){
    console.log(result.user);
  });

});


let prueba= document.getElementById('botonCompartir');
prueba.addEventListener('click', () =>{
let cosa= document.getElementById('text-box').value;
let dondeImprimir= document.getElementById('tab-content-table');
dondeImprimir.innerHTML=cosa;
});

function inicializarFireBase(){
  //let showName = document.getElementById('sayHi');
  firebase.auth().onAuthStateChanged(function (user){
    if(user){
      var getName = user.displayName;
      console.log(getName)
      //showName.innerHTML = ' hola ' + getName;
      let showImage = document.getElementById('sayHi');
      let getImage = user.photoURL;


    let photo=` <figure> <img  style="width:70px; height:auto; class= "imageBox" src ="${getImage}"> </figure> ` 
    showImage.innerHTML= ' Hola ' +  getName  +  photo ;
      //showImage.append("<img src= ")

      //let imgPlace= document.createElement('img');
      //imgPlace.src= getImage;
      //showImage.appendChild('imgPlace');
    }
  });
}

inicializarFireBase();



let buttonClose= document.getElementById('logOut');
buttonClose.addEventListener('click', () => { 
  document.getElementById('firstPage').style.display= 'block';
document.getElementById('allTheSite').style.display= 'none';
//function closes(){
  firebase.auth().signOut()
  .then(function(){
    console.log('Salir');
  })
  .catch(function(error){
    console.log(error);
  })
 
});