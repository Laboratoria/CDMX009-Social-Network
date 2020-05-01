const firebaseConfig = {
  apiKey: 'AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ',
  authDomain: 'social-network-d33e4.firebaseapp.com',
  databaseURL: 'https://social-network-d33e4.firebaseio.com',
  projectId: 'social-network-d33e4',
  storageBucket: 'social-network-d33e4.appspot.com',
  messagingSenderId: '957477248623',
  appId: '1:957477248623:web:77fed7501ea9a56198b79a',
  measurementId: 'G-M3SME61YJ3',
};
firebase.initializeApp(firebaseConfig);
// Firebase init
const googleP = new firebase.auth.GoogleAuthProvider();
const facebookP = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();

// Nodes
let photoURL;
let displayName;

// Log up with email
function emailLogup() {
  const emaiLogup = document.querySelector('#email-new').value;
  const passwordLogup = document.querySelector('#password-new').value;
  console.log(emaiLogup, passwordLogup);
  firebase.auth().createUserWithEmailAndPassword(emaiLogup, passwordLogup)
    .catch((error) => {
      // Errors
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorMessage) {
        const invalidEmail = document.querySelector('#invalid-email');
        invalidEmail.innerHTML = errorMessage;
      }
    });
}

// Login functions
function emailLogin() {
  const emailUser = document.querySelector('#email-login').value;
  const passwordUser = document.querySelector('#password-login').value;
  const emailError = document.querySelector('#email-error');
  console.log(emailUser, passwordUser);
  firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
    .catch((error) => {
      // Error
      const errorMessage = error.message;
      emailError.innerHTML = errorMessage;
      console.log(errorMessage);
    });
}

function loginFb() {
  firebase.auth().signInWithRedirect(facebookP)
    .then((result) => {
      console.log(result);
    });
}

function loginGoogle() {
  firebase.auth().signInWithRedirect(googleP)
    .then((result) => {
      console.log(result);
    });
}

// Log out
const logoutBtn = document.querySelector('#logout');
logoutBtn.onclick = function logOut() {
  firebase.auth().signOut().then(() => {
    window.open('#/login', '_self');
    // Sign-out successful.
  }).catch((error) => {
    alert('Ha ocurrido un error', error);
  });
};

// Observator
function observatorFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    const menu = document.querySelector('.menu');
    if (user) {
      const menuPic = document.querySelector('#user-photoURL');
      const menuName = document.querySelector('#user-displayName');
      menuName.innerHTML = user.displayName;
      menuPic.innerHTML = `<img src="${user.photoURL}"/>`;
      displayName = user.displayName;
      photoURL = user.photoURL;
      localStorage.setItem('nameStorage', displayName);
      localStorage.setItem('URLStorage', photoURL);
      window.open('#/home', '_self');
      menu.classList.remove('hide');
      console.log('estas activo dude :)', user);
    } else {
      console.log('no estas activo chavo :(');
    }
  });
}
observatorFirebase();


// Initialize Cloud Firestore through Firebase
const st = firebase.storage();
const collectionPost = db.collection('newPosts');

// Nodes
const savePost = document.querySelector('#savePost');
let url;
let day;
let post;

// Print time
const timeSnap = () => {
  const now = new Date();
  const date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
  day = `${date.join('/')} ${time.join(':')}`;
};

// Add users
savePost.onclick = () => {
  timeSnap();
  const title = document.querySelector('#recipientTitle').value;
  const activity = document.querySelector('#recipientActivity').value;
  const location = document.querySelector('#recipientLocation').value;
  const description = document.querySelector('#recipientDescription').value;

  collectionPost.add({
    title,
    activity,
    location,
    description,
    image: url,
    date: day,
    displayName,
    photoURL,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.querySelector('#recipientTitle').value = '';
      document.querySelector('#recipientActivity').value = '';
      document.querySelector('#recipientLocation').value = '';
      document.querySelector('#recipientDescription').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Add image
const fileInput = document.querySelector('#file');
fileInput.onchange = (e) => {
  console.log(e.target.files);
  const file = e.target.files[0];
  st.ref('img').child(file.name).put(file)
    .then(snap => snap.ref.getDownloadURL())
    .then((link) => {
      url = link;
      const img = document.createElement('img');
      img.src = link;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Necesitas iniciar sesión para poder publicar un post.');
    });
};

// Read documents
const render = () => {
  post = document.querySelector('#contentCreated');
  db.collection('newPosts').onSnapshot((querySnapshot) => {
    post.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
      post.innerHTML
        += `   
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
                        <i class="fas fa-pencil-alt js-edit" id="${doc.id}" data-title="${doc.data().title}" data-activity="${doc.data().activity}" data-location="${doc.data().location}" data-description="${doc.data().description}"></i>
                        <i class="far fa-trash-alt js-delete" id="${doc.id}"></i>
                      </span>
                    </div>
                    <div class="subtitle-post">
                      <p id="activityPost">#${doc.data().activity} </p>
                      <p id="locationPost"> <i class="fas fa-map-marker-alt"></i> ${doc.data().location}</p>
                    </div>
                      <p id="descriptionPost">${doc.data().description}</p> 
                    <div class="flex-row">
                      <p>
                        <i class="far fa-clock"> </i> ${doc.data().date}
                      </p>
                      <span class="flex-row-likes">
                        <i class="far fa-heart like-btn" id="${doc.id}"></i>
                        <p><strong><span class="clicks"> </span></strong></p>
                      </span>
                    </div>  
                  </div> 
                </div>
              </div>
               
            `;
      const deletebutton = document.querySelectorAll('.js-delete');
      const deletePost = (e) => {
        console.log(e.target.id);
        db.collection('newPosts').doc(e.target.id).delete()
          .then(() => {
            console.log('Lo borraste, eres chido');
          })
          .catch((error) => {
            console.log('No pudiste, ponte chido', error);
          });
      };
      deletebutton.forEach(btn => btn.addEventListener('click', deletePost));

      // edit post
      /*  const btnEdit = document.querySelectorAll('.js-edit');
      const actionEdit = (e) => {
        let modal = document.querySelector('#exampleModal')
        modal.classList.toggle("show") // deberiamos rellenarlo con la data actual del doc
        modal.style = "display:inherit;"
        // 1.- tomamos los input, los rellenamos (TENEMOS QUE CONSUMIR
        FIREBASE PARA TRAER LA DATA) (SI EL LAPICITO TUVIERA EL TITLE Y LA D. PODRIAMOS USARLOS)
        let titleInput = document.querySelector('#recipientTitle');
        titleInput.value = e.target.getAttribute('data-title');
        let activityInput = document.querySelector('#recipientActivity');
        activityInput.value = e.target.getAttribute('data-activity');
        let locationInput = document.querySelector('#recipientLocation');
        locationInput.value = e.target.getAttribute('data-location');
        let descriptionInput = document.querySelector('#recipientDescription');
        descriptionInput.value = e.target.getAttribute('data-description');
        // como es mismo modal, y queremos diferente accion, necesitamos 2
         botones y ocultar el primero
        let id = e.target.id
        let btnSaveEdit = document.querySelector('#savePost')
        //btn1.removeEventListener('click') // mejor que quitarlo
        //cuando terminemos lo recolocamos
        btnSaveEdit.onclick = e => {
          let title = document.querySelector('#recipientTitle').value
          let activity = document.querySelector('#recipientActivity').value
          let location = document.querySelector('#recipientLocation').value
          let description = document.querySelector('#recipientDescription').value

          console.log(title)
          console.log(id)
          // return
          db.collection('newPosts')
            .doc(id)
            .update({
              title,
              activity,
              location,
              description
            })
            .then(() => {
              console.log('Document successfully written!');
              modal.style = "display: none"; // esto no debemos solo quitar show y poner style none
              // REcolocar el listener del boton (click) con el callback original (publicar)
              btnEdit.innerHTML = 'Guardar';
              titleInput.value = '';
              activityInput.value = '';
              locationInput.value = '';
              descriptionInput.value = '';
            })
            .catch((error) => {
              console.error('Error writing document: ', error);
            });
        }

        let closeModal = document.querySelector('#modalClose');
        const actionClose = () => {
          let modal = document.querySelector('#exampleModal')
          modal.style = 'display:none'
        }
        closeModal.addEventListener('click', actionClose);
      }
      btnEdit.forEach(actionUpdate => actionUpdate.addEventListener('click', actionEdit)); */
    });
  });
};

render();

export {
  loginGoogle, loginFb, emailLogin, observatorFirebase, render, emailLogup,
};
