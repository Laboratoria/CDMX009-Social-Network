import loginFunctions from '../firebase/login.js';
import { createNewPost, postTemplate } from '../firebase/showData.js';

export default () => {
  const homeView = document.createElement('div');
  homeView.setAttribute('class', 'Home');
  const header = document.querySelector('header');
  header.style.display = 'none';
  homeView.innerHTML = '';
  homeView.innerHTML = `
            <header>
                <div class="homeOptions">
                    <img src="images/CodeMakers.png" alt="logo" class="codeMakers">
                    <a href="#/home"><img src="images/casa.svg" alt="Home" class="btnHeader"></a>
                    <a href="#/profile"><img src="${localStorage.getItem('photoURL')}" alt="Profile" class="btnHeader" id="userPhoto"></a>
                    <img src="images/cerrar-sesion.svg" alt="Cerrar Sesion" class="btnHeader" id="logOutBtn">
                </div>
            </header>
            <section class="sesionPrincipal">
            <form action="" class="newPost">
            <div>Bienvenida <span id="username">${localStorage.getItem('displayName')}</span></div>
            <textarea name="newTextPost" id="newTextPost" class="postForm" rows="3" placeholder="¿Qué te gustaría compartir?"></textarea>
            <button type="submit" class="updateBtns" id="submitNewPost">Compartir</button>
        </form>
            </section>
            <section class="sesionPrincipal1">
            </section>`;
  const logOutBtn = homeView.querySelector('#logOutBtn');
  logOutBtn.addEventListener('click', loginFunctions.sesionLogOut);
  const postContainer = homeView.querySelector('.sesionPrincipal1');

  const newPostContent = homeView.querySelector('#newTextPost');
  const submitNewPost = homeView.querySelector('#submitNewPost');

  submitNewPost.addEventListener('click', (e) => {
    e.preventDefault();
    createNewPost(newPostContent.value);
    newPostContent.value = '';
  });

  postTemplate(postContainer);
  return homeView;
};
