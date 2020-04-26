// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';
let welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= " ";
  const viewHome = `
  <div id=backgroundHome>
    <div id= 'gridHome'> 
      <div class = 'h1'>   
        <p>Bichigram</p>
        <button class="btn" id="logoutBtn"> <img class="icon" src='/imgBichigram/logout.png'> </button>
      </div>
      <div class= 'h2'>
        <div id="posts"> </div>
      </div>
      <div class= 'h3'> 
        <nav>
          <ul>
              <li class="home">
                  <a  href="#/home"><img src='/imgBichigram/btnHome.png'></a>
              </li>
              <li class ="newpost">
                  <a  href="#/newpost"> <img src='/imgBichigram/btnShare.png'> </a>
              </li>
              <li class='profile' >
                  <a href="#/profile"> <img src='/imgBichigram/btnProf.png'> </a>
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

  //  checking user status
  // auth.onAuthStateChanged(user => {
  //   console.log(user)
  // })

  // calling the docs and adding to the html
  postsRef.onSnapshot((snap) => {
    const p = document.querySelector('#posts');
    p.innerHTML = '';
    snap.forEach((doc) => {
      const div = `<div>
            <p>${doc.data().date}</p>
            <img width="200" src="${doc.data().postimg}" />
            <p>${doc.data().description}</p>
            <p>${doc.data().location}</p>
        </div>`;
      const nodo = document.createElement('div');
      nodo.innerHTML = div;
      p.appendChild(nodo);
    });
  });

  // logout
  const logout = divElement.querySelector('#logoutBtn');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      changeView('#/login');
      alert('Come back soon!');
    });
  });


  return divElement;
};