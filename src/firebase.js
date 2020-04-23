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



let photoURL
let displayName
export let arr = [];
let obj

console.log(arr);

//Observador 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('estas activo', user)
        displayName = user.displayName;
        photoURL = user.photoURL;
          obj = {
            nombre: displayName,
            foto: photoURL
          }
          arr.push(obj)
          
        let userName = document.querySelector('#user-displayName');
        let userPic = document.querySelector('#user-photoURL');
        

        userName.innerHTML = displayName;
        userPic.innerHTML = `<img src="${photoURL}"/>`;


    } else {
        console.log('no activo');
      // No user is signed in.
    };
    
  });
  


  
  //Initialize Cloud Firestore through Firebase
  let db = firebase.firestore();
  let st = firebase.storage(); 

  
  //nodos
  let savePost = document.querySelector('#savePost');
  let url
  let day

  let timeSnap = () => {
    let now = new Date();
    let date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    day = date.join('/') + ' ' + time.join(':');
  }

  //Add users
  savePost.onclick = () => {
    timeSnap();
    let title = document.querySelector('#recipientTitle').value;
    let activity = document.querySelector('#recipientActivity').value;
    let location = document.querySelector('#recipientLocation').value;
    let description = document.querySelector('#recipientDescription').value;


      db.collection("newPosts").add({
    /*     user: displayName,
        photoUser: photoURL, */
        title: title,
        activity: activity,
        location: location,
        description: description,
        image: url,
        date: day
      })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          document.querySelector('#recipientTitle').value = '';
          document.querySelector('#recipientActivity').value = '';
          document.querySelector('#recipientLocation').value = '';
          document.querySelector('#recipientDescription').value = '';
          })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
  }


  //add image

  let fileInput = document.querySelector('#file');

  fileInput.onchange = e => {
      console.log(e.target.files);
      let file = e.target.files[0]
        st.ref('img').child(file.name).put(file)
            .then(snap => {
                return snap.ref.getDownloadURL()
            })
            .then(link => {
                url = link
                let img = document.createElement('img')
                img.src = link
            })
  }
  
  //Read documents
  let post = document.querySelector('#contentCreated');
    let render = () => {
      db.collection("newPosts").onSnapshot((querySnapshot) => {
        post.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().title}`);
            post.innerHTML += `   
            <div class="container">
            <div class="card-post-container">
              <div class="card-title-post">
                <div id="postImg" class="img-post">
                  <img width="100%" src="${doc.data().image}">
                </div>
                <div class="info-over-image">
                  <h4 id="titlePost">${doc.data().title}</h4>
                  <div class="subtitle-post">
                    <p id="activityPost">${doc.data().activity}</p>
                    <p id="locationPost">${doc.data().location}</p>
                  </div>
                </div>
                <div class="" id="infoUserContainer">
                  <div class="info-user">
                    <img src="${photoURL}">
                    <h4>${displayName}</h4>
                  </div>
                  <span class="edit-delete-icons">
                  <i class="far fa-trash-alt js-delete"></i>
                  <i class="fas fa-pencil-alt" onclick="editPost('${doc.id}', '${doc.data().title}','${doc.data().activity}','${doc.data().location}','${doc.data().description}')"></i>
                </span>
                    <p id="descriptionPost">${doc.data().description}</p> 
                    <p>${doc.data().date}</p>
                </div>
              </div>
            </div>
          </div>     
            `
          let deletebutton = document.querySelectorAll('.js-delete');
          let deletePost = () => {
            console.log(doc);
            db.collection('newPosts').doc(doc.id).delete()
              .then(function(){
                console.log('Lo borraste, eres chido');
              })
              .catch(function(error){
                console.log('No pudiste, ponte chido', error);
              });
          }
            deletebutton.forEach(btn => btn.addEventListener('click', deletePost))
       });
     })
     
    };
    render();
    

  

  
  //delete documents
/*   function deletePost(idPost){
    db.collection("newPosts").doc(idPost).delete()
    .then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
 */


  //edit documents
  function editPost(idUser, title, activity, location, description){
    document.querySelector('#recipientTitle').value = title;
    document.querySelector('#recipientActivity').value = activity;
    document.querySelector('#recipientLocation').value = location;
    document.querySelector('#recipientDescription').value = description;
  
    let saveChangesPost = document.querySelector('#saveUser');
    saveChangesUser.innerHTML = 'Editar';
  
    saveChangesPost.onclick = () => {
      var post = db.collection("newPosts").doc(idUser);
  
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
        .then(function() {
          console.log("Document successfully updated!");
          saveChangesPost.innerHTML = 'Guardar';
          document.querySelector('#recipientTitle').value = '';
          document.querySelector('#recipientActivity').value = '';
          document.querySelector('#recipientLocation').value = '';
          document.querySelector('#recipientDescription').value = '';
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  
  }
  
  
