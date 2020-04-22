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
      window.open('#/','_self')
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
      window.open('#/','_self')
    }
  });
}

function createEmailPass(email, password, names) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      saveDataUser(result.user);
      result.user.updateProfile({
        displayName: names,
      });
      if (result.user.updateProfile){
        window.open('#/','_self')
      }
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

export  { loginGoogle, loginFB, registerUser };*/
