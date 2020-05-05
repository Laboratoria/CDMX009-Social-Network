import { checkIn, logInFacebook, logInGoogle, close}from './firebase.js';
export{home,init}

const logInButton = document.querySelector('#logIn');

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


 function init() {
  document.getElementById('logInUser').style.display = 'block';
  document.getElementById('init').style.display = 'block';
  document.getElementById('logInNetwoork').style.display = 'block';
  document.getElementById('LogInNewUser').style.display = 'block';
  document.getElementById('createAccount').style.display = 'none';
  document.getElementById('home').style.display = 'none';
 }


  function logIn(){

    document.getElementById('logInNetwoork').style.display="none";
    document.getElementById('LogInNewUser').style.display="none";
      
    let emailLogIn = document.querySelector('#emailLogIn').value
    let passLogIn = document.querySelector('#passLogIn').value
      console.log(emailLogIn);
  
       console.log(passLogIn);
       home ()
      firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
        
        // Handle Errors here.
        var errorCode = error.code;
        alert(errorCode);
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
       
      });
      
    }
  
    logInButton.onclick = logIn;


  //esta es la funcion donde se realizan las publicaciones
  function home (){
    document.getElementById('logInUser').style.display="none";
    document.getElementById('init').style.display="none";
    document.getElementById('logInNetwoork').style.display="none";
    document.getElementById('LogInNewUser').style.display="none";
  
      let homeView = `
  
      <div id="sidebar">
        <div id="toggle" class="toggle-btn">
          <span>&#9776</span>
        </div>
        <ul>
          <li>MENÚ</li>
          <li>Perfil</li>
          <li>Descubre</li>
          <li> <button id="close">Cerrar sesión</button> </li>
        </ul>
      </div>

  <section>
        <textarea name="" id="" cols="40" rows="10" placeholder="Crear publicación"></textarea>
        <form id="post">
        <label class="btn btn-file"> 
          <input type="file" name="fichero" value="" id="fichero" class="btnPost shadow btn btn-warning btn-default pl-5 pr-5  >
        </label>
        </form>
      <button id="like"><i class="fab fa-gratipay"></i></button>
    </section>

    
  
      `
    root.innerHTML = homeView
    let toggleButton=document.querySelector('#toggle');

    toggleButton.onclick= e=> menu()

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
         result += '<img width="200" class="img-thummnil" src="' + datos[key].url + '"/>';
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

  // MENU
//const btnToggle = document.querySelector('.toggle-btn');

//toggleButton.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('sidebar')
//});
}