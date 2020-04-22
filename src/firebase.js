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


