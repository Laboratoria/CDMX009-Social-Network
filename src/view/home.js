import { changeView } from '../view-controler/router.js';

const welcomeview = document.querySelector('#background1');

export default () => {
  welcomeview.innerHTML = '';
  const viewHome = `
  <div id=backgroundHome>
    <div id= 'gridHome'> 
      <div class = 'h1'>   
        <div><p>Bichigram</p></div>
        <div><button class="btn" id="logoutBtn1"> <img class="icon" src='/imgBichigram/logout.png'> </button></div>
      </div>
      <div class= 'h2'>
        <div id="posts"> </div>
      </div>
      <div class= 'h3'> 
        <nav>
          <ul>
              <li class="home">
                  <a  href="#/home"><img src='./imgBichigram/btnHome.png'></a>
              </li>
              <li class ="newpost">
                  <a  href="#/newpost"> <img src='./imgBichigram/btnShare.png'> </a>
              </li>
              <li class='profile' >
                  <a href="#/profile"> <img src='./imgBichigram/btnProf.png'> </a>
              </li>
        </ul>
        </nav>
      </div>
    </div>
  </div>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  // initializing firestore
  const db = firebase.firestore();
  const postsRef = db.collection('posts');
  const auth = firebase.auth();

  // calling the docs and adding to the html
  postsRef.onSnapshot((snap) => {
    const p = document.querySelector('#posts');
    p.innerHTML = '';
    snap.forEach((doc) => {
      const div = `<div>
            <div class='lilGrid'>
              <div class= 'g1'><img width="40px" src="${doc.data().userphoto}" /></div>
              <div class= 'g2'><p>${doc.data().user}</p> </div>
              <div class= 'g3'><p>${doc.data().date.toDate()}</p> </div>
            </div>
            <div class='description'><p>${doc.data().description}</p></div>
            <div class='location'><p>${doc.data().location}</p></div>
            <div class='imagePost'><img width="360px" src="${doc.data().postimg}" /></div>
            <button id='likes'>${doc.data().counter}</button>
            <button class='comments'></button>
        </div>`;
      const nodo = document.createElement('div');
      nodo.innerHTML = div;
      p.appendChild(nodo);
    });
  });
  // logout
  const logout = divElement.querySelector('#logoutBtn1');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      changeView('#/login');
      alert('Come back soon!');
    });
  });
  return divElement;
};
