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
  };

  //User login

  function loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      window.open('#/', '_self');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
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
    user: user.displayName
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);  document.getElementById("addNewPost").value = '';
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
        console.log(`${doc.id} => ${doc.data().post}`);
        let postElement = document.createElement('div');
        let postNew = `
        <div class="containerPostPrint">
        <div class="containerUser">
          <img class="imgUser" src="img/user.svg"></img> <p class="nameUser">${doc.data().user}</p>
          </div>
          <p class="PostPrint">${doc.data().post}</p>
          <div class="btnIcon">
          <button type="submit" class="editBtn" id="btnEditPost" ${doc.id}, ${doc.data().post} ><img src="img/edit.svg" /></button> 
          <button type="submit" class="deleteBtn" id="btnDeletePost" ${doc.id}><img src="img/delete.svg" /></button> 
          </div>
          <textarea class="answer" id="answer"> </textarea>
          <br>
          <div class="sectionLikes">
          <p class="nroLikes">0<img class="imgLikes" src="img/like.svg" /></p>
          </div>
          <button class="btnAnswer">Responder</button>
        </div>
        `;
        postElement.innerHTML = postNew;

        postContainer.appendChild(postElement);

        const buttonDeletePost = document.querySelector('#btnDeletePost')
        buttonDeletePost.addEventListener('click', deletePost)

        /*const buttonEditPost = document.querySelector('#btnEditPost')
        buttonEditPost.addEventListener('click', editPost)*/
      });
});
}

// Borrar posts
 function deletePost (id) {
  if (confirm("¿Seguro que quieres eliminar esta publicación?") == false) {
    event.preventDefault();
    return false;
  }
    db.collection("post")
      .doc("${doc.id}")
      .delete()
      .then(function() 
       {
        console.error("Document successfully deleted!");
        
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }


  

// Editar posts
/*function editPost (id, post) {
  document.getElementById("post").value = post;
  db.collection("post")
 */

export  { loginGoogle, loginFB, registerUser, loginUserEmail, signOff, addUserPost, showPostUser, deletePost};