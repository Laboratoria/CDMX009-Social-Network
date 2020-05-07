let db= firebase.firestore();
const usersRef = db.collection('users');

export function postPage() {
  let currentUser = firebase.auth().currentUser;
  console.log(currentUser)
  let date = new Date();
  let id = currentUser.uid
  root.innerHTML =" "
  let box = document.createElement('div')
  box.innerHTML = `
  <div id="navBar">
  <img src="https://uxrecipe.github.io/img/uxrecipe-logo.png" id="logo">
   
  <div class="dropdown">
    <button class="dropbtn"><i class="fas fa-bars" aria-hidden="true"></i></button>
    <div class="dropdown-content">
    <a href="#"><i class="fas fa-bell" aria-hidden="true"></i> Notificaciones</a>
    <a href="#"><i class="fas fa-bookmark" aria-hidden="true"></i> Guardado</a>
    <a href="#"><i class="fas fa-wrench" aria-hidden="true"></i> Configuracion</a>
    <a href="#"><i class="fas fa-sign-out-alt" aria-hidden="true"></i> Cerrar sesion</a>
    </div>
  </div>
   </div>
  
  <br>
  <div id="profilCont">
     <img src="https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg" alt="Avatar" id="photoProfile">
      <h4 id="userName"><b>Nombre Usuario</b></h4> 
    <button class="button" id="profileEdit">Editar Perfil</button>
  </div>
  <div class="card">
    <div class="container">
     <img src="https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg" alt="Avatar" id="photoUser"><button class="button" id="postEdit"><i class="fas fa-ellipsis-h is-medium" aria-hidden="true"></i></button>
      <h4><b>Nombre Usuario</b></h4> 
    </div>
    <img src="https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/variedad-de-mini-postres-para-compartir-50267133.jpg" alt="Avatar" style="width:100%">
    <div class="container">
      <i class="fas fa-birthday-cake is-medium" aria-hidden="true"></i>
      <i class="fas fa-comment is-medium" aria-hidden="true"></i>
      <i class="fas fa-bookmark is-medium" aria-hidden="true"></i>
      <button class="button" id="view" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-eye is-medium" aria-hidden="true"></i></button>
      <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Nombre postre</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
           <img src="https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/variedad-de-mini-postres-para-compartir-50267133.jpg" alt="Avatar" style="width:100%">
          <h5>Ingredientes</h5>
          <p>....</p>
          <h5>Pasos</h5>
           <p>....</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
     <h4>Nombre postre</h4> 
      <p>Pequeña descripcion</p> 
     
    </div>
  </div>
  
  
  
  <div id=lastNav>
    <button class="button is-rounded" id="profile"><i class="fas fa-user is-medium" aria-hidden="true"></i></button>
    <button class="button is-rounded" id="newPost" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><i class="fas fa-plus" aria-hidden="true"></i></button>
  
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Recipient:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
    <button class="button is-rounded" id="home"><i class="fas fa-home is-large" aria-hidden="true"></i></button>
    <p> </p>
  </div>
      `
  root.appendChild(box) 
  let home =document.querySelector("#home")
  
  home.onclick = goHome
 
}

function goHome(){
  root.innerHTML =" "
  let post=" "
  post = document.createElement('div')
  post.innerHTML=`
  
<div id="navBar">
<img src="https://uxrecipe.github.io/img/uxrecipe-logo.png" id="logo">

<div class="dropdown">
<button class="dropbtn"><i class="fas fa-bars" aria-hidden="true"></i></button>
<div class="dropdown-content">
<a href="#"><i class="fas fa-bell" aria-hidden="true"></i> Notificaciones</a>
<a href="#"><i class="fas fa-bookmark" aria-hidden="true"></i> Guardado</a>
<a href="#"><i class="fas fa-wrench" aria-hidden="true"></i> Configuracion</a>
</div>
</div>
</div>

<br>



<div class="card">
<div class="container">
 <img src="https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg" alt="Avatar" id="photoUser"><button class="button" id="postEdit"><i class="fas fa-ellipsis-h is-medium" aria-hidden="true"></i></button>
  <h4><b>Nombre Usuario</b></h4> 
</div>
<img src="https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/variedad-de-mini-postres-para-compartir-50267133.jpg" alt="Avatar" style="width:100%">
<div class="container">
  <i class="fas fa-birthday-cake is-medium" aria-hidden="true"></i>
  <i class="fas fa-comment is-medium" aria-hidden="true"></i>
  <i class="fas fa-bookmark is-medium" aria-hidden="true"></i>
  <button class="button" id="view" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-eye is-medium" aria-hidden="true"></i></button>
  <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Nombre postre</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
       <img src="https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/variedad-de-mini-postres-para-compartir-50267133.jpg" alt="Avatar" style="width:100%">
      <h5>Ingredientes</h5>
      <p>....</p>
      <h5>Pasos</h5>
       <p>....</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>

 <h4>Nombre postre</h4> 
  <p>Pequeña descripcion</p> 
 
</div>
</div>





<br>
<br>
<br>
<div id=lastNav>
<button class="button is-rounded" id="profile"><i class="fas fa-user is-medium" aria-hidden="true"></i></button>
<button class="button is-rounded" id="newPost" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><i class="fas fa-plus" aria-hidden="true"></i></button>



<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">New message</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Recipient:</label>
          <input type="text" class="form-control" id="recipient-name">
        </div>
        <div class="form-group">
          <label for="message-text" class="col-form-label">Message:</label>
          <textarea class="form-control" id="message-text"></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Send message</button>
    </div>
  </div>
</div>
</div>
<button class="button is-rounded" id="home"><i class="fas fa-home is-large" aria-hidden="true"></i></button>
<p> </p>
</div>`
      root.appendChild (post)
      let profile =document.querySelector("#profile")
      profile.onclick = postPage

}




 
