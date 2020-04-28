// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';
let welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= " ";
  const viewLogin = `
    <div id="background2">  
      <div id='gridLogin'>   
          <div class='l1'>
            <div><img class="bichiImg" src='/imgBichigram/bichiLogin.png'> </img></div>
            <p >Bichigram</p>
          </div>
          <div class='l2'>
            <p>Una red social <br>para aprender de artrópodos!</p> 
            <form class="form">
              <input type='email' placeholder='Email' id="emailText" class="input"> </input><br>
              <input type='password' placeholder='Password' id="passwordText" class="input"></input><br>
              <button class='btn' id='loginBtn'> Log In </button>
            </form>
            <div class = "fbYG">
                <button class = "fb"> <img class="icon" src='/imgBichigram/fb.png'> </button>
                <button class = "google"> <img class="icon" src='/imgBichigram/google.png'> </button>
            </div>
          </div> 
          <div class='l3'>
            <p> ¿No tienes una cuenta? <a color="#fc8d97" href="#/newuser"> Regístrate</a> </p>
          </div>
      </div>
    </div>`;

  //  nodes (for the creation of the HTML elements)
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  //  nodes (to get the DOM elements inside the form and initialize the login function)
  const footer = document.querySelector('#w3');
  const emailText = divElement.querySelector('#emailText');
  const passwordText = divElement.querySelector('#passwordText');
  const loginBtn = divElement.querySelector('#loginBtn');
  const fbBtn = divElement.querySelector(".fb");
  const gBtn = divElement.querySelector(".google");

  //  login event
  loginBtn.addEventListener('click', () => {
    const email = emailText.value;
    const pass = passwordText.value;
    const auth = firebase.auth();

    //  check the user status
    auth.onAuthStateChanged(user => {
      if(user){
        console.log("user logged in" + user)
      }else{
        console.log("no user found ")
      }
    })

    //  sign in with firebase functions
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.then(() => changeView('#/home'));
    promise.catch(err => (err));
  });
  
  //facebook sign up
  fbBtn.addEventListener('click', () =>{
    const auth = firebase.auth()
    const provider = new firebase.auth.FacebookAuthProvider();
    const promise = auth.signInWithPopup(provider)
    
    promise.then(e => changeView('#/home'))
    promise.catch(error =>{
      alert("no salió :(");
      console.log(error)
    })
  })

  //google sign up
 gBtn.addEventListener('click', () =>{
    const auth = firebase.auth()
    const provider = new firebase.auth.GoogleAuthProvider();
    const promise = auth.signInWithPopup(provider)
    
    promise.then(e => changeView('#/home'))
    promise.catch(error =>{
      alert("no salió :(");
      console.log(error)
    })
 })

  return divElement;
}
// function view () {
  //  let body = document.querySelector('#body')
//     let w1 = document.querySelector('.w1')
//     let w2 = document.querySelector('.w2')
//     let w3 = document.querySelector('.w3')
//     let login= divElement.querySelector('#gridLogin')
    // body.style.backgroundImage = "url(/imgBichigram/fondo1.jpg)"
//     w1.style = "display:none";
//     w2.style = "display:none";
//     w3.style = "display:block";
//   }
   //document.querySelector('#login').addEventListener('click', view);