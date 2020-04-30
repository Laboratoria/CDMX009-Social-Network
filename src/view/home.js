const welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= '';
  const viewHome = `
  <div id=backgroundHome>
    <div id= 'gridHome'> 
      <div class = 'h1'>   
        <div><p>Bichigram</p></div>
        <div><button class="btn" id="logoutBtn1"> <img class="icon" src='./imgBichigram/logout.png'> </button></div>
      </div>
      <div class= 'h2'>
        <div id='arthropods'>
          <img class="arts" src='./imgBichigram/art1.png'>
          <img class="arts" src='./imgBichigram/art2.png'>
          <img class="arts" src='./imgBichigram/art3.png'>
          <img class="arts" src='./imgBichigram/art4.png'>
        </div>
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
  const postsRef = db.collection('posts').orderBy("date", "desc");
  const auth = firebase.auth();
  
  // const userId = user.doc.data().id;

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
            <div class='imagePost'><img width="100%" src="${doc.data().postimg}" /></div>
            <button class='likes'><img class='membicha' id='${doc.id}' src='./imgBichigram/membicha.png'>${doc.data().counter}</button> 
            <button class='delete-post' id='${doc.id}'>borrar</button> <button class='edit-post' id='${doc.id}'> editar</button>
            <textarea class= 'comments'> </textarea>
            <button id='btnComm'> comentar</button>
        </div>`;
      const nodo = document.createElement('div');
      nodo.innerHTML = div;
      p.appendChild(nodo);
    });

    //  Getting all the 'like' buttons to be manipulated in a node list
    const likes = document.querySelectorAll('.likes');
    //  Increments the counter (likes) to the target 'me embicha' button
    likes.forEach(node=> node.addEventListener('click', e =>{
      const id = e.target.id;
      const likesRef = db.collection('posts').doc(id);
      const increment = firebase.firestore.FieldValue.increment(1);
        likesRef.update({
        counter: increment,
        });
    }));
  });
 
  //  logout
  const logout = divElement.querySelector('#logoutBtn1');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      window.location.hash = '#/login';
    });
  });

  return divElement;
};
