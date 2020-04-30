import database from './database.js';

const body = document.querySelector('#body');
const root = document.querySelector('#root');
const logo = '<div class=""> <img width="250px" class="mainLogo" src="https://i.ibb.co/sFBwWCc/memingos-rgb.png"></div>';
let errMsg;

const errorHandler = () => {
    const errHand = database.errorInfo();
    if (!errHand) return;
    errMsg.innerHTML = errHand.message;
};
const topBarForm = `
    <div class="userInfo media navbar is-fixed-top">
        <div class="file is-centered">
            <figure class="image is-96x96">
                <img id="profilePic" clscrollbarass="is-rounded" src="https://i.ibb.co/F77rJHx/hombre2.jpg"/>
            </figure>
        </div>
        <div class="media-content">
            <p id="profileUserNameSaved" class="title is-4" placeholder="Name"></p>
        </div>
        <div class="navbar-end"> 
            <figure class="image is-64x64">
                <img id="mLogo" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"/>
            </figure>
        </div>
    </div>`;
const topNavBar = () => {
    const showImg = document.querySelector('#profilePic');
    const showUserName = document.querySelector('#profileUserNameSaved');
    let imgSrc;
    let userNameSrc;
    database.getProfilePic()
        .then((data) => {
        if (!data) return;
        imgSrc = data.url;
        showImg.src = imgSrc;
    });
    database.getProfileName()
        .then((data) => {
        if (!data) return;
        userNameSrc = data.userName;
        showUserName.innerHTML = `${'@'}${userNameSrc}`;
    })
        .catch(error => console.log('error', error));
};
// render de la pantalla para iniciar sesión
const renderSignIn = () => {
  root.classList.add('section');
  root.classList.add('signUpAndIn');
  body.classList.remove('has-navbar-fixed-top');
  body.classList.remove('has-navbar-fixed-bottom');
  const signInForm = `
        <div class="has-text-centered has-text-white title is-4">
            <h4> Bienvenido(a) </h4>
        </div>
        <div>
            <div class="field">
                <div class= "file is-small file is-centered"> 
                    <p class="control has-icons-left has-icons-right">
                        <input id="logEmail" class="input is-rounded " type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
            </div>
            <div class="field file is-small file is-centered">
                <p class="control has-icons-left has-icons-right">
                    <input id="logPassword" class="input is-rounded " type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div> 
            <div class="field file is-centered">
            <p class="has-text-danger is-centered" id="errMsg"></p>
            </div>
        </div>
        <div class="field">
            <div class="file is-centered">
                <p class="control">
                    <button id="logIn" class="button is-success button is-medium  has-background-warning is-rounded">
                        INGRESAR
                    </button>   
                </p>
            </div>
        </div>
        <div class="has-text-centered has-text-white title is-6">
            <h6>O ingresa con.. </h6>
        </div>
        <div class="buttons file is-centered ">
            <a id="facebookSignIn" class="button is-medium is-facebook">
                <span class="icon">
                    <i class="fab fa-facebook"> </i>
                </span>
            </a>
            <a id="googleSignIn" class="button is-medium is-google">
                <span class="icon">
                    <i class="fab fa-google"></i>
                </span>
            </a>
        </div>    
        <div class=" has-text-centered has-text-white is size-2">
            <td> ¿No tienes cuenta? </td> <a id="signUpLink"> Regístrate </a>
        </div>`;
  root.innerHTML = `${logo}${signInForm}`; // reendereamos el logo y la pantalla para inicio de sesión
  errMsg = document.querySelector('#errMsg');
  document.querySelector('#signUpLink').addEventListener('click', () => { // botón para mandarte a la pantalla de registro
    renderSignUp();
  });
  document.querySelector('#logIn').addEventListener('click', () => { // se obtienen los datos del usuario registrado
    database.signIn();
    window.setTimeout(errorHandler, 400);
  });
  document.querySelector('#facebookSignIn').addEventListener('click', () => { // se inicia sesión con Facebook
    database.signInFacebook();
  });
  document.querySelector('#googleSignIn').addEventListener('click', () => { // se inicia sesión con Google
    database.signInGoogle();
  });
};
// render de la pantalla de registro
const renderSignUp = () => {
  root.classList.add('section');
  body.classList.remove('has-navbar-fixed-top');
  body.classList.remove('has-navbar-fixed-bottom');
  const signUpForm = `
        <div class="has-text-centered has-text-white title is-4 ">
            <h4> Bienvenido(a) </h4>
        </div>
        <div>
            <div class="field file is-small file is-centered ">
                <p class="control has-icons-left has-icons-right ">
                    <input id="regEmail" class="input is-rounded " type="email" placeholder="Email"/>
                    <span class="icon is-small is-left ">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field file is-small file is-centered">
                <p class="control has-icons-left has-icons-right">
                    <input id="regPassword" class="input is-rounded" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field file is-centered">
            <p class="has-text-danger is-centered" id="errMsg"></p>
            </div>
        </div>
        <div class="field">
            <div class="file is-centered">
                <p class="control ">
                    <button  id="register" class=" button is-success button is-medium  has-background-warning is-rounded">
                        REGISTRAR
                    </button>   
                </p>
            </div>
        </div>
        <div class="has-text-centered has-text-white title is-6">
            <h6>O ingresa con.. </h6>
        </div>
        <div class="buttons file is-centered ">
            <a id="facebookSignIn" class="button is-medium is-facebook">
               <span class="icon">
                 <i class="fab fa-facebook"> </i>
                </span>
            </a>
            <a id="googleSignIn" class="button is-medium is-google">
                <span class="icon">
                    <i class="fab fa-google"></i>
                </span>
            </a>
        </div>
        <div class=" has-text-centered has-text-white">
            <td> ¿Ya tienes cuenta? </td> <a id="signInLink"> Inicia sesión </a>
        </div>
        `;
  root.innerHTML = `${logo}${signUpForm}`; // se reenderea el logo y la pantalla de registro
  errMsg = document.querySelector('#errMsg');
  document.querySelector('#register').addEventListener('click', () => { // se obtienen los datos del usuario para guardarse en Firebase
    database.signUp();
    window.setTimeout(errorHandler, 400);
  });
  document.querySelector('#facebookSignIn').addEventListener('click', () => { // se registra con Facebook
    database.signInFacebook();
  });
  document.querySelector('#googleSignIn').addEventListener('click', () => { // se registra con Google
    database.signInGoogle();
  });
  document.querySelector('#signInLink').addEventListener('click', () => { // botón para mandarte a la pantalla de inicio de sesión
    renderSignIn();
  });
};
renderSignUp();


const BottomBarForm = `
<div class="">
    <div class="navbar is-fixed-bottom navBarCenter">
        <div class="navbar is-inline-flex is-transparent">
            <div class="navbar-item nav-center is-flex-touch">
                <a class="navbaritem">
                    <img id="home" src="https://i.ibb.co/C0y75x1/home-rgb2.png" class="material-icons"/>
                </a>
                <a class="navbaritem">
                    <img id="add" src="https://i.ibb.co/6DBT2jD/add-rgb2.png" class="material-icons"/>
                </a>
                <a class="navbaritem">
                    <img id="myProfile" src="https://i.ibb.co/vkqHbpD/profile-rgb2.png" class="material-icons"/>
                </a>                
            </div>
        </div>
    </div>
    <div>
`;

const renderProfile = () => {
  root.classList.add('section');
  body.classList.remove('has-navbar-fixed-top');
  body.classList.add('has-navbar-fixed-bottom');
  const profile = `
    <div class="logoMemingos"> 
    <img id="mLogo" width="50px" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"/>
    </div>
        <div class="file is-centered">
            <figure class="image is-96x96">
                <img id="showImg" class="is-rounded" src="https://i.ibb.co/F77rJHx/hombre2.jpg"/>
            </figure>
        </div>
        <div class="file is-centered">
            <label class="file-label">
                <input id="profilePicture" class="file-input" type="file" accept="image/x-png,image/gif,image/jpeg" name="profile"/>
                <span class="file-cta">
                    <span class="file-icon">
                        <i class=fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Editar foto de perfil
                    </span>         
                </span>
            </label>
           
        </div>   
   
 
        <div class="file is-centered">
        
        <a id="logout" class="material-icons"> Cerrar Sesión </a>
        
        </div> 
        
        <div class="file is-centered">
            <div class="control">
            
                <div class="has-text-centered has-text-black title is-9">
                    <h3> Información </h3>
                </div>
                <div class="has-text-centered has-text-black title is-6">
                    <input id="profileName" class="input is-rounded" placeholder="Nombre" type=""/>
                    <a>Nombre</a>
                    
                </div>
                <div class="has-text-centered has-text-black title is-6">
                    <input id="userName" class="input is-rounded" type="" placeholder="Usuario"/>
                    <a>Usuario</a>     
                </div>
                <div class="field">
                    <div class="control has-text-centered has-text-black title is-6">
                        <input id="biography" class="input is-hovered" placeholder="Acerca de mi..." rows="7"/> 
                        <a>Acerca de mi..</a>
                    </div>
                </div>
            </div> 
        </div>
   
        <div class="field">
            <div class="file is-centered">
                <p class="control">
                    <button  id="confirm" class="button is-success button is-medium  has-background-warning is-rounded">
                        CONFIRMAR
                    </button>   
                </p>
            </div>
            
        </div>
        `;
  root.innerHTML = `${profile}${BottomBarForm}`;
  document.querySelector('#home').addEventListener('click', () => {
    renderFeed();
  });
  document.querySelector('#add').addEventListener('click', () => {
    renderNewPost();
  });

  document.querySelector('#confirm').addEventListener('click', () => {
    database.saveData();
    window.setTimeout(renderFeed, 400);
  });
  document.querySelector('#logout').addEventListener('click', () => {
    database.logout();
    renderSignIn();
  });

  const showImg = document.querySelector('#showImg');
  const showName = document.querySelector('#profileName');
  let setInfo;
  let imgSrc;
  database.getProfilePic()
    .then((data) => {
      if (!data) return;
      imgSrc = data.url;
      showImg.src = imgSrc;
    });
  document.querySelector('#profilePicture').addEventListener('change', (event) => {
    database.uploadPicture(event.target.files[0]);
    showImg.src = imgSrc;
    window.setTimeout(renderProfile, 1500);
  });   
  database.getProfileName()
    .then((data) => {
      if (!data) return;
      setInfo = data;
      showName.innerHTML = setInfo.userName;
    });
  const profileName = document.querySelector('#profileName');
  const userName = document.querySelector('#userName');
  const biography = document.querySelector('#biography');
  const setAll = () => {
    if (!setInfo) return;
    profileName.value = setInfo.profileName;
    userName.value = setInfo.userName;
    biography.value = setInfo.biography;
  };
  window.setTimeout(setAll, 1000);
};
export const renderFeed = () => {
  root.classList.remove('signUpAndIn');
  root.classList.remove('section');
  body.classList.add('has-navbar-fixed-top');
  body.classList.add('has-navbar-fixed-bottom');
  const feed = `
        <div class="column body-column">
            <div class="header">
                <div id="topBar"></div>
                <div class="file1 is-centered">
                    <div id="postFeed"  class="column1">
                    </div>
                                  
                </div>
                <div class="content">
                    
                    <br>
                    <time datetime="2016-1-1"> </time>
                </div>
            </div>
        </div>
    `;
  root.innerHTML = `${feed}${BottomBarForm}`;
  document.querySelector('#topBar').innerHTML = topBarForm;
  topNavBar();
  database.getPostFeed();

  //let result = '';
      // console.log(data);

      //for (const key in data) {
      //  result += `<div>${data[key].comment}</div>`;
      //  console.log(data[key].url);
    //}
    // document.getElementById('postComments').innerHTML = result;

  //const sortedPosts = [...postText].sort();
  //console.log(sortedPosts);
  //const sortByDate = () => {
   //   const sortDate = postText.sort((a, b) => 
   //   ((a.postTime > b.postTime) ? -1 : 1));
      /*{
          if (prev.postTime > next.postTime) {
              return 1;
          }  if (prev.postTime < next.postTime) {
            return -1;
          }
          return 0;
      }*/
      
      
   //   console.log(sortDate);
    //  return sortDate;
//  };
//  sortByDate(postText);
//  sortByDate.forEach((key) => {

  //})
  document.querySelector('#myProfile').addEventListener('click', () => {
    renderProfile();
  });
  document.querySelector('#add').addEventListener('click', () => {
    renderNewPost();
  });
  document.querySelector('#home').addEventListener('click', () => {
    renderFeed();
  });
  /* const showFeedImg = document.querySelector('#postFeed');
     let imgFeedSrc;
     database.getPostFeed()
         .then(data=>{
         if (!data) return;
         imgFeedSrc = data.url
         showFeedImg.src = imgFeedSrc
         });
        */
};


const renderNewPost = () => {
  root.classList.add('section');
  root.classList.remove('signUpAndIn');
  root.classList.remove('feed');
  const post = `
  <div id="topBar">
  </div>
                <div id="showNewImg" class="file is-centered">
                    <img id="showImgPreview" class="is-rounded" src=""/>
                </div>
        <div class="field">
            <div class="file is-info has-name is-small">
                <label class="file-label">
                    <input id="uploadImg" class="file-input" type="file" accept="image/x-png,image/gif,image/jpeg" name="resume">
                        <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                            Sube un archivo
                            </span>
                        </span>
                </label>
            </div>
      </div>
        <div class="field">
                <input id="postMessage" class="input is-hovered" placeholder="Agrega un pie de foto" rows="5"> </input>
        </div>
        <button id="update" class="button is-success">
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span>
            <span> Compartir </span>
      </button>
        
    `;
    
  root.innerHTML = `${post}${BottomBarForm}`;
  document.querySelector('#topBar').innerHTML = topBarForm;
  topNavBar();
  document.querySelector('#home').addEventListener('click', () => {
    renderFeed();
  });
  document.querySelector('#myProfile').addEventListener('click', () => {
    renderProfile();
  });
    const inputFile = document.querySelector('#uploadImg')
    const previewContainer = document.querySelector('#showNewImg')
    const previewImg = previewContainer.querySelector('#showImgPreview')

     inputFile.addEventListener("change", function () { 
            const file = this.files[0]
            if (file) {
                const reader = new FileReader();

                previewImg.style.display = "block";

                reader.addEventListener("load", function () { 
                    console.log(this);
                    previewImg.setAttribute("src", this.result);
                });
                reader.readAsDataURL(file);
            }
    }); 
    //     database.uploadPicturePost();
    // });
  document.querySelector('#update').addEventListener('click', () => {
    // database.savePostData();
    database.uploadPicturePost();
    window.setTimeout(renderFeed, 1500);
   
});

};
