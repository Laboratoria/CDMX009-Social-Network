import {signOff} from '../firebase.js';

export default () => {
    const userName = "Laura Flores";
    const student = "Carolina Flores";
    const school = "Colegio La Paz";
    const grade = "1";
    const group = "A";
    const teacher = "Melisa Gutierrez";
    const comment = "Buen día, mi hija se trajo la chamarra de Adriana Juarez, la chamarra tiene su nombre Carolina Flores";
    const likeCount ="15";
    const answers ="";
    const viewProfile = `
    <button id="logOut" class="btnLogOut">Cerrar Sesión</button>
    <section class="userNamePhoto">
      <div class="namePhoto"> 
          <img src="img/User.svg">
          <p class="userName" contenteditable=true>${userName}</p>
      </div>
    </section> 
    <section class="userData">
      <div class="user-data">
          <p contenteditable=true> Alumno: ${student}</p>
          <p>Escuela: ${school}</p>
          <p>Grado: ${grade}</p>
          <p>Grupo: ${group}</p>
          <p>Docente: ${teacher}</p>
          <img class="engine" src="img/engine.svg"> 
        </div>
        <hr>
    </section>
  <section class="commentBox">
    <div class="containerbx">
       <div>
        <div class="comment">
          <div class="btnIconos">
            <button type="submit" class="edit" id="btnEditPost" ><img src="img/edit.svg" /></button> 
            <button type="submit" class="delete" id="btnDeletePost" ><img src="img/delete.svg" /></button> 
          </div>
              <p>${comment}</p>
        </div>
      <div>
           <div class="sectionLikes">
           <p class="nroLikes">0<img class="imgLikes" src="img/like.svg" /></p>
            </div>
           <div class="answer"> 
           <div class="btnIconos">
          <button type="submit" class="edit" id="btnEditPost"  ><img src="img/edit.svg" /></button> 
          <button type="submit" class="delete" id="btnDeletePost" ><img src="img/delete.svg" /></button> 
          </div>
               <p>Hola!, saben cuando se tomará la foto de grupo? gracias${answers}</p>
          </div>
          <div class="sectionLikes">
          <p class="nroLikes">0<img class="imgLikes" src="img/like.svg" /></p>
          </div>
               <p>${answers}</p>
          </div>
          <div class="likes">
              <img src="img/like.svg">${likeCount}
          </div>
      </div>
      </div>
    </div>
  </section>
    `
    
  
    const divElement = document.createElement('div')
    divElement.innerHTML = viewProfile;
    root.appendChild(divElement);

    const btnLogOut = document.querySelector('#logOut');
    btnLogOut.addEventListener('click', signOff);

    return divElement;
  }

