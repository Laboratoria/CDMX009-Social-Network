import { goNewPost } from './modal-newpost.js';
import { goHome } from './home-postpage.js';
import { postsRef } from '../controller/firebase-controller.js';

let db= firebase.firestore();
const usersRef = db.collection('users');

export function postPage() {
  const currentUser = firebase.auth().currentUser;
  // console.log(currentUser)
  let id = currentUser.uid;
  root.innerHTML = ' ';
  let box = document.createElement('div');
  root.innerHTML = `
  <div id="navBar">
  <img src="https://uxrecipe.github.io/img/uxrecipe-logo.png" id="logo">
  <div class="dropdown">
  <button class="dropbtn"><i class="fas fa-bars" aria-hidden="true"></i></button>
  <div class="dropdown-content">
  <a href="#"><i class="fas fa-bell" aria-hidden="true"></i> Notificaciones</a>
  <a href="#"><i class="fas fa-bookmark" aria-hidden="true"></i> Guardado</a>
  <a href="#"><i class="fas fa-wrench" aria-hidden="true"></i> Configuracion</a>
  <a href="#"><i class="fas fa-sign-out-alt" aria-hidden="true"></i> Cerrar sesion</a>
  </div>
  </div>
  </div>
  <br>
  <div id="profilCont">
  <img src="${currentUser.photoURL}" alt="Avatar" id="photoProfile">
  <h4 id="userName"><b>"${currentUser.email}"</b></h4> 
  <button class="button" id="profileEdit">Editar Perfil</button>
  </div>
  <div id=lastNav>
  <button class="button is-rounded" id="profile"><i class="fas fa-user is-medium" aria-hidden="true"></i></button>
  <button class="button is-rounded" id="newPost" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus" aria-hidden="true"></i></button>
  <button class="button is-rounded" id="home"><i class="fas fa-home is-large" aria-hidden="true"></i></button>
  <p> </p>
  </div>`;
  let home = document.querySelector('#home');
  home.onclick = goHome;
  let newPost = document.querySelector('#newPost');
  newPost.addEventListener('click', goNewPost);
  postsRef.where('id', '==', id).get()
    .then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        box.innerHTML += `
          <div class="card">
          <div class="container">
          <img src="${doc.data().userImg}" alt="Avatar" id="photoUser"><button class="buttond" id="${doc.data().id}"><i class="fas fa-backspace is-medium" aria-hidden="true"></i></button>
          <h4 id= UserName ><b>${doc.data().user}</b></h4> 
          </div>
          <img src="${doc.data().img}" alt="Avatar" style="width:100%">
          <div class="container">
          <button class="button" id="likeCake"><i class="fas fa-birthday-cake is-medium" aria-hidden="true"></i></button>
          <button class="button" id="comment"> <i class="fas fa-comment is-medium" aria-hidden="true"></i></button>
          <h4 id = "tittlePost">"${doc.data().title}"</h4> 
          <p id = "bodyPost">${doc.data().body}</p> 
          </div>
          </div>
          <br>`;
        root.appendChild(box);
        const deletePosts = document.querySelectorAll(".buttond");
        deletePosts.forEach(btn=> {
          btn.addEventListener('click', (e) => {
            firebase.firestore().collection('posts').doc(doc.id).delete().then(() => {
              console.log('Document successfully deleted!');
            })
              .catch((error) => {
                console.error('Error removing document: ', error);
              });
          })
        })
      })
    })
}
