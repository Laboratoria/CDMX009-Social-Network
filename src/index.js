import { actionGoogle, actionFacebook } from './utils/providers.js';
import { createUser, goToCreate } from './utils/createUsers.js';
import { login } from './utils/loginEmail.js';
import { actionDelete } from './utils/deletePost.js';
import { saveFirestore } from './utils/saveInFirestore.js';
import { openModalEdit } from './utils/modalEdit.js';
import { signOut } from './utils/exit.js';
import { addLikes } from './utils/countLikes.js';

let getEmail;
let getName;
let getImg;
let url;
const db = firebase.firestore();
const firstPa = document.getElementById('firstPage');
const allSite = document.getElementById('allTheSite');
const filterComents = document.querySelector('#addFilters');
const filterMyComents = document.querySelector('#addMyComents');
const filterName = document.querySelector('#searchName');
const btnFilter = document.querySelector('#searchButtom1');
const btnMySite = document.querySelector('#myWall');
const goToPrincipal = document.querySelector('#allComents');
const printing = document.querySelector('#addComents');

//* ****************************register users */
export const userNew = document.getElementById('newUser');
userNew.addEventListener('click', goToCreate);

const emailNew = document.getElementById('emailNw');
const password = document.getElementById('passwordNw');
const createNewUser = document.getElementById('createUserNw');
createNewUser.addEventListener('click', () => {
  createUser(emailNew.value, password.value);
});

//* *****************Login with providers ****************************
const btnGoogle = document.getElementById('loginGoogle');
btnGoogle.addEventListener('click', actionGoogle);

const btnFacebook = document.getElementById('loginFacebook');
btnFacebook.addEventListener('click', actionFacebook);

//* **************************Login*************************************
const email = document.getElementById('email');
const passLogin = document.getElementById('password');

const registeredUser = document.getElementById('logInUser');
registeredUser.addEventListener('click', () => {
  login(email.value, passLogin.value);
});

function printSite() {
  firstPa.style.display = 'none';
  allSite.style.display = 'block';
}

//* ***********************Active users********************************
export function theWatcher() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('active user');
      printSite();
      const userSigned = firebase.auth().currentUser;
      if (userSigned != null) {
        userSigned.providerData.forEach((profile) => {
          if (profile.displayName === null) {
            const showEmail = document.getElementById('sayHi');
            getEmail = profile.email;
            const showImage = document.getElementById('imgProfile');
            const photo = '<figure><img class = "imageBox" src="img/noprofile.png"></figure>';
            showEmail.innerHTML = `Hola: ${getEmail}`;
            showImage.innerHTML = photo;
          } else {
            const showName = document.getElementById('sayHi');
            const showImage = document.getElementById('imgProfile');
            getName = profile.displayName;
            const getImage = profile.photoURL;
            showName.innerHTML = `Hola: ${getName}`;
            const photo = `<figure><img class = "imageBox" src="${getImage}"></figure>`;
            showImage.innerHTML = photo;
          }
        });
      }
    } else {
      console.log('no users logged');
    }
  });
}

theWatcher();
//* ***********************Button for actionSingout************************
const buttonClose = document.getElementById('logOut');
buttonClose.addEventListener('click', () => {
  document.getElementById('firstPage').style.display = 'block';
  document.getElementById('allTheSite').style.display = 'none';
  signOut();
});
//* ***********************Get info profile********************************
export function getNameProfile() {
  const userSigned = firebase.auth().currentUser;
  if (userSigned != null) {
    userSigned.providerData.forEach((profile) => {
      if (profile.displayName === null) {
        getName = profile.email;
        getImg = 'img/noprofile.png';
      } else {
        getName = profile.displayName;
        getImg = profile.photoURL;
      }
    });
  }
}
//* ***********************Add image in Firestorage********************************
const fileInput = document.querySelector('#file');
fileInput.onchange = (e) => {
  console.log(e.target.files);
  const file = e.target.files[0];
  firebase
    .storage()
    .ref('images')
    .child(file.name)
    .put(file)
    .then(snap => snap.ref.getDownloadURL())
    .then((link) => {
      url = link;
      const img = document.createElement('images');
      img.src = link;
      document.body.appendChild(img);
    });
};
//* ***********************Save data firestore for create post*********************
const shareBtn = document.getElementById('btnShare');
shareBtn.addEventListener('click', () => {
  getNameProfile();
  saveFirestore(getName, getImg, db, url);
});

//* ***********************Print cards posts********************************
function addNewCard(printing1, doc) {
  const posting = document.createElement('div');
  const createTarget = `<div id="card2" class='allComents'>
  <header class="styleNamePost">
  <img src="${doc.data().photo}" class="imgProfilePost">
 <div class="nameDate"><strong>${doc.data().name}</strong>
 <p> ${doc.data().date}</p></div></header>
<p> ${doc.data().comments}</p>
<p><img width="200" src="${doc.data().image}"/></p>
<p> likes ${doc.data().likes} </p> 
<p><img src="img/like.svg" name="${doc.id}" class="btnLike"> 
<button id="btnEdit" data-doc="${
  doc.id
}" class="btnStylesEdit" class="btnStyles">Edit</button>
<button id="${doc.id}" class="btnStyles1">Borrar</button></p></div>`;
  posting.innerHTML = createTarget;
  printing1.appendChild(posting);
  const btn2 = document.querySelectorAll('.btnStyles1');
  btn2.forEach(actionBtn => actionBtn.addEventListener('click', actionDelete));
  const btnlike = document.querySelectorAll('.btnLike');
  btnlike.forEach(actionBtnLikes => actionBtnLikes.addEventListener('click', addLikes));
  const btEdit = document.querySelectorAll('.btnStylesEdit');
  btEdit.forEach(open => open.addEventListener('click', openModalEdit));
}
function addNewCardNoComents(printing2, doc) {
  const posting = document.createElement('div');
  const createTarget = `<div id="card2" class='allComents'>
<header class="styleNamePost">
 <img src="${doc.data().photo}" class="imgProfilePost">
 <div class="nameDate"><strong>${doc.data().name}</strong>
 <p> ${doc.data().date}</p></div></header>
 <p> ${doc.data().comments}</p>
<p><img width="200" src="${doc.data().image}"/></p>
<p> likes ${doc.data().likes} </p> 
<div class="like"><img src="img/like.svg" name="${
  doc.id
}" class="btnLike"></div>`;
  posting.innerHTML = createTarget;
  printing2.appendChild(posting);
  const btnlike = document.querySelectorAll('.btnLike');
  btnlike.forEach(actionBtnLikes => actionBtnLikes.addEventListener('click', addLikes));
}
//* ***********************Print coments in real time***************************
db.collection('publications')
  .orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    printing.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc)
      addNewCardNoComents(printing, doc);
    });
  });

//* ***********************Filter wall all users********************************
goToPrincipal.addEventListener('click', () => {
  printing.style.display = 'block';
  filterMyComents.style.display = 'none';
  filterComents.style.display = 'none';
});

//* ***********************Filter post of me************************************
btnMySite.addEventListener('click', () => {
  console.log(filterName.value);
  filterMyComents.style.display = 'block';
  printing.style.display = 'none';
  filterComents.style.display = 'none';
  db.collection('publications')
    .where('name', '==', getName || getEmail)
    .onSnapshot((filters) => {
      filterMyComents.innerHTML = '';
      filters.forEach((doc) => {
        addNewCard(filterMyComents, doc);
      });
    });
});

//* ***********************Search user by name ***********************************
btnFilter.addEventListener('click', () => {
  console.log(filterName.value);
  filterMyComents.style.display = 'none';
  printing.style.display = 'none';
  filterComents.style.display = 'block';
  db.collection('publications')
    .where('name', '==', filterName.value)
    .onSnapshot((filters) => {
      filterComents.innerHTML = '';
      filters.forEach((doc) => {
        addNewCardNoComents(filterComents, doc);
      });
    });
});
// if we also use ".orderBy("Date", "desc")" the real time doesn't work anymore,
// because it needs an index, we did it but it doesn't detect it
