//Ref firebase
let providerG = new firebase.auth.GoogleAuthProvider();
let providerFB = new firebase.auth.FacebookAuthProvider();
let db = firebase.firestore();


//Login Google
function loginGoogle(){
  firebase.auth()
  .signInWithPopup(providerG)
  .then(function(result) {
    //console.log(result.user);
    saveDataUser(result.user);
    if (result.user.emailVerified){
      window.open('#home','_self')
    }
  });
}
//Login facebook
/*
function loginFB(){
  firebase.auth()
  .signInWithPopup(providerFB)
  .then(function(result) {
    console.log(result.user);
    saveDataUser(result.user);
    if (result.user.emailVerified){
      window.open('#home','_self')
    }
  });
}

//Save user by login
function saveDataUser(user){
let userNew = {
  uid:user.uid,
  name:user.displayName,
  photo:user.photoURL
}
db.collection("users").doc(userNew.uid).set(userNew)
.then(function() {
  console.log("Document successfully written!");
})
};

export  { loginGoogle, loginFB };


function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
    });
}*/

//Login whit user and password

function createEmailPass(email, password, names) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: names,
      });
    })
    .catch((error) => {
      console.error(error);
      alert("ERROR");
    });
}

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const names = document.getElementById("names").value;

  createEmailPass(email, password, names);
}

export { loginGoogle, createEmailPass, registerUser };

