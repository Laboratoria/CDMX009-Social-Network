import { userAccess, createNewPost } from '../firebase/showData.js';

export default () => {
  const createPostView = document.createElement('div');
  createPostView.setAttribute('class', 'Home');
  const header = document.querySelector('header');
  header.style.display = 'none';
  createPostView.innerHTML = '';
  createPostView.innerHTML = `
    <header>
    <div class="homeOptions">
        <img src="images/CodeMakers.png" alt="logo" class="codeMakers">
        <a href="#/home"><img src="images/casa.svg" alt="Home" title="Home" class="btnHeader"></a>
        <a href="#/createPost"><img src="images/writePost.svg" alt="createPost" title="Crear Post" class="btnHeader"></a>
        <a href="#/profile"><img src="images/profile.svg" alt="Profile" title="Perfil" class="btnHeader" id="userPhoto"></a>
        <img src="images/cerrar-sesion.svg" alt="Cerrar Sesion" title="Salir" class="btnHeader" id="logOutBtn">
    </div>
    </header>
    <section class="sesionPrincipal">
    <form action="" class="newPost">
        <div class="welcome">Hola: <br><br><span id="username"></span></div>
        <textarea name="newTextPost" id="newTextPost" class="postForm" rows="7" placeholder="¿Qué te gustaría compartir?"></textarea>
        <button type="submit" id="submitNewPost">Compartir</button>
    </form>
    </section>`;
  const newPostContent = createPostView.querySelector('#newTextPost');
  const userPhoto = createPostView.querySelector('#userPhoto');
  const userName = createPostView.querySelector('#username');
  userAccess(userName, userPhoto);
  const submitNewPost = createPostView.querySelector('#submitNewPost');
  submitNewPost.addEventListener('click', (e) => {
    e.preventDefault();
    createNewPost(newPostContent.value);
  });
  return createPostView;
};
