import { changeView } from '../view-controler/router.js'
let welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= " ";
  const viewNewUser = `
  <div id='background3'> 
    <div id = "gridNew">   
        <div class = "n1">
            <p> Bichigram </p>
            <h3> Registro!</h3>
        </div>
        <div class = "n2">
            <div id = 'imgContainer'>
              <p>Agrega tu foto</p>
              <img id = "myimg" src= "" width='100%' height='100%'>
              <input type="file" id="img" name="img" accept="image/*" placeholder='Agrega tu foto'>
            </div>
            <form class = "form">
                <input class = "input" id = "signupUser" type = "text" placeholder = "Username" required><br>
                <input class = "input" id = "signupEmail" type = "email" placeholder = "Email" required> <br>
                <input class = "input" id = "signupPassword" type = "password" placeholder = "Password" required> <br>
                <input class= "btn" id = "signup" type = "submit" placeholder ='Registrar'>  
            </form>
        </div>
        <div class = "n3">
          <p> Regístrate con: </p>
          <div class = "fbYG">
              <button class = "fb"> <img class="icon" src='/imgBichigram/fb.png'> </button>
              <button class = "google"> <img class="icon" src='/imgBichigram/google.png'> </button>
          </div>
        </div>
    </div>
  </div>`
    
  //nodes Render
  const divElement = document.createElement('div')
  divElement.innerHTML = viewNewUser

  //Nodes from DOM elements 
  let div= divElement.querySelector('#imgContainer')
  const image = divElement.querySelector('#img')
  const username = divElement.querySelector("#signupUser")
  const emailText = divElement.querySelector('#signupEmail')
  const passwordText = divElement.querySelector('#signupPassword')
  const signupBtn = divElement.querySelector('#signup')
  const fbBtn = divElement.querySelector(".fb")
  const gBtn = divElement.querySelector(".google")

  //profile img
  image.addEventListener('change', e => {
   let file = e.target.files[0]
      console.log(file)
   
   let x =firebase.storage().ref("profilePics").child(file.name).put(file)
        .then(snap => {
            return snap.ref.getDownloadURL()        
        })
        
        .then(function(url){
          let img = divElement.querySelector('#myimg')
          //let img = document.getElementById('myimg');
          img.src = url
          //div.style.backgroundImage = url
          console.log(url)
        })
       
     
    console.log(x)
     
  } )
  
 
  
  //signup with Email
  signupBtn.addEventListener('click', e =>{
    e.preventDefault();
    const email = emailText.value;
    const pass = passwordText.value;
    const auth = firebase.auth()
  
  const promise = auth.createUserWithEmailAndPassword(email, pass)
  promise.then(data => {
    let photo = url.value
    let name = username.value;
    data.user.updateProfile({
      displayName : name,
      photoURL : photo
    })
    console.log(promise)
  })
  promise.then (e=> changeView('#/login'))
  })
  
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
  return divElement
}