import { changeView } from '../view-controler/router.js'

export default () => {
  const viewLogin = `<div class = "gridContainer login-container">
    <div class="bichi-img-container flex"> <img class="bichi-img" src="imgs/bichi-inicio.png"> </img> </div>
    <main>
    <h1 class="flex bichigram-title">Bichigram</h1>
    <div class="login-subtitle flex flex-column"><p> Una red social</p> 
    <p>para aprender de artrópodos!</p></div>
      <form class="flex flex-column">
        <input type='email' placeholder='Email' id="emailText" class="input"> </input>
        <input type='password' placeholder='Password' id="passwordText" class="input"> </input>
        <button class='btn' id='loginBtn'> Log In </button>
      </form>
      <div class="newuser-text-container"> 
      <div class="newuser-text"> ¿No tienes una cuenta? <a color="#fc8d97" href="#/newuser"> Regístrate</a> </div>
      </div>
    </main>
    </div>`;

  //nodes (for the creation of the HTML elements)
  const divElement = document.createElement('div')
  divElement.innerHTML = viewLogin

  //nodes (to get the DOM elements inside the form and initialize the login function)
  const footer = document.querySelector('.footer')
  const emailText = divElement.querySelector('#emailText')
  const passwordText = divElement.querySelector('#passwordText')
  const loginBtn = divElement.querySelector('#loginBtn')
  
 function removeFooter(){
    footer.classList.toggle('no-footer')
    console.log('sirvo')
  }
  window.addEventListener('load',removeFooter())
  
 
  //login event
  loginBtn.addEventListener('click', e => {
    const email = emailText.value
    const pass = passwordText.value 
    const auth = firebase.auth()

  //sign in with firebase functions
  const promise = auth.signInWithEmailAndPassword(email, pass)
  promise.then (e=> changeView('#/home'))
  promise.catch(e=>console.log(alert(e.message)))
  })



  return divElement
}
