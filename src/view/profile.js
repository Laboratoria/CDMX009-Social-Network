let welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= " ";
  const viewProfile = `
  <div id="backgroundProfile">
      <h1>wut?</h1>
      <div id="profiles"></div>
      <div class= 'p3'> 
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
  `;
  // nodos
  const divElement = document.createElement('div');
  divElement.innerHTML = viewProfile;
  // const db = firebase.firestore();
  // const auth = firebase.auth();

  // elementos del DOM
  const showInfo = divElement.querySelector('#profiles');

  // get the info
  const user = firebase.auth().currentUser;
  if (user != null) {
    const profileInfo = `
   <div> 
   <img src="${user.photoURL}"> 
   <p> Name: ${user.displayName} </p>
   <p> Bio: ${user.bio} </p>
   </div>
   `;
   const nodo =document.createElement('div')
    nodo.innerHTML = profileInfo;
    showInfo.appendChild(nodo);
  }
  return divElement;
};