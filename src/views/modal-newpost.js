import { postsRef } from '../controller/firebase-controller.js';

export function goNewPost() {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title" id="exampleModalLongTitle">Nombre postre</h5>
  <input type="text" class="form-control" id="recipient-name">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  </div>
  <div class="modal-body">
  <h5>Ingredientes and instructions</h5>
  <div class="field">
  <div class="control">
  <textarea class="textarea" placeholder="" rows="10" id = "postBody"></textarea>
  </div>
  </div>
  <div class="file">
  <label class="file-label">
  <input class="file-input"  id= "postImg" type="file" name="resume">
  <span class="file-cta">
  <span class="file-icon">
  <i class="far fa-image"></i>
  </span>
  <span class="file-label">
  Photo
  </span>
  </span>
  </label>
  </div>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-primary" data-dismiss="modal" id = "submitPost">Enviar</button>
  </div>
  </div>
  </div>
  </div>`;
  root.appendChild(modal);
  const submitPost = document.querySelector('#submitPost');
  const postTxt = document.querySelector('#postBody');
  const postTitle = document.querySelector('#recipient-name');
  const fileInput = document.querySelector('#postImg');
  let url;
  fileInput.onchange = (e) => {
    let file = e.target.files[0];
    firebase.storage().ref('posts').child(file.name).put(file)
      .then (snap => {
        return snap.ref.getDownloadURL();
      })
      .then(link => {
        url = link;
        let img = document.createElement('img');
        img.src = link;
      })
    submitPost.onclick = (e) => {
      const currentUser = firebase.auth().currentUser;
      let post = {
        userImg: currentUser.photoURL,
        user: currentUser.email,
        id: currentUser.uid,
        title: postTitle.value,
        body: postTxt.value,
        img: url,
      }
      newPost(post)
        .then(accept =>{
          console.log(accept);
        })
        .catch(error => {
          console.log(error);
        })
    }
    function newPost(post = { user: 'Fabi', body: 'Holi' }) {
      return postsRef.add(post);
    }
  };
}
