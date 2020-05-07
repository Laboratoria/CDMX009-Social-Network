import { postPage } from './postpageProfile.js';
import { goNewPost } from './modal-newpost.js';

export function goHome() {
  firebase.firestore().collection('posts').onSnapshot((snap) => {
    root.innerHTML = ' ';
    let post = ' ';
    post = document.createElement('div');
    root.innerHTML = `<div id="navBar">
    <img class="is-rounded"  src="https://uxrecipe.github.io/img/uxrecipe-logo.png" id="logo">
    <div class="dropdown">
    <button class="dropbtn"><i class="fas fa-bars" aria-hidden="true"></i></button>
    <div class="dropdown-content">
    <a href="#"><i class="fas fa-bell" aria-hidden="true"></i> Notificaciones</a>
    <a href="#"><i class="fas fa-bookmark" aria-hidden="true"></i> Guardado</a>
    <a href="#"><i class="fas fa-wrench" aria-hidden="true"></i> Configuracion</a>
    </div>
    </div>
    </div>
    <br>
    <div id=lastNav>
    <button class="button is-rounded" id="profile"><i class="fas fa-user is-medium" aria-hidden="true"></i></button>
    <button class="button is-rounded" id="newPost" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus" aria-hidden="true"></i></button>
    <button class="button is-rounded" id="home"><i class="fas fa-home is-large" aria-hidden="true"></i></button>
    <p> </p>
    </div>`;
    const profile = document.querySelector("#profile");
    profile.onclick = postPage;
    const newPost = document.querySelector('#newPost');
    newPost.addEventListener('click', goNewPost);
    snap.forEach( p => {
      post.innerHTML += `
        <div class="card">
        <div class="container" id = ="${p.data().id}">
        <img src="${p.data().userImg}" alt="Avatar" id="photoUser">
        
        <h4 id= UserName ><b>${p.data().user}</b></h4> 
        </div>
        <img src="${p.data().img}" alt="Avatar" style="width:100%">
        <div class="container">
        <button class="button" id="likeCake"><i class="fas fa-birthday-cake is-medium" aria-hidden="true"></i></button>
        <button class="button" id="comment"> <i class="fas fa-comment is-medium" aria-hidden="true"></i></button>
        <h4 id = "tittlePost">"${p.data().title}"</h4> 
        <p id = "bodyPost">${p.data().body}</p> 
        </div>
        </div>
        <br>`;
      root.appendChild(post);
    //   const deletePosts = document.querySelectorAll(".buttond");
    //   deletePosts.forEach(btn=> {
    //     btn.addEventListener('click', (e) => {
    //       firebase.firestore().collection('posts').doc(p.id).delete().then(() => {
    //         console.log('Document successfully deleted!');
    //       })
    //         .catch((error) => {
    //           console.error('Error removing document: ', error);
    //         });<button class="buttond" id="${p.data().id}"><i class="fas fa-backspace is-medium" aria-hidden="true"></i></button>
    });
  });
}
