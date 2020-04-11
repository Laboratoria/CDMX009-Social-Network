import { example } from './example.js';
//import { Send } from './example.js';
// pointer
let currentRoute = "home"
// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')



// loginView
function renderLogin(){
  let loginView = `<div>
  <h2> Inicia sesión </h2>
  <input id="email" placeholder="Email" />
  <input id="password" placeholder="password" />
  <button id="entrar" >Iniciar</button>
</div>`
  root.innerHTML = loginView
}

// first view
function renderHome(){
  let homeView = `<div>
  <h2>Bienvenidas! ヽ(^o^)ノ </h2>
  <br><button id="Google">Google</button>
  <br><button id="Facebook">Facebook</button>
</div>`
  root.innerHTML = homeView
}

// router
function router(route){
  //console.log(route)
  switch(route){
    case 'login':
      renderLogin()
      break;
    default:
      renderHome()
      break;
         }
}

// btn listener
btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
// init
router()


/*document.querySelector('#entrar').addEventListener('click', () =>{ 
  const email = document.querySelector('#email').value; 
  const password = document.querySelector('#password').value; 
  console.log(email); 
  console.log(password); 
 /* firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
// return;  
  }).then(function(){
    alert("Usuario Registrado"); 
  });*/ 
//});

