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

//add post user
function addUserPost(){
  let post = document.getElementById("post").value;
  let postNewPrint = document.querySelector("#postNew");
  console.log(postNewPrint.appendChild("<p>prueba</p>"));
  db.collection("post").add({
    post: post,
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
    document.getElementById("post").value = '';
    
    showPostUser();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

//Show post user
function showPostUser(){
  db.collection("post").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {;
        console.log(`${doc.id} => ${doc.data().post}`);
        /*let postNew = `
        <p>${doc.id}</p>
        `
        postNewPrint.appendChild(postNew)*/
      });
});
}

export  { loginGoogle, loginFB, registerUser, addUserPost };
