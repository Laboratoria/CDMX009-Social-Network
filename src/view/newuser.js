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

  //  firebase 
  const storage = firebase.storage() 
  const db = firebase.firestore() 
  const auth = firebase.auth()
  let user = auth.currentUser;

  //Nodes from DOM elements 
  let div= divElement.querySelector('#imgContainer')
  const image = divElement.querySelector('#img')
  const usernameText = divElement.querySelector("#signupUser")
  const emailText = divElement.querySelector('#signupEmail')
  const passwordText = divElement.querySelector('#signupPassword')
  const signupBtn = divElement.querySelector('#signup')
  const fbBtn = divElement.querySelector("#fb")
  const gBtn = divElement.querySelector("#google")
  let url; 

  auth.onAuthStateChanged(user => {
    console.log(user)
  })

  //profile img
  image.addEventListener('change', e => {
   let file = e.target.files[0]
      console.log(file)
   
   let x = storage.ref("profilePics").child(file.name).put(file)
        .then(snap => {
            return snap.ref.getDownloadURL()        
        })
        
        .then(function(link){
          url = link 
          let img = divElement.querySelector('#myimg')
          img.src = link
          console.log(url)
        })     
  } )
 
  //signup with Email
  signupBtn.addEventListener('click', e =>{
    e.preventDefault();
    const email = emailText.value;
    const pass = passwordText.value;
    const username = usernameText.value; 
  
    auth.createUserWithEmailAndPassword(email, pass).then(snap =>{
      snap.user.updateProfile({
        displayName: username,
        photoURL: url
      })
    }).then( () => changeView('#/home'))
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