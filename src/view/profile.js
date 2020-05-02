const welcomeview = document.querySelector('#background1');
export default () => {
  welcomeview.innerHTML = ' ';
  const viewProfile = `
      <div id='backgroundProfile'>
      <div id= 'grdProfile'>
        <div id='prof1'>   
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

  // elementos del DOM
  const showInfo = divElement.querySelector('.profilePost');
  const userPosts = divElement.querySelector('.userPosts');

  // get the Profile info
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

  // setting posts info
  function renderPost(doc) {
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.width = '200';
    const description = document.createElement('p');
    description.className = 'descriptionProf';
    const location = document.createElement('p');
    location.className = 'descriptionProf';
    const cross = document.createElement('button');

    div.setAttribute('data-id', doc.id);
    image.src = doc.data().postimg;
    description.textContent = doc.data().description;
    location.textContent = doc.data().location;
    cross.innerHTML = 'DELETE';

    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(location);
    div.appendChild(cross);

    userPosts.appendChild(div);

    console.log(div);
    // delete the data
    cross.addEventListener('click', (e) => {
      const id = e.target.parentElement.getAttribute('data-id');
      postsRef.doc(id).delete();
    });
  }
  // get the data
  postsRef.where('id', '==', user.uid).onSnapshot((snap) => {
    const changes = snap.docChanges();
    changes.forEach((change) => {
      if (change.type === 'added') {
        renderPost(change.doc);
      } else if (change.type === 'removed') {
        const div = userPosts.querySelector('[data-id=' + change.doc.id + ']');
        renderPost.removeChild(div);
      }
    });
  });

  return divElement;
};
