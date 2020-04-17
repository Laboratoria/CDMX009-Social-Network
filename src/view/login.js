import { changeView } from '../view-controler/router.js'

export default () => {
  const viewLogin = `
    <form>
    <input type='email' placeholder='Email' id="emailText"> </input>
    <input type='password' placeholder='Password' id="passwordText"> </input>
    <button class='btn' id='loginBtn'> puchame </button>
    </form>
  `;

  //nodes (for the creation of the HTML elements)
  const divElement = document.createElement('div')
  divElement.innerHTML = viewLogin

  //nodes (to get the DOM elements inside the form and initialize the login function)
  const emailText = divElement.querySelector('#emailText')
  const passwordText = divElement.querySelector('#passwordText')
  const loginBtn = divElement.querySelector('#loginBtn')

  //login event
  loginBtn.addEventListener('click', e => {
    const email = emailText.value
    const pass = passwordText.value 
    const auth = firebase.auth()

  //sign in with firebase functions
  const promise = auth.signInWithEmailAndPassword(email, pass)
  promise.then (console.log(promise))
  promise.then (e=> changeView('#/home'))
  promise.catch(e=>console.log(alert(e.message)))
  })

  return divElement
}

