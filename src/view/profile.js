import {signOff} from '../firebase.js';

export default () => {
    const userName = "Humpty Alexander Dumpty";
    const student = "Gato con botas";
    const school = "Escuela de la vida";
    const grade = "3";
    const group = "A";
    const teacher = "Shrek y Fiona";
    const comment = "Lorem Ipsum is simply dummyng a type specimen book. It has survived not only five centuries, but also the leap into electronic";
    const likeCount ="15";
    const answers ="";
    const viewProfile = `
    <button id="logOut" class="btnLogOut">Cerrar Sesión</button>
    <section class="userNamePhoto">
      <div>
          <img src="img/User.svg">
      </div>
      <div>
          <p class="userName">${userName}</p>
      </div>
    </section> 
    <section class="userData">
      <div class="user-data">
          <p>Alumno: ${student}</p>
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
          <div class="btnIcon">
          <button type="submit" class="editBtn" id="btnEditPost" ><img src="img/edit.svg" /></button> 
          <button type="submit" class="deleteBtn" id="btnDeletePost" ><img src="img/delete.svg" /></button> 
          </div>
              <p>${comment}</p>
          </div>
      <div>
          <div class="likes">
              <img src="img/like.svg">${likeCount}
          </div>
           <div class="answer"> 
           <div class="btnIcon">
          <button type="submit" class="editBtn" id="btnEditPost"  ><img src="img/edit.svg" /></button> 
          <button type="submit" class="deleteBtn" id="btnDeletePost" ><img src="img/delete.svg" /></button> 
          </div>
               <p>Comentarios${answers}</p>
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

