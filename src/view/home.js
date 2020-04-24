// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';

export default () => {
  const viewHome = `    
  <h1>feed lol</h1>
  <button class="btn" id="logoutBtn"> Logout </button>
  <div id="posts"> </div>  
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  // initializing firestore
  const db = firebase.firestore();
  const postsRef = db.collection('posts');
  const usersRef = db.collection('users')
  const auth = firebase.auth();
  const user = auth.currentUser;
  let name, photoUrl, uid;

  //  checking user status
  auth.onAuthStateChanged(user => {
    console.log(user)
  })

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