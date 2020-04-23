/* import { viewHome } from './view/home'; */


var firebaseConfig = {
  apiKey: "AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ",
  authDomain: "social-network-d33e4.firebaseapp.com",
  databaseURL: "https://social-network-d33e4.firebaseio.com",
  projectId: "social-network-d33e4",
  storageBucket: "social-network-d33e4.appspot.com",
  messagingSenderId: "957477248623",
  appId: "1:957477248623:web:77fed7501ea9a56198b79a",
  measurementId: "G-M3SME61YJ3"
};
firebase.initializeApp(firebaseConfig);
firebase.storage();



//Crear usuario con email
$('#email-submit').click(function () {
  let emailUser = document.querySelector('#email-new').value;
  let passwordUser = document.querySelector('#password-new').value;
  console.log(emailUser, passwordUser);

  firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
    .catch(function (error) {
      // Errores
      var errorMessage = error.message;
      console.log(errorMessage)
      if (errorMessage) {
        let invalidEmail = document.querySelector('#invalid-email')
        invalidEmail.innerHTML = errorMessage
      }
    });
});

//Ingresar usuario existente
$('#login-submit').click(function login() {
  let emailLogin = document.querySelector('#email-login').value;
  let passwordLogin = document.querySelector('#password-login').value;
  let emailError = document.querySelector('#email-error');
  console.log(emailLogin, passwordLogin);

  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function (error) {
      //Error
      var errorMessage = error.message;
      emailError.innerHTML = errorMessage,
        console.log(errorMessage)
    });
});

//Login Google
$('.google').click(function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider)
    .then(function (result) {

      console.log(result);
    });
});

//Login Facebook
$('.facebook').click(function loginFb() {
  let provider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithRedirect(provider)
    .then(function (result) {

      console.log(result);
    });
});

var storage = firebase.storage();

let displayName;
let photoURL;
//Observador 
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('estas activo', user)
    let displayName = user.displayName;
    let userName = document.querySelector('#user-displayName');
    let userPic = document.querySelector('#user-photoURL');
    let photoURL = user.photoURL;
    let infoUserContainer = document.querySelector('#user-photoURL');



    userName.innerHTML = displayName;
    userPic.innerHTML = `<img src="${photoURL}"/>`;
    infoUserContainer.innerHTML = `
        <div id="photoUser">${displayName}</div>
        <div id="nameUser">${photoURL}</div> `
    // User is signed in.
  } else {
    console.log('no activo');
    // No user is signed in.


  };
});



//Initialize Cloud Firestore through Firebase
let db = firebase.firestore();




//nodos
let savePost = document.querySelector('#savePost');
let fileInput = document.querySelector('#file');
let url;


fileInput.onchange = e => {
  let file = e.target.files[0]
  firebase.storage().ref("img").child(file.name).put(file)
    .then(snap => {
      return snap.ref.getDownloadURL()
    })
    .then(link => {
      url = link
      let img = document.createElement('img')
      img.src = link
      document.body.appendChild(img)
    })
}


//Add users
savePost.onclick = () => {
  let title = document.querySelector('#recipientTitle').value;
  let activity = document.querySelector('#recipientActivity').value;
  let location = document.querySelector('#recipientLocation').value;
  let description = document.querySelector('#recipientDescription').value;

  db.collection("posts").add({
    title: title,
    activity: activity,
    location: location,
    description: description
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.querySelector('#recipientTitle').value = '';
      document.querySelector('#recipientActivity').value = '';
      document.querySelector('#recipientLocation').value = '';
      document.querySelector('#recipientDescription').value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}




//Read documents
let post = document.querySelector('#contentCreated');
const render = () => {
  db.collection("posts").onSnapshot((querySnapshot) => {


    post.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
      const checkin = doc.data();
      console.log(checkin);
      post.innerHTML += `   
          <div class="containerTotal">
           <div class="container" data-id="${checkin.id}">
            </div>
            <div class="card-post-container">
              <div class="card-title-post">
                <h4 id="titlePost">${checkin.title}</h4>
                <span class="edit-delete-icons">
                  <p>
                  <button class="js-delete" type="submit" class="btn center">
                  <i class="material-icons" style="font-size: 1em;">delete</i>
                  </button>
                  </p>
                  <button class="btnDelet">editar</button>
                </span>
                <div class="subtitle-post">
                  <p id="activityPost">${checkin.activity}</p>
                  <p id="locationPost">${checkin.location}</p>
                </div>
              </div>
            </div>
            <div id="infoUserContainer">
            </div>
            <div id="photoUser">${checkin.photo}</div>
            <div id="nameUser">${photoURL}</div> 
            <p id="descriptionPost">${checkin.description}</p> 

          </div>     
          `
      let deleteButtons = document.querySelectorAll('.js-delete');
      let deleteHandler = () => {
        alert("ya funciona");
        console.log(doc);

        db.collection("posts").doc(doc.id).delete()
          .then(function () {
            console.log("Document successfully deleted!");
          }).catch(function (error) {
            console.error("Error removing document: ", error);
          });
      }

      deleteButtons.forEach(
        btn => btn.addEventListener('click', deleteHandler)
      )
    });


  })
};
render();




function editPost(idUser, title, activity, location, description) {
  document.querySelector('#recipientTitle').value = title;
  document.querySelector('#recipientActivity').value = activity;
  document.querySelector('#recipientLocation').value = location;
  document.querySelector('#recipientDescription').value = description;

  let saveChangesPost = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesPost.onclick = () => {
    var post = db.collection("posts").doc(idUser);

    let title = document.querySelector('#recipientTitle').value;
    let activity = document.querySelector('#recipientActivity').value;
    let location = document.querySelector('#recipientLocation').value;
    let description = document.querySelector('#recipientDescription').value;

    return post.update({
      title: title,
      activity: activity,
      location: location,
      description: description
    })
      .then(function () {
        console.log("Document successfully updated!");
        saveChangesPost.innerHTML = 'Guardar';
        document.querySelector('#recipientTitle').value = '';
        document.querySelector('#recipientActivity').value = '';
        document.querySelector('#recipientLocation').value = '';
        document.querySelector('#recipientDescription').value = '';
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
}