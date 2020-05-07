import { checkIn, logInFacebook, logInGoogle, close}from './firebase.js';
export{home,init}

window.onload= init();

 function init() {


  let initView =`
  <section class="container text-center">
  <h1 class="display-4 font-weight-bold pt-1">Healt & Fitness <i class="fas fa-dumbbell"></i></h1>

  <div class=" mb-4" id="init">
  <h2 class="display-5 text-black font-weight-bold">Inicia Sesión</h2 class="display-4">
  </div>

  <div id="logInUser" class="logIn pt-3 pb-3">
    <input id="emailLogIn" type="email" placeholder="Nombre de usuario" name="email" class="form-control mb-5 mr-sm-5 p-2"/>
    <input  id="passLogIn" type="password" placeholder="Contraseña" class="form-control mb-5 mr-sm-5 p-2"/>
    <button id="logIn" class="shadow btn btn-warning btn-default pl-5 pr-5" >Ingresar</button>
  </div>

  <div class="m-2"id="logInNetwoork">
  <p>Iniciar con:</p> 
  <button id="logInFacebook" class="btn btn-primary btn-circle btn-xl m-2"><i class="fab fa-facebook"></i></button>  
  <button id="logInGoogle" class="btn btn-danger btn-circle btn-xl m-2"><i class="fab fa-google"></i></button>
  </div>

  <div id="LogInNewUser" class="creatAccount">
    <p>No tienes Cuenta?</p>
    <button id="creatAccount" class="btn btn-link"> Crear Cuenta</button>
  </div>
  </section>
  `
  root.innerHTML = initView
    let logInButton = document.querySelector('#logIn')
    let emailLogIn = document.querySelector('#emailLogIn')
    let passLogIn = document.querySelector('#passLogIn')
    logInButton.onclick = e => logIn(emailLogIn.value, passLogIn.value) // listener que ejecuta la funcion de Firebase
    let logInFacebookButoon = document.querySelector('#logInFacebook')
    logInFacebookButoon.onclick = e => logInFacebook ()
    let logInGoogleButton = document.querySelector('#logInGoogle')
    logInGoogleButton.onclick = e => logInGoogle ()
 }


  function logIn(emailLogIn, passLogIn){

      console.log(emailLogIn);
  
       console.log(passLogIn);
       //home ()
      firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
        
        // Handle Errors here.
        var errorCode = error.code;
        alert(errorCode);
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
       
      });
      
    }
  
    const creatAccountButton = document.querySelector('#creatAccount');

    function createAccount() {
      
      document.getElementById('logInUser').style.display = 'none';
      document.getElementById('init').style.display = 'none';
      document.getElementById('logInNetwoork').style.display = 'none';
      document.getElementById('LogInNewUser').style.display = 'none';
      const createAccountView = `
          <div class="login" id="createAccount">
            
             <input id="email" type="email" placeholder="email" />
            <br>
            <input id="pass" type="password" placeholder="pass" />
            <button id="checkIn" >Registrarse</button>
            <button id="back" >volver</button>
          </div>`
         // primero se dibuja en el DOM 
        root.innerHTML = createAccountView
        // escuchar primero hay que manipular
        let checkInButton = document.querySelector('#checkIn')
        let backButton = document.querySelector('#back')
        let email = document.querySelector('#email')
        let pass = document.querySelector('#pass')
        checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
        backButton.onclick = e=> init()
      }
      creatAccountButton.onclick = createAccount;
    

  //esta es la funcion donde se realizan las publicaciones
  function home (){
  
      let homeView = `
  
      <div id="sidebar">
        <div id="toggle" class="toggle-btn">
          <span>&#9776</span>
        </div>
        <ul>
          <li>MENÚ</li>
          <li>Perfil</li>
          <li> <button class="btn btn-warning" id="home">Descubre</button></li>
          <li> <button class="btn btn-warning" id="close">Cerrar sesión</button> </li>
        </ul>
      </div>
      <h1 class="display-4 text-center font-weight-bold pt-1">Healt & Fitness <i class="fas fa-dumbbell"></i></h1>
    <section id="post" >
        <textarea name="" id="" cols="60" rows="10" placeholder="Crear publicación"></textarea>
        <form id="post">
        <label class="btn btn-file" id="PostButton"> 
        <p>Publicar</p>
        
          <input type="file" name="fichero" value="" id="fichero" >
        </label>
        </form>
      <button id="like"><i class="fab fa-gratipay"></i></button>
    </section>
 
      `
    root.innerHTML = homeView
    let toggleButton=document.querySelector('#toggle');

    toggleButton.onclick= e=> menu()

    let homeButton = document.querySelector('#home');
    homeButton.onclick = e=> home()

    let closeButton = document.querySelector('#close');

    closeButton.onclick = e=> close()
  
    let selectImagenButton = document.querySelector('#fichero')
  
    selectImagenButton.onclick = e=>selectImagen()
  
   }
  
  
  let fichero;
  let imagenStorageRef;
  let imagenesRef;
  
  
  
  function selectImagen () {
    fichero = document.getElementById("fichero");
    imagenStorageRef=firebase.storage().ref();
    imagenesRef=firebase.database().ref().child("publicaiones");
  
    fichero.addEventListener("change",loadImagen,false);
    
    showImagenStorage ();
  
  }
    function showImagenStorage () {
   
      imagenesRef.on("value",function (snapshot){
        let datos=snapshot.val();
        let result="";
       for (var key in datos){
         result += '<img width="300" class="img-thummnil" src="' + datos[key].url + '"/>';
       }
        document.getElementById("root").innerHTML=result;
      })
  
    }
  
  
  
  function loadImagen(){
    
    let imagen = fichero.files[0];
   
    var uploadTask = imagenStorageRef.child('publicaciones/' + imagen.name).put(imagen);
    
    uploadTask.on('state_changed', function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    alert("hubo un error");
  }, function() {
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      crearNodoBDFB(imagen.name,downloadURL);
    });
  });
      
    }
  
  
    function crearNodoBDFB( nombreImagen, downloadURL){
      imagenesRef.push({nombre:nombreImagen, url:downloadURL});
    }


function menu (){

  document.getElementById('sidebar').classList.toggle('active');
  
}