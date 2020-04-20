
let db= firebase.firestore();
let postsRef = db.collection('users');

const closeSesion = () =>{
    firebase.auth().signOut().then(function(){
      console.log('Cerrando sesión');
  
    }).catch(function(error){
      console.log(error);
    })
  }
  
export const profil = () =>{
  let user = firebase.auth().currentUser.uid;
  console.log(user);
    
  postsRef.doc(user).get().then(info => {
    let postInfo = info.data();
    console.log(postInfo.email);
    let userName = `${postInfo.name} ${postInfo.lastName}`; 
    renderProfil(userName);
  });
  
 
}

const renderProfil = (userName) =>{
  let main = document.querySelector('#main');
 
  let profilView = `
    <p>Welcome ${userName}</p>
    <p> Congratulations!! This is your personal account.</p>
    <input id="logout" type="button" value="Log out">
  `
  main.innerHTML = profilView;    
  
  let logout = document.querySelector("#logout");
  logout.addEventListener("click", closeSesion);
}



