import { renderLogin } from './views/login.js';

renderLogin();


/*const db = firebase.firestore();
const usersRef = db.collection('users'); 

db.collection("cities").doc("new-city-id").set(data);





let root = document.querySelector('#root')

function paginaDeInicio(){
  root.innerHTML = " "
  let homeView = document.createElement('div')
  homeView.innerHTML = `
    <article class="media">
      <div class="media-center">
        <div id="mainImages" >
          <figure class="image is-7by2">
            <img src="imagen1.png" id="mainImage">
          </figure>
          <div class="columns is-mobile is-centered">
            <figure class="image">
              <img class="is-rounded" id="logo"  src="logo.png " >
            </figure>
          </div>
        </div> 
        <br>
        <div class="columns is-mobile is-centered">
          <h2 class="subtitle has-text-centered">¡Bienvenidx repostero!</h2>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-rounded" type="email" placeholder="Email" id="si">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
         </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-rounded" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <button class="button is-rounded "  id="logIn">LOG IN</button>
        </div>
        <div class="columns is-mobile is-centered">
          <p class="subtitle2">Ingresa con</p>
        </div>
        <div class="columns is-mobile is-centered">
          <a class="level-item">
            <button class="button" id="btnface" src="faceImage.png" class="face"></button>
          </a>
          <a class="level-item">
            <button class="button" id="btnGmail"  class="gmail"></button>
          </a>
        </div>
        <div id="fin">
          <p class="subtitle2 has-text-centered">No tienes cuenta? <button id="liga" class="subtitle2">Regístrate</button> gratis</p>
          <br>
        </div>
      </div>
    </article>
  `
  root.appendChild(homeView)  
  let loginButton = document.querySelector('#liga')
  loginButton.onclick = renderLogin
  let btnface=document.querySelector("#btnface")
  btnface.onclick =login
  
}

paginaDeInicio()
function renderLogin(){
//root.innerHTML =" "
  let homeView = `
    <article class="media">
      <div class="media-center">
        <div id="mainImages" >
          <figure class="image is-7by2">
            <img src="imagen1.png" id="mainImage">
          </figure>
          <div class="columns is-mobile is-centered">
            <figure class="image">
              <img class="is-rounded" id="logo"  src="logo.png " >
            </figure>
          </div>
        </div> 
        <br>
        <div class="columns is-mobile is-centered">
          <h1 class="subtitle has-text-centered">¡Registrate!</h1>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-rounded" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-rounded" type="text" placeholder="User name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input is-rounded" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input is-rounded" type="password" placeholder="Password confirm">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <button class="button is-rounded"  id="singUp">SING UP</button>
      </div>
      <p class="subtitle2 has-text-centered">Ingresa con</p>
        <a class="level-item">
          <img src="faceImage.png" class="face2" style="width: 43px; height: 39px">
          <div style="width: 100px; height: 39px" ></div>
          <img src="gmailImage.png" class="gmail" id="gmail2">
        </a>
      <div id="fin">
        <p class="subtitle2 has-text-centered">Ya tienes cuenta? <button id="liga2" class="subtitle2">Inicia sesion </button></p>
      </div>
      <br>
    </div>
  </article>

  `
  root.innerHTML = homeView
  let singUpButton = document.querySelector('#liga2')

  singUpButton.onclick = paginaDeInicio 
}



function login(){
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(result=>{
  console.log(result.user)
  const usuario = {   
    name:result.user.displayName, 
    lastName:'', 
    email:result.user.email, 
    password:'',
    description:'',
    date: new Date(),
    photo:result.user.photoURL,
    uid:result.user.uid
    }
    let uid2 = result.user.uid; 
    usersRef.doc(uid2).set({
      "name": usuario.name,
      "lastName": usuario.lastName,
      "email": usuario.email,
      "password": usuario.password,
      "description": usuario.description, 
      "date":usuario.date,
      "photo": usuario.photo, 
      "uid":usuario.uid
    })
  root.innerHTML =" "
  let box = document.createElement('div')
  box.innerHTML = `
<nav class="navbar" role="navigation" aria-label="main navigation" id="boxLogo" style="width:100%; ">
  <div class="navbar-brand" style="width:100%">
    <a class="navbar-item" href="https://bulma.io">
      <h2 class="subtitle">RECIPES BOOK</h2>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
<br>
<br>
<div class="media-left" style="width:100% ; margin:2%" id="profile">
  <figure class="image is-150x150">
    <p class="subtitle"> ${result.user.displayName}</p>
    <img src=${result.user.photoURL} alt="Image" style="width:75px;height:75px; border-radius:50px">
    <p><strong>Publicaciones</strong> <small>0</small></p>
  </figure>
  <button class="button" id="edit" style="width:100%">Editar perfil </button>
</div>
<br>
      <br>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
        <div class="box">
          <nav class="level is-mobile">
            <div class="level">
              <div class="columns is-mobile">
                <div class="column ">
                    <a class="level-item " aria-label="share">
                      <span class="icon is-small">
                        <button class="button is-small " ><i class="fas fa-share" aria-hidden="true"></i></button>
                      </span>
                    </a>
                </div>
                <div class="column ">
                    <a class="level-item " aria-label="save">
                      <span class="icon is-small">
                        <button class="button is-small " ><i class="fas fa-save" aria-hidden="true"></i></button>
                      </span>
                    </a>
                </div>
                <div class="column ">
                    <a class="level-item " aria-label="like">
                      <span class="icon is-small ">
                        <button class="button is-small " ><i class="fas fa-heart" aria-hidden="true"></i></button>
                      </span>
                    </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <input class="input" id="file" type="text">
      <button class="button" id="addBtn">njkenkjdbsk</button> 
      `
  root.appendChild(box) 
  let edit =document.querySelector("#edit")
  function editProfile(){
    let profile = document.querySelector('#profile')
    profile.innerHTML=" "
    let newProfile=" "
    newProfile = document.createElement('div')
    newProfile.innerHTML=`
    <div class="media-left" style="width:100% ; margin:2%">
            <figure class="image ">
              <p class="subtitle">${result.user.displayName}</p>
              <input class="input" style="width:80% ; margin:2%" id="newUserName">
              <br>
              <img  src="${result.user.photoURL}" alt="Image" style="width:75px;height:75px; border-radius:50px">
              <input class="input" id="newUserPhoto" style="width:80% ; margin:2%" type="file">
              <p>
                <strong>Publicaciones</strong> <small>0</small> 
              </p>
            </figure>
          </div>
          <br>
          <button class="button" id="edit" style="width:80% ;margin:2%">Guardar cambios </button>
        </div>
        <br>
        </br>`
        profile.appendChild (newProfile)
        
  }
  
      
  edit.onclick = editProfile
})

}

//firebase.firestore()

=======
renderLogin();*/
//>>>>>>> 12e91bdaae0847bce0b43127028b23948bdd522c

