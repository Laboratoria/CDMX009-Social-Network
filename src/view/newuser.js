
const welcomeview = document.querySelector('#background1');
export default () => {
  welcomeview.innerHTML = ' ';
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
  </div>`;

  //  render nodes
  const divElement = document.createElement('div');
  divElement.innerHTML = viewNewUser;

  //  firebase
  const auth = firebase.auth();

  //  Nodes from DOM elements
  const image = divElement.querySelector('#img');
  const usernameText = divElement.querySelector('#signupUser');
  const emailText = divElement.querySelector('#signupEmail');
  const passwordText = divElement.querySelector('#signupPassword');
  const signupBtn = divElement.querySelector('#signup');
  const fbBtn = divElement.querySelector('.fb');
  const gBtn = divElement.querySelector('.google');
  let url;

  //  profile img
  image.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const x = firebase.storage().ref('profilePics').child(file.name).put(file)
      .then((snap) => { return snap.ref.getDownloadURL(); })
      .then(function (link) {
        url = link;
        const img = divElement.querySelector('#myimg');
        img.src = link;
      });
    console.log(x);
  });

  //  signup with Email
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailText.value;
    const pass = passwordText.value;
    const username = usernameText.value;
    auth.createUserWithEmailAndPassword(email, pass).then((snap) => {
        snap.user.updateProfile({
        displayName: username,
        photoURL: url,
      });
    }).then(() => window.location.hash = '#/home');
  });

  //  facebook sign up
  fbBtn.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    const promise = auth.signInWithPopup(provider);
    promise.then(() => window.location.hash = '#/home');
    promise.catch((err) => { return (err); });
  });

  //  google sign up
  gBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const promise = auth.signInWithPopup(provider);
    promise.then(() => { window.location.hash = '#/home' } );
    promise.catch((err) => { return (err); } );
  });

  return divElement;

};
