import Post from "./post.js";


let db= firebase.firestore();
let usersRef = db.collection('users');
let postsRef = db.collection('posts');
let storage = firebase.storage();
let imgRef = storage.ref('images');
let main = document.querySelector('#main');


const closeSession = () =>{
  firebase.auth().signOut().then(function(){
    console.log('Cerrando sesión');
  })
  .catch(function(error){
    console.log(error);
  })
}

const clean = () =>{
  
  let textareaPost = document.querySelector("#postText");
  let imagePost = document.querySelector("#imagePost");
  let statusLabel = document.querySelector("label[for=statusPost]");
  let status;
  let imageUrl;
  let sendPostBtn = document.querySelector("#sendPostBtn");
  let imagesContainer = document.querySelector("#imagesContainer");

  textareaPost.value = null;
  sendPostBtn.disabled = true;
  let image = ``
  imagesContainer.innerHTML = image;
  imagePost.value = null;
  console.log(imagePost.files);
  let publicStatus = `
    <i class="fas fa-unlock" title="Público"></i>
    `
  statusLabel.innerHTML = publicStatus;
  status = 'public';
  imageUrl='';  
}

const sendPost = (post) => {

  console.log(post);
 
  postsRef.add({
    "text": post.text,
    "imageUrl": post.imageLink,
    "privacy": post.privacy,
    "likes": post.likes,
    "date" : post.date,
    "uid": post.uid
  })
  .then((data) => {
    console.log("Post guardado: " + data);
    
    modal.style.display = "none";
    clean();
  })
  .catch((error)=> {
    console.log("Error al guardar post: " + error);
  });
}

const renderProfil = (userName, uid) =>{
   
  let profilView = `
    <p>Welcome ${userName}</p>
    <p> Congratulations!! This is your personal account.</p>
    <input id="postBtn" type="button" value="¿Dónde estás hoy, ${userName}?"> <br>
    <input id="logout" type="button" value="Log out">

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
      <!--
        <div class="modal-header">
          <span class="close">&times;</span>
        </div>-->
        <div class="modal-body">
          <span class="close">&times;</span>
          <textarea id="postText" placeholder="¿Dónde estás hoy, ${userName}?"></textarea> <br>
          <div id="imagesContainer"></div>
          <div class="icons">
            <label for="imagePost"><i class="far fa-image" title="Subir una imagen"></i></label>
            <input type="file" id="imagePost" name="img" accept="image/*" >
            <label for="statusPost"><i class="fas fa-unlock" title="Público"></i></label>
            <input type="checkbox" id="statusPost" value="public">
            <label for=""><i class="fas fa-map-marked-alt" title="Comparte tu ubicación"></i></label>
            
            <input id="sendPostBtn" type="button" value="Publicar" disabled>
          </div>
        </div>  
      </div>

    </div>
  `
  main.innerHTML = profilView;    
  
  let logout = document.querySelector("#logout");
  let postBtn = document.querySelector("#postBtn");
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  let textareaPost = document.querySelector("#postText");
  let imagePost = document.querySelector("#imagePost");
  let statusPost = document.querySelector("#statusPost");
  let statusLabel = document.querySelector("label[for=statusPost]");
  let status = 'public';
  let imageUrl='';
  let likes = 0;
  let sendPostBtn = document.querySelector("#sendPostBtn");
  let imagesContainer = document.querySelector("#imagesContainer");
    
  logout.addEventListener("click", closeSession);
  postBtn.addEventListener("click", e => {
    modal.style.display = "block"; 
  });

  span.onclick = function() {
    modal.style.display = "none";
    clean();
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      clean();
    }
  }

  textareaPost.addEventListener("input", e => {
  if (textareaPost.value && textareaPost.value.trim() != ""){
      sendPostBtn.disabled = false;
    }else{
      sendPostBtn.disabled = true;
    }  
  });

  imagePost.addEventListener("change", e => {
    console.log(imagePost.files.length);
    console.log(imagePost.files);
    console.log(e.target.files[0]);
    
    if (imagePost.files.length != 0){
      var reader  = new FileReader();
      reader.onload = function () {
        let image = `<img src="${reader.result}" class="imgPost" alt="${imagePost.files[0].name}" title="${imagePost.files[0].name}"> `
        imagesContainer.innerHTML = image;
      }
      reader.readAsDataURL(imagePost.files[0]);
      sendPostBtn.disabled = false;
    }else{
      let image = ``
      imagesContainer.innerHTML = image;
      sendPostBtn.disabled = true;
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
  });

  sendPostBtn.addEventListener("click", e => {
    
    sendPostBtn.disabled = true;
     
    let text =  textareaPost.value;
    let img = imagePost.files[0];
    let date = new Date();
    let idImg = date.getTime();
    
    
    console.log(textareaPost.value);
    console.log(status);
    console.log(imagePost.files[0]);
    
    if(img){
      let token = idImg+'_'+img.name; 
      console.log("Subiendo img");  
      //firebase.storage().ref("images").child(img.name).put(img)
      imgRef.child(token).put(img)
      .then(snap => {
        return snap.ref.getDownloadURL();
      })
      .then(link => {
          imageUrl = link;
          console.log(imageUrl);
          let post = new Post(text, imageUrl, status, likes, uid, date);
          sendPost(post);
      })
      .catch((error)=> {
        console.log("Error al guardar imagen: " + error);
      });
    }else{
      console.log("No hay img");
      let post = new Post(text, imageUrl, status, likes, uid, date);
      sendPost(post);
    }
  });
}


export const profil = () =>{
  let uid = firebase.auth().currentUser.uid;
  console.log(uid);    
  usersRef.doc(uid).get().then(info => {
    let userInfo = info.data();
    console.log(userInfo.email);
    let userName = `${userInfo.name} ${userInfo.lastName}`; 
    renderProfil(userName, uid);
  });
}


