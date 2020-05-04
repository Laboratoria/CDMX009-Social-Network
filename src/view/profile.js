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
  const auth = firebase.auth();

  // elementos del DOM
  const showInfo = divElement.querySelector('.profilePost');
  const userPosts = divElement.querySelector('.userPosts');

  // get the Profile info
  const user = firebase.auth().currentUser;
  if (user != null) {
    const profileInfo = `
   <div> 
   <img src="${user.photoURL}" width="320"> 
   <p> ${user.displayName} </p>
   </div>
   `;
    showInfo.innerHTML = profileInfo;
    console.log(user);
  }

  // setting posts info
  function renderPost(doc) {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const description = document.createElement('p');
    description.className = 'descriptionProf';

    const location = document.createElement('p');
    location.className = 'descriptionProf';

    const cross = document.createElement('button');
    cross.innerHTML = 'DELETE';
    cross.className = 'btn';

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'EDIT';
    editBtn.className = 'btn';

    div.setAttribute('data-id', doc.id);
    image.src = doc.data().postimg;
    description.textContent = doc.data().description;
    location.textContent = doc.data().location;

    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(location);
    div.appendChild(cross);
    div.appendChild(editBtn);

    userPosts.appendChild(div);

    console.log(div);
    // delete the data
    cross.addEventListener('click', (e) => {
      const id = e.target.parentElement.getAttribute('data-id');
      postsRef.doc(id).delete();
    });

    // edit the data - open modal
    editBtn.addEventListener('click', (e) => {
      const id = e.target.parentElement.getAttribute('data-id');
      const divModal = `<div id="edit-modal" class="modal">
      <input class='edit' id="photoDesc" type = "text" placeholder = "${doc.data().description}" required/>
      <input class='edit' id="photoLoc" type = "text" placeholder = "${doc.data().location}" required/>
      <button type="submit" class='btn' id="edit-ok"> LISTO! </button>
    </div>`;
      userPosts.innerHTML = divModal;
      const editOk = document.querySelector('#edit-ok');
      // this get the data to update
      editOk.addEventListener('click', (e) => {
        const editThis = postsRef.doc(id);
        const newDesc = document.querySelector('#photoDesc');
        const setDescription = newDesc.value;
        const newLoc = document.querySelector('#photoLoc');
        const setLocation = newLoc.value;

        // here we set the new description and location,
        // *Necesitan actualizarse ambos campos, sino se queda como "null"
        return editThis.update({
          description: setDescription,
          location: setLocation,
        })
          .then(() => {
            console.log('Document successfully updated!');
            // *quiero cambiar la vista o cerrar la modal, AIUDA
            window.location.hash = '#/home';
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
      });
    });
  }
  // get the data
  postsRef.where('id', '==', user.uid).onSnapshot((snapshot) => {
    const changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === 'added') {
        renderPost(change.doc);
      } else if (change.type === 'removed') {
        const div = userPosts.querySelector('[data-id=' + change.doc.id + ']');
        renderPost.removeChild(div);
      }
    });
  });

  //  logout
  const logout = divElement.querySelector('#logoutBtn3');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      window.location.hash = '#/login';
    });
  });

  return divElement;
};
