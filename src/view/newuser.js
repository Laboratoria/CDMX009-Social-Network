import { changeView } from '../view-controler/router.js'
export default () =>{
  
  const viewNewUser = `
  <div class = "gridContainer" id = "signupForm">
        <div class = "about">
            <h3> Sign Up!</h3>
        </div>
        <div class = "formContainer">
            <form class = "inputForm" id = "form">
              <div id = 'imgContainer'>
                <input type="file" id="img" name="img" accept="image/*">
                <img id = "myimg" src= "" width='100%' height='100%'>
              </div>
                <input class = "registerInput" id = "signupUser" type = "text" placeholder = "Username" required>
                <input class = "registerInput" id = "signupEmail" type = "email" placeholder = "Email" required> 
                <input class = "registerInput" id = "signupPassword" type = "password" placeholder = "Password" required> 
                <input class= "btn" id = "signup" type = "submit"> Sign up! 
            </form>
        </div>
        <div class = "createAccout">
            <p> Sign up with </p>
        </div>
        <div class = "fbYG">
            <button id = "fb"> fb </button>
            <button id = "google"> google </button>
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
  const fbBtn = divElement.querySelector("#fb")
  const gBtn = divElement.querySelector("#google")

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