import loginFunctions from '../firebase/login.js';
import { userAccess } from '../firebase/showData.js';

export default () => {
  const profileView = document.createElement('div');
  profileView.setAttribute('class', 'Home');
  const header = document.querySelector('header');
  header.style.display = 'none';
  profileView.innerHTML = '';
  profileView.innerHTML = `
    <header>
    <div class="homeOptions">
        <img src="images/CodeMakers.png" alt="logo" class="codeMakers">
        <a href="#/home"><img src="images/casa.svg" alt="Home" class="btnHeader"></a>
        <a href="#/profile"><img src="images/profile.svg" alt="Profile" class="btnHeader" id="userPhoto"></a>
        <img src="images/cerrar-sesion.svg" alt="Cerrar Sesion" class="btnHeader" id="logOutBtn">
    </div>
    </header>
    <section class="sesionPrincipal">
    <div class="nameandphoto">
        <img src="https://picsum.photos/200" alt="photo" class="userPhoto">
        <h3 class="username" id="username"></h3>
    </div>
    <button class="updateBtns">Editar Perfil</button>
    <div class="updateInfo">
        <h3>Edita tus datos</h3>
        <label for="name">Nombre</label><input type="text" class="updateFields" id="updateName">
        <label for="email">Email</label><input type="text" class="updateFields" id="updateEmail">
        <label for="photo">Foto</label><input type="file" class="updateFields" id="updatePhoto">
        <button type="submit" class="updateBtns" id="sendUpdate">Actualizar</button>
    </div>
    <hr>
    <div class="userPosts">posts</div>
    </section>`;
  const logOutBtn = profileView.querySelector('#logOutBtn');
  logOutBtn.addEventListener('click', loginFunctions.sesionLogOut);
  const userPhoto = profileView.querySelector('#userPhoto');
  const userName = profileView.querySelector('#username');

  userAccess(userName, userPhoto);
  //   submitNewPost.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     createNewPost(newPostContent.value);
  //     newPostContent.value = '';
  //   });

  return profileView;
};