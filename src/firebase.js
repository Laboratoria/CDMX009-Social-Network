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
      window.open('#/','_self')
  });
}

function createEmailPass(email, password, names) {
  firebase.auth()
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
  .catch(function(error) {
    console.error("error save user", error);
     });
  }

  //User login e-mail

  function loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user){
      window.open('#/', '_self');
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  }

  function loginUserEmail(){
    const email = document.getElementById("e-mail").value;
    const password = document.getElementById("password").value;
  
    loginUser(email, password);
  }

  function signOff(){
    firebase.auth().signOut().then(function() {
      window.open('#/login', '_self');
    }).catch(function(error) {
    });
    
  } 

//add post user
function addUserPost(){
  let user = firebase.auth().currentUser;
  let post = document.getElementById("addNewPost").value;
  db.collection("post").add({
    post: post,
    uid: user.uid,
    user: user.displayName,
    imagen: user.photoURL
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);  
  document.getElementById("addNewPost").value = '';
    showPostUser();
    
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

//Show post user
function showPostUser(){
  const postContainer = document.getElementById('allNewPost');
        postContainer.innerHTML='';
        db.collection("post").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {;
        //console.log(`${doc.id} => ${doc.data().post}`);
        let postElement = document.createElement('div');
        let postNew = `
        <div class="containerPostPrint">
        <div class="containerUser">
          <img class="imgUser" src="img/user.svg"></img> <p class="nameUser">${doc.data().user}</p>
          </div>
          <div class="btnIcon">
          <button type="submit" class="editBtn" ${doc.id}, ${doc.data().post} ><img src="img/edit.svg" /></button> 
          <button type="submit" class="deleteBtn" data-id="${doc.id}"><img data-id="${doc.id}" src="img/delete.svg" /></button> 
          </div>
          <p class="PostPrint">${doc.data().post}</p>
          <textarea class="answer" id="answer"> </textarea>
          <br>
          <div class="sectionLikes">
          <p class="nroLikes">0<img class="imgLikes" src="img/like.svg" /></p>
          </div>
          <button class="btnAnswer" data-id="${doc.id}">Responder</button>
        </div>
        `
        postElement.innerHTML = postNew;
        postContainer.appendChild(postElement);    

  const buttonsDeletePost = document.querySelectorAll('.deleteBtn')
        buttonsDeletePost.forEach(btn=>btn.addEventListener('click', deletePost))

  const buttonAnswer = document.querySelectorAll('.btnAnswer')
        buttonAnswer.forEach(btnA=>btnA.addEventListener('click', answer))

      })
  })
 }


// Borrar posts
function deletePost (e) {
  let id = e.target.getAttribute('data-id')
  console.log(e.target)
  console.log(id)
 if (!confirm("¿Seguro que quieres eliminar esta publicación?")) return

 db.collection("post")
     .doc(id)
     .delete()
     .then(function() 
      {
       console.error("Document successfully deleted!");
       showPostUser()
     })
     .catch(function(error) {
       console.error("Error removing document: ", error);
     });
 }

 // reply post

 function answer(e){
   let user = firebase.auth().currentUser;
   let id = e.target.getAttribute('data-id');
   let postRef = db.collection('post').doc(id);
   let anwerUser = document.getElementById("answer").value;
   postRef.add({
     answerUser: anwerUser,
     uid:user.uid,
     user: user.displayName
   })
  .then (function(){
    console.log("reply post");
  })
  .catch(function(error){
    console.log("error reply post", error);
  })
 }

export  { loginGoogle, loginFB, registerUser, loginUserEmail, signOff, addUserPost, showPostUser };
