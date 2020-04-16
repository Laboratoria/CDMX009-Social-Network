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
                <img src="imagen1.png">
            </figure>
            <div class="columns is-mobile is-centered">
                <figure class="image">
                    <img class="is-rounded" id="logo"  src="logo.png " >
                </figure>
            </div>
        </div> 
        <br>
        <div class="columns is-mobile is-centered">
            <h1 class="title has-text-centered">¡Bienvenidx repostero!</h1>
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
            <p class="subtitle">Ingresa con</p>
        </div>
        <a class="level-item">
        <img src="faceImage.png" class="face">
        <div style="width: 100px; height: 39px" ></div>
        <img src="gmailImage.png" class="gmail">
        </a>
        <div id="fin">
            <p class="subtitle has-text-centered">No tienes cuenta? <button id="liga" class="subtitle">Regístrate</button> gratis</p>
        <br>
        </div>
        </div>
        </article>

    `
  root.appendChild(homeView)  
  let loginButton = document.querySelector('#liga')
  loginButton.onclick = renderLogin
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
                    <img src="imagen1.png">
                </figure>
                <div class="columns is-mobile is-centered">
                    <figure class="image">
                        <img class="is-rounded" id="logo"  src="logo.png " >
                    </figure>
                </div>
            </div> 
            <br>
            <div class="columns is-mobile is-centered">
                <h1 class="title has-text-centered">¡Registrate!</h1>
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
            
            <p class="subtitle has-text-centered">Ingresa con</p>
            <a class="level-item">
                <img src="faceImage.png" class="face2" style="width: 43px; height: 39px">
                <div style="width: 100px; height: 39px" ></div>
                    <img src="gmailImage.png" class="gmail2" style="width: 43px; height: 39px">
             </a>
            <div id="fin">
                <p class="subtitle has-text-centered">Ya tienes cuenta? <button id="liga2" class="subtitle">Inicia sesion </button></p>
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