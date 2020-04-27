// Firebase init
let googleP = new firebase.auth.GoogleAuthProvider();
let facebookP = new firebase.auth.FacebookAuthProvider();
let db = firebase.firestore();

//Log up with email
function emailLogup () {
  let emailLogup = document.querySelector('#email-new').value;
  let passwordLogup = document.querySelector('#password-new').value;
    console.log(emailLogup, passwordLogup);
    firebase.auth().createUserWithEmailAndPassword(emailLogup, passwordLogup)
    .catch(function (error) {
      // Errors
      var errorMessage = error.message;
      console.log(errorMessage)
      if (errorMessage) {
        let invalidEmail = document.querySelector('#invalid-email')
        invalidEmail.innerHTML = errorMessage
      };
    });
};

//Login functions
function emailLogin() {
  let emailUser = document.querySelector('#email-login').value;
  let passwordUser = document.querySelector('#password-login').value;
  let emailError = document.querySelector('#email-error');
  console.log(emailUser, passwordUser)
  firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
  .catch(function(error) {
  //Error
  var errorMessage = error.message;
  emailError.innerHTML = errorMessage,
  console.log(errorMessage)
});
};

function loginFb () {
  firebase.auth().signInWithRedirect(facebookP)
  .then(function(result){
    console.log(result);
  });
};

function loginGoogle(){
  firebase.auth().signInWithRedirect(googleP)
  .then(function(result) {
    console.log(result)
  });
};

//Log out
$('#logout').click(function(){
  firebase.auth().signOut().then(function() {
    window.open('#/login', '_self');
    // Sign-out successful.
  }).catch(function(error) {
    alert('Ha ocurrido un error', error);
  })
})




//Observator 
function observatorFirebase () {
  firebase.auth().onAuthStateChanged(function(user){
    let menu = document.querySelector('.menu')
    if (user) {
        let menuPic = document.querySelector('#user-photoURL');
        let menuName = document.querySelector('#user-displayName');
        menuName.innerHTML = user.displayName;
        menuPic.innerHTML = `<img src="${user.photoURL}"/>`;
        displayName = user.displayName;
        photoURL = user.photoURL;
        localStorage.setItem('nameStorage', displayName);
        localStorage.setItem('URLStorage', photoURL);
        window.open('#/home', '_self');
        menu.classList.remove('hide');
        console.log('estas activo dude :)', user);
    }
     else {
      console.log('no estas activo chavo :(')
    };
  });
};
observatorFirebase();

//Nodes
let photoURL
let displayName

//Initialize Cloud Firestore through Firebase
  let st = firebase.storage(); 
  
  //Nodes
  let savePost = document.querySelector('#savePost');
  let url
  let day

  //Print time
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

        title: title,
        activity: activity,
        location: location,
        description: description,
        image: url,
        date: day,
        displayName,
        photoURL
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
  };

//Add image
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
            .catch(function(error) {
              var errorMessage = error.message;
              console.log(errorMessage)
              alert('Necesitas iniciar sesión para poder publicar un post.')

            })
  };
  
//Read documents
    let render = () => {
      let post = document.querySelector('#contentCreated');
      db.collection("newPosts").onSnapshot((querySnapshot) => {
        post.innerHTML = ''
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().title}`);
            post.innerHTML += 
            `   
            <div class="container">
            <div class="card-post-container">
              <div class="card-post">
                <div id="postImg" class="img-post">
                  <img width="100%" src="${doc.data().image}">
                </div>
                <div class="info-post" id="infoUserContainer">
                  <div class="info-user">
                    <img src="${doc.data().photoURL}">
                    <h4>${doc.data().displayName}</h4>
                  </div>
                <div class="header-post">
                <h4 id="titlePost">${doc.data().title}</h4>
                <span class="edit-delete-icons">
                <i class="fas fa-pencil-alt js-edit" id="${doc.id}, ${doc.data().title}, ${doc.data().activity}, ${doc.data().location}, ${doc.data().description}"></i>
                <i class="far fa-trash-alt js-delete" id="${doc.id}"></i>
              </span>
                </div>
                <div class="subtitle-post">
                  <p id="activityPost">#${doc.data().activity} </p>
                  <p id="locationPost"> <i class="fas fa-map-marker-alt"></i> ${doc.data().location}</p>
                </div>
                    <p id="descriptionPost">${doc.data().description}</p> 
                  <div class="flex-row">
                    <p><i class="far fa-clock"> </i> ${doc.data().date}</p>
                    <span class="flex-row-likes">
                      <i class="far fa-heart like-btn" id="${doc.id}"></i>
                      <p><strong><span class="clicks"> </span></strong></p>
                    </span>
                  </div>  
                </div> 
              </div>
            </div>
          </div>     
            `;
          let deletebutton = document.querySelectorAll('.js-delete');
          let deletePost = (e) => {
            console.log(e.target.id);
            db.collection('newPosts').doc(e.target.id).delete()
              .then(function(){
                console.log('Lo borraste, eres chido');
              })
              .catch(function(error){
                console.log('No pudiste, ponte chido', error);
              });
          }
            deletebutton.forEach(btn=> btn.addEventListener('click', deletePost));

            let likeBtn = document.querySelectorAll('.like-btn'); 
            let numClicks = document.querySelector('.clicks');
            let i = 0;
            let likeClick = (e) => {
              db.collection('newPosts').doc(e.target.id).
              i++;
              if (i == 1) {
                numClicks.innerHTML = i;
              }else{
                numClicks.innerHTML = i;
              };
             
            }
            likeBtn.forEach(btnLike => btnLike.addEventListener('click', likeClick));

       });
     })
     
    };


    //editar documentos
function editUser(idUser, name, lastName, date){
  document.querySelector('#name').value = name;
  document.querySelector('#lastName').value = lastName;
  document.querySelector('#date').value = date;

  let saveChangesUser = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesUser.onclick = () => {
    var user = db.collection("users").doc(idUser);

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let date = document.querySelector('#date').value;

      return user.update({
        first: name,
        last: lastName,
        born: date
      })
      .then(function() {
        console.log("Document successfully updated!");
        saveChangesUser.innerHTML = 'Guardar';
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#date').value = '';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

}
    render();
     
   


export { loginGoogle, loginFb, emailLogin, observatorFirebase, render, emailLogup };
