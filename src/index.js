import { example } from './example.js';

example();

let root = document.querySelector('#root')

function paginaDeInicio(){
    root.innerHTML = " "
    let homeView = document.createElement('div')
    homeView.innerHTML = `
        <div id="mainImages" >
        <figure class="image is-2by1">
  <img src="imagen1.png">
</figure>
<figure class="image">

  <img class="is-rounded" style=" width:133px; height:77px" src="logo.png " frameborder="0" allowfullscreen>
</figure>
</div> 
<h1 class="title">¡Bienvenidx repostero!</h1>
<input class="input is-rounded" value="E-mail"></input>
<input class="input is-rounded" value="password" type="password"></input>
<button class="button is-rounded"  id="logIn">Log In</button>
<p class="subtitle">Ingresa con</p>
<img src="https://pixabay.com/get/51e7d545425ab108feda8460c62d3f7d1737d8e34e507441732d73d2974ecc_1920.png" class="face">
<img src="https://pixabay.com/get/57e1d3414352ad14f6d1867dda293276163dd6e3554c704c7d2979dc914cc35e_1920.png" class="gmail">
  <p class="subtitle">No tienes cuenta? <button id="liga" class="button">Regístrate</button> gratis</p>
<br>
    `
    //image is-5by3
  root.appendChild(homeView)  
}

paginaDeInicio()

let loginButton = document.querySelector('#liga')
function renderLogin(){
    //root.innerHTML =" "
    let homeView = `
        <div id="mainImages" >
  <img src="https://pixabay.com/get/54e7d14a4852a814f6d1867dda293276163dd6e3554c704c7d2979dc9448c75a_1920.jpg" class="firstImage">
  <img src="https://pixabay.com/get/55e8d544495ba514f6da8c7dda293276163dd6e3554c704c7d2979dc924dc050_1280.png" class="secondImage">
</div> 
<h1 class="title">¡Registrate!</h1>
<input class="input" value="   E-mail"></input>
<input class="input" value="   User name"></input>
<input type="password" class="input" value="   Password"></input>
<input type="password" class="input" value="   Password confirm"></input>
<button class="button">Log In</button>
<p class="subtitle">Ingresa con</p>
<img src="https://pixabay.com/get/51e7d545425ab108feda8460c62d3f7d1737d8e34e507441732d73d2974ecc_1920.png" class="face2">
<img src="https://pixabay.com/get/57e1d3414352ad14f6d1867dda293276163dd6e3554c704c7d2979dc914cc35e_1920.png" class="gmail2">
  <p class="subtitle">Ya tienes cuenta? <button id="liga2" class="liga2">inicia sesion </button></p>
<br>
    `
  root.innerHTML = homeView
  
 let singUpButton = document.querySelector('#liga2')
//singUpButton.onclick = root.innerHTML = " "
singUpButton.onclick = paginaDeInicio 
 loginButton.onclick = renderLogin
}
loginButton.onclick = renderLogin

// let singUpButton = document.querySelector('#liga2')
//singUpButton.onclick = root.innerHTML = " "
//singUpButton.onclick = paginaDeInicio