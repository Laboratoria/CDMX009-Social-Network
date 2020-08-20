import { readerMyTrips } from './myTrips.js';
import Post from "./post.js";
import {renderContent} from "./content.js";

let db = firebase.firestore();
let usersRef = db.collection('users');
let postsRef = db.collection('posts');
let storage = firebase.storage();
let imgRef = storage.ref('images');
let main = document.querySelector('#main');

export const editPost = (postId) =>{  
    
    let originalPost = postId;
  
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let textareaPost = document.querySelector("#postText");
    let imagePost = document.querySelector("#imagePost");
    let statusPost = document.querySelector("#statusPost");
    let statusLabel = document.querySelector("label[for=statusPost]");
       
    let status;
    let imageUrl;
    let likes;

    let sendPostBtn = document.querySelector("#sendPostBtn");
    let imagesContainer = document.querySelector("#imagesContainer");
    
    postsRef.doc(originalPost).get()
    .then(info => {
        let postInfo = info.data();
        console.log(postInfo);

        textareaPost.value = postInfo.text;

        if(postInfo.imageUrl){
            let image = `<img src="${postInfo.imageUrl}" class="imgPost" alt="${postInfo.imageId}" title="${postInfo.imageUrl}"> 
            <span class="remove-img">&times;</span>`
            imagesContainer.innerHTML = image;
            let removeImg = document.getElementsByClassName("remove-img")[0];
            removeImg.onclick = function() {
              let image = ``
              imagesContainer.innerHTML = image;
              imagePost.value = null;
              console.log("Usuario quitó img:" + imagePost.value);
            
              validate();
            }
        }

        if(postInfo.privacy == 'private'){
            console.log(postInfo.privacy);
            statusPost.checked = true;
            let privateStatus = `
            <i class="fas fa-lock" title="Privado"></i>
            `
            statusLabel.innerHTML = privateStatus;
            status = 'private';
        }else{
            console.log(postInfo.privacy);
            statusPost.checked = false;
            let publicStatus = `
            <i class="fas fa-unlock" title="Público"></i>
            `
            statusLabel.innerHTML = publicStatus;
            status = 'public';
        }
    })
    .catch((error)=> {
      console.log("Error al traer postInfo: " + error);
    });

    span.onclick = function() {
      modal.style.display = "none";
      readerMyTrips();
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        readerMyTrips();
      }
    }
  
    const validate = () => {
      if(textareaPost.value.trim() == "" && imagePost.files.length == 0){
       sendPostBtn.disabled = true;
       console.log("La info es: " + textareaPost.value + imagePost.value);
     }else{
       sendPostBtn.disabled = false;
       console.log("La info es: " + textareaPost.value + imagePost.value);
     }
    }
  
    textareaPost.addEventListener("input", e => {
      validate();  
    });
  
    imagePost.addEventListener("change", e => {
      console.log(imagePost.files.length);
      console.log(imagePost.value);
      console.log(e.target.files[0]);
          
      if (imagePost.files.length != 0){
        var reader = new FileReader();
        reader.onload = function () {
          let image = `<img src="${reader.result}" class="imgPost" alt="${imagePost.files[0].name}" title="${imagePost.files[0].name}">
          <span class="remove-img">&times;</span>`
          imagesContainer.innerHTML = image;
  
          let removeImg = document.getElementsByClassName("remove-img")[0];
          removeImg.onclick = function() {
            let image = ``
            imagesContainer.innerHTML = image;
            imagePost.value = null;
            console.log("Usuario quitó img:" + imagePost.value);
            validate();
          }
  
        }
        reader.readAsDataURL(imagePost.files[0]);
        validate(); 
      }else{
        let image = ``
        imagesContainer.innerHTML = image;
        validate();
      }
      
    });
  
    statusPost.addEventListener("change", e => {
      
      if(statusPost.checked){
        console.log(statusPost.checked);
        let privateStatus = `
        <i class="fas fa-lock" title="Privado"></i>
        `
        statusLabel.innerHTML = privateStatus;
        status = 'private';
      }else{
        console.log(statusPost.checked);
        let publicStatus = `
        <i class="fas fa-unlock" title="Público"></i>
        `
        statusLabel.innerHTML = publicStatus;
        status = 'public';
      }
      validate();
    });

    sendPostBtn.addEventListener("click", e => {
      
      sendPostBtn.disabled = true;
       
      let text =  textareaPost.value;
      let img = imagePost.files[0];
      let date = new Date();
      let idImg = date.getTime();
      let imageUrl = ((document.getElementsByClassName("imgPost")[0]) ? document.getElementsByClassName("imgPost")[0].src : '');
      status = ((statusPost.checked) ? 'private' : 'public');
      
      console.log('El txt es: ' + textareaPost.value);
      console.log('El status es: ' + status);
      console.log('imagePost es: ' + imagePost.files[0]);
      console.log('El src es: ' + imageUrl);
      
      if(img){
        console.log(originalPost);
        postsRef.doc(originalPost).get()
        .then(info => {
          let postInfo = info.data();
          console.log("postInfo.imageId: " + postInfo.imageId);
          if(postInfo.imageId != ""){
            imgRef.child(postInfo.imageId).delete()
            .then(function() {
              console.log("Imagen borrada");
            }).catch(function(error) {
              console.log("Hay un error al borrar la imagen: " + error);
            });
          }        
        }).then(e => {
          let token = idImg+'_'+img.name; 
          console.log("Subiendo img"); 
          imgRef.child(token).put(img)
          .then(snap => {
            return snap.ref.getDownloadURL();
          })
          .then(link => {
              imageUrl = link;
              console.log(imageUrl);
              let post = new Post(text, imageUrl, token, status, date);
              updatePost(post, originalPost);
          })
          .catch((error)=> {
            console.log("Error al guardar imagen: " + error);
          });
        }).catch((error)=> {
          console.log("Error al traer postInfo: " + error);
        });
      }else{
        if(imageUrl != ""){
          let token = document.getElementsByClassName("imgPost")[0].alt;
          let post = new Post(text, imageUrl, token, status, date);
          console.log(imageUrl);
          updatePost(post,originalPost);
        }else{
          postsRef.doc(originalPost).get()
          .then(info => {
            let postInfo = info.data();
            console.log("postInfo.imageId: " + postInfo.imageId);
            if(postInfo.imageId != ""){
              imgRef.child(postInfo.imageId).delete()
              .then(function() {
                console.log("Imagen borrada");
              }).catch(function(error) {
                console.log("Hay un error al borrar la imagen: " + error);
              });
            }        
          }).then(e=>{
            let token = "";
            let post = new Post(text, imageUrl, token, status, date);
            console.log(imageUrl);
            updatePost(post,originalPost);
          }).catch((error)=> {
            console.log("Error al traer postInfo: " + error);
          });
        }
      }
    });
  }

const updatePost = (post,originalPost) => {

  let modal = document.getElementById("myModal");
  console.log(post);
 
  postsRef.doc(originalPost).update({
    "text": post.text,
    "imageUrl": post.imageLink,
    "imageId": post.imageId,
    "privacy": post.privacy,
    "date" : post.date,
  })
  .then((data) => {
    console.log("Post actualizado: " + data);
    modal.style.display = "none";
    readerMyTrips();
  })
  .catch((error)=> {
    console.log("Error al guardar post: " + error);
  });
}


  

  
  