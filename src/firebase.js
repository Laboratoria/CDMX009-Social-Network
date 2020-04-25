
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

//Observador 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('estas activo', user)
        displayName = user.displayName;
        photoURL = user.photoURL;
        localStorage.displayName = user.displayName
        localStorage.photoURL = user.photoURL

        let userName = document.querySelector('#user-displayName');
        let userPic = document.querySelector('#user-photoURL');
        
        userName.innerHTML = displayName;
        userPic.innerHTML = `<img src="${photoURL}"/>`;


    } else {
        console.log('no activo');
      // No user is signed in.
    };
    
  });
  



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
                  <p id="activityPost">${doc.data().activity} </p>
                  <p id="locationPost"> <i class="fas fa-map-marker-alt"></i> ${doc.data().location}</p>
                </div>
                    <p id="descriptionPost">${doc.data().description}</p> 
                  <div class="flex-row">
                    <p><i class="far fa-clock"> </i> ${doc.data().date}</p>
                    <span class="flex-row-likes">
                      <i class="far fa-heart like-btn"></i>
                      <p><strong><span id="clicks"> </span></strong></p>
                    </span>
                  </div>  
                </div> 
              </div>
            </div>
          </div>     
            `
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
            let numClicks = document.querySelector('#clicks');
            let i = 0;
            let likeClick = () => {
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
