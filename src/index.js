import database from './database.js';

const root = document.querySelector('#root'); //section donde se reendearan las pantallas
const logo = `<div class=""> <img width="250px" class="mainLogo" src="https://i.ibb.co/sFBwWCc/memingos-rgb.png"></div>`;

//render de la pantalla para iniciar sesión
const renderSignIn = () => {
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
    root.innerHTML = `${logo}${signInForm}`; //reendereamos el logo y la pantalla para inicio de sesión
    document.querySelector('#signUpLink').addEventListener('click', function(event) { //botón para mandarte a la pantalla de registro
        renderSignUp();
    });
    document.querySelector('#logIn').addEventListener('click', function(event) { //se obtienen los datos del usuario registrado
        database.signIn();
    });
    document.querySelector('#facebookSignIn').addEventListener('click', function (event) { //se inicia sesión con Facebook
        database.signInFacebook();
    });
    document.querySelector('#googleSignIn').addEventListener('click', function (event) { //se inicia sesión con Google
        database.signInGoogle();
    });
};
//render de la pantalla de registro
const renderSignUp = () => {
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
    root.innerHTML = `${logo}${signUpForm}`; //se reenderea el logo y la pantalla de registro
    document.querySelector('#register').addEventListener('click', function (event) { //se obtienen los datos del usuario para guardarse en Firebase
        database.signUp();
    });
    document.querySelector('#facebookSignIn').addEventListener('click', function (event) { //se registra con Facebook
        database.signInFacebook();
    });
    document.querySelector('#googleSignIn').addEventListener('click', function (event) { //se registra con Google
        database.signInGoogle();
    });
    document.querySelector('#signInLink').addEventListener('click', function (event) { //botón para mandarte a la pantalla de inicio de sesión
        renderSignIn();
    });
};
renderSignUp();


const renderNavBar = `
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
`
const renderProfile = () => {
    const firstProfile = `
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
                    
                </div>
                <div class="has-text-centered has-text-black title is-6">
                    <input id="userName" class="input is-rounded" type="" placeholder="Usuario"/>     
                </div>
                <div class="field">
                    <div class="control">
                        <textarea id="biography" class="textarea is-small" placeholder="Acerca de mi..." style=""></textarea>
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
    root.innerHTML = `${firstProfile}${renderNavBar}`;
    document.querySelector('#home').addEventListener('click', function(event) {
        renderFeed();
    });
    document.querySelector('#add').addEventListener('click', function(event) {
        renderNewPost();
    });
    
    document.querySelector('#confirm').addEventListener('click', function(event) {
        database.saveData();
        renderFeed();
    });
    document.querySelector('#logout').addEventListener('click', function(event) {
        database.logout();
        root.classList.add("signUpAndIn");
        renderSignIn();
        
    });
    const showImg = document.querySelector('#showImg');
    const showName = document.querySelector('#profileName');
    let setInfo
    let imgSrc;
    database.getProfilePic()
        .then(data=>{
            if (!data) return;
            imgSrc = data.url
            showImg.src = imgSrc
            });
    document.querySelector('#profilePicture').addEventListener('change',function(event) {
        database.uploadPicture(event.target.files[0]);
        showImg.src = imgSrc;
        window.setTimeout(renderProfile, 1500);
    });
    database.getProfileName()
        .then (data =>{
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
    }
    window.setTimeout(setAll, 1000);
};
export const renderFeed = () => {
    root.classList.remove("signUpAndIn");
    const feed = `

        <div class="column body-column">
            <div class="header">
                <div class="userInfo media">
                    <div class="file is-centered">
                        <figure class="image is-96x96">
                            <img id="profilePic" class="is-rounded" src="https://i.ibb.co/F77rJHx/hombre2.jpg"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p id="profileUserNameSaved" class="title is-4" placeholder="Name"></p>
                    </div>
                    <div class="logoMemingos"> 
                        <img id="mLogo" width="50px" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"/>
                    </div>
                </div>  
                <div id="postFeed" class="card">
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
 
    ` ;
    root.innerHTML = `${feed}${renderNavBar}`;
    document.querySelector('#myProfile').addEventListener('click', function(event) {
        renderProfile();
    });
    const showImg = document.querySelector('#profilePic');
    let imgSrc;
    database.getProfilePic()
        .then(data=>{
        if (!data) return;
        imgSrc = data.url
        showImg.src = imgSrc
        });
    const showUserName = document.querySelector('#profileUserNameSaved');
    let userNameSrc;
    database.getProfileName()
       .then(data=>{
            if (!data) return;
            userNameSrc = data.userName
            showUserName.innerHTML = `${'@'}${userNameSrc}`;
                    }
            )
        .catch(error => console.log('error', error));
        document.querySelector('#add').addEventListener('click', function(event) {
            renderNewPost();
        });
    document.querySelector('#home').addEventListener('click', function(event) { 
        database.getPostFeed();
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
    root.classList.remove("signUpAndIn");
    root.classList.remove("feed");
    const post = `
    <div class="logoMemingos"> 
        <img id="mLogo" width="50px" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"/>
 
    </div>
    <div id="showNewImg" class="file is-centered">
        
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
                <input id="postMessage" class="textarea" placeholder="Agrega un pie de foto" rows="5"> </input>
        </div>
        <button id="update" class="button is-success">
            <span class="icon is-small">
                <i class="fas fa-check"></i>
            </span>
            <span> Compartir </span>
      </button>
        
    `;
    root.innerHTML = `${post}${renderNavBar}`;
    document.querySelector('#home').addEventListener('click', function(event) { 
        renderFeed();
    });
    document.querySelector('#myProfile').addEventListener('click', function(event) {
        renderProfile();
    });
    document.querySelector('#uploadImg').addEventListener('change',function(event) {
        database.uploadPicturePost();
    });  
    document.querySelector('#update').addEventListener('click', function(event) {
        database.savePostData();
    });
           
}; 
