import {init}from './index.js'
export {home,close};
  
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

  //Cerrando sesión
function close(){
    firebase.auth().signOut()
    alert("Cerrando Sesion")
    init()
  
};