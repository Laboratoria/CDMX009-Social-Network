import { postsRef } from '../controller/firebase-controller.js';

export function postPage() {
  root.innerHTML = ' ';
  const box = document.createElement('div');
  box.innerHTML = `
      <div class="box" id="boxLogo">
      <article class="media">
      </article>
      </div>
      <div class="columns is-mobile is-centered">
      <figure class="image">
      <img class="is-rounded" id="logo"  src="images/logob.jpg " >
      </figure>
      </div>
      <article class="media">
      <figure class="media-left">
      <p class="image is-64x64">
      <img class="is-rounded" id="userImg"  src="images/logo.png " >
      </p>
      </figure>
      <div class="media-content">
      <div class="field">
      <p class="control">
      <input class="input" type="text" placeholder="Recipe name" id = 'recipeName'><br>
      <textarea class="textarea"  id='postTxt' placeholder="Ingredients
      Instructions..."></textarea>
      </p>
      </div>
      <div id="file-js-example" class="file has-name">
      <label class="file-label">
      <input class="file-input" type="file" name="resume">
      <span class="file-cta">
      <span class="file-icon">
      <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
      Photo
      </span>
      </span>
      </label>
      </div>
      <nav class="level">
      <div class="level-left">
      <div class="level-item">
      <a class="button is-info" id ='submitPost'>Enviar</a>
      </div>
      </div>
      </article>
      <div class = "content" id = 'contentPost'> </div>
      <div class="box" id="boxLast">
      <article>
  
      </article>
      </div>
      `;
  root.appendChild(box);
  const submitPost = document.querySelector('#submitPost');
  const postTxt = document.querySelector('#postTxt');
  const postTitle = document.querySelector('#recipeName');
  const fileInput = document.querySelector('#file-js-example input[type=file]');
  let url;
  fileInput.onchange = (e) => {
    let file = e.target.files[0];
    firebase.storage().ref("posts").child(file.name).put(file)
      .then (snap => {
        return snap.ref.getDownloadURL();
      })
      .then(link => {
        url = link;
        let img = document.createElement('img');
        img.src = link;
      })
    submitPost.onclick = (e) => {
      const user = firebase.auth().currentUser;
      console.log(user);
      let post = {
        user: user.displayName,
        id: user.uid,
        title: postTitle.value,
        body: postTxt.value,
        img: url,
        date: new Date(),
      }
      newPost(post)
        .then(accept =>{
          console.log(accept);
        })
        .catch(error => {
          console.log(error);
        })
    }
    function newPost(post = { user: 'Fabi', body: 'Holi', date: new Date() }) {
      return postsRef.add(post);
    }
    postsRef.onSnapshot(snap => {
      const content = document.querySelector('#contentPost');
      content.innerHTML = ' ';
      snap.forEach(doc => {
        let div = `<div class="box">
          <article class="media">
          <div class="media-left">
          <figure class="image is-128x128">
          <img src="${doc.data().img}" alt="Image" id = "img-content">
          </figure>
          </div>
          <div class="media-content">
          <div class="content" id = "contentTxt">
          <p>
          <strong>"${doc.data().title}"</strong> <small>"${doc.data().user}"</small>
          <br>
          "${doc.data().body}"
          </p>
          </div>
          <nav class="level is-mobile">
          <div class="level-left">
          <a class="level-item" aria-label="share">
          <span class="icon is-small">
          <i class="fas fa-edit" aria-hidden="true"></i>
          </span>
          </a>
          <a class="level-item" aria-label="save">
          <span class="icon is-small">
          <i class="fas fa-trash-alt" aria-hidden="true"></i>
          </span>
          </a>
          <a class="level-item" aria-label="like">
          <span class="icon is-small">
          <i class="fas fa-birthday-cake" aria-hidden="true"></i>
          </span>
          </a>
          </div>`
        let nodo = document.createElement('div')
        nodo.innerHTML = div
        content.appendChild(nodo)
      });
    });
  };
}
