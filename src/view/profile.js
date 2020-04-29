import { changeView } from '../view-controler/router.js';

export default () => {
  const viewProfile = `
      <div id='backgroundProfile'>
      <div id= 'gridProfile>
        <div class = 'prof1'>   
          <div><p>Bichigram</p></div>
          <div><button class="btn" id="logoutBtn3"> <img class="icon" src='/imgBichigram/logout.png'> </button></div>
        </div>
        <div class= 'prof2'>
          <div class="profilePost"></div>
          <div class="userPosts"></div>
        </div>
        <div class= 'prof3'> 
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
      
  `;
  // nodos
  const divElement = document.createElement('div');
  divElement.innerHTML = viewProfile;
  const db = firebase.firestore();
  const postsRef = db.collection('posts');
  const auth = firebase.auth();

  // elementos del DOM
  const showInfo = divElement.querySelector('.profilePost');
  const userPosts = divElement.querySelector('.userPosts');

  // get the info
  const user = firebase.auth().currentUser;
  if (user != null) {
    const profileInfo = `
   <div> 
   <img src="${user.photoURL}"> 
   <p> ${user.displayName} </p>
   </div>
   `;
    showInfo.innerHTML = profileInfo;
  }

  // logout
  const logout = divElement.querySelector('#logoutBtn3');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      changeView('#/login');
      alert('Come back soon!');
    });
  });

  // calling the docs and adding to the html
  postsRef.where('id', '==', user.uid).onSnapshot((snap) => {
    userPosts.innerHTML = '';
    snap.forEach((doc) => {
      const div = `<div>
              <p>${doc.data().user}</p>
              <p>${doc.data().date.toDate()}</p>
              <img width="200" src="${doc.data().postimg}" />
              <p>${doc.data().description}</p>
              <p>${doc.data().location}</p>
          </div>`;
      const nodo = document.createElement('div');
      nodo.innerHTML = div;
      userPosts.appendChild(nodo);
    });
  });

  return divElement;
};
