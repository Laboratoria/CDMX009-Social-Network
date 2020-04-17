import { example } from './example.js';

example();

let root = document.querySelector('#root')

function paginaDeInicio(){
    root.innerHTML = " "
    let homeView = document.createElement('div')
    homeView.innerHTML = `
    <article class="media">
        <div class="media-center">
        <div id="mainImages" >
            <figure class="image is-2by1">
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
        <a class="level-item">
        <button class="button" id="btn" src="faceImage.png" class="face"></button>
        <div style="width: 100px; height: 39px" ></div>
        <img src="gmailImage.png" class="gmail">
        </a>
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
  let btn=document.querySelector("#btn")
  btn.onclick =login
}

//paginaDeInicio()

//let loginButton = document.querySelector('#liga')
function renderLogin(){
    //root.innerHTML =" "
    let homeView = `
    <article class="media">
        <div class="media-center">
            <div id="mainImages" >
                <figure class="image is-2by1">
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
    //singUpButton.onclick = root.innerHTML = " "
    singUpButton.onclick = paginaDeInicio 
   // loginButton.onclick = renderLogin
}
//loginButton.onclick = renderLogin
paginaDeInicio()
// let singUpButton = document.querySelector('#liga2')
//singUpButton.onclick = root.innerHTML = " "
//singUpButton.onclick = paginaDeInicio



//let btn=document.querySelector("#btn")
    function login(){
        var provider = new firebase.auth.FacebookAuthProvider();
      return firebase.auth().signInWithPopup(provider)
      .then(data=>{
          console.log(data.user)
          root.innerHTML =" "
          let box = document.createElement('div')
    box.innerHTML = `
    <div class="box" id="boxLogo">
  <article class="media">
  </article>
    </div>

  <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-150x150">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
           Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="share">
            <span class="icon is-small">
              <i class="fas fa-share" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="save">
            <span class="icon is-small">
              <i class="fas fa-save" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<div class="box" id="boxLast">
<article>

</article>
</div>
    `
    root.appendChild(box) 
      })
       
    }
    //btn.onclick =login
    
