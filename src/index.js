import database from './database.js';

const root = document.querySelector('#root');
const logo = `<div class=""> <img width="250px" class="mainLogo" src="https://i.ibb.co/sFBwWCc/memingos-rgb.png"></div>`;

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
    root.innerHTML = `${logo}${signInForm}`;
    document.querySelector('#signUpLink').addEventListener('click', function(event) {
        renderSignUp();
    });
    document.querySelector('#logIn').addEventListener('click', function(event) {
        database.signIn();
    });
    document.querySelector('#facebookSignIn').addEventListener('click', function (event) {
        database.signInFacebook();
    });
    document.querySelector('#googleSignIn').addEventListener('click', function (event) {
        database.signInGoogle();
    });
};
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
    root.innerHTML = `${logo}${signUpForm}`;
    document.querySelector('#register').addEventListener('click', function (event) {
        database.signUp();
    });
    document.querySelector('#facebookSignIn').addEventListener('click', function (event) {
        database.signInFacebook();
    });
    document.querySelector('#googleSignIn').addEventListener('click', function (event) {
        database.signInGoogle();
    });
    document.querySelector('#signInLink').addEventListener('click', function (event) {
        renderSignIn();
    });
};
renderSignUp();
const renderFirstProfile = () => {
    const firstProfile = `
        <div class="file is-centered">
            <figure class="image is-96x96">
                <img id="showImg" class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            
        </div>
        <div class="file is-centered">
            <label class="file-label">
                <input id="profilePicture" class="file-input" type="file" name="profile"/>
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
                <div class="has-text-centered has-text-black title is-6">
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
                        <textarea id="biography" class="textarea is-small" placeholder="Acerca de mi" style=""></textarea>
                        
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
    root.innerHTML = firstProfile;
    document.querySelector('#profilePicture').addEventListener('change',function(event) {
        database.uploadPicture(event.target.files[0]);
        console.log(imgSrc)
        showImg.src = imgSrc;
    });
    document.querySelector('#confirm').addEventListener('click', function(event) {
        database.saveData();
        renderFeed();
    });
    document.querySelector('#logout').addEventListener('click', function(event) {
        database.logout();
    });
    const showImg = document.querySelector('#showImg');
    let imgSrc;
    database.getProfilePic()
        .then(data=>{
            console.log(data)
            imgSrc = data.url
            showImg.src = imgSrc
        }); 
};
export const renderFeed = () => {
    root.classList.remove("signUpAndIn");
    const feed = `
    <div class="column body-columns">
        <div class="card">
            <div class="header">
                <div class="media">
                    <div class="file is-centered">
                        <figure class="image is-96x96">
                            <img id="profilePic" class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p id="profileNameSaved" class="title is-4" placeholder="Name"></p>
                        <p id="profileUserNameSaved" class="subtitle is-6">  </p>
                    </div>
                    <div class="logoMemingos"> 
                        <img id="mLogo" width="50px" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"/>
                    </div>
                </div> 
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        </p>
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br>
                        <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . ."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="has-navbar is-fixed-bottom">
                <div class="navbar is-inline-flex is-transparent">
                    <div class="navbar-item is-flex-touch">
                        <a class="navbar-item">
                            <img id="home" src="https://i.ibb.co/C0y75x1/home-rgb2.png" class="material-icons"/>
                        </a>
                        <a class="navbar-item">
                            <img id="add" src="https://i.ibb.co/6DBT2jD/add-rgb2.png" class="material-icons"/>
                        </a>
                        <a class="navbar-item">
                            <img id="myProfile" src="https://i.ibb.co/vkqHbpD/profile-rgb2.png" class="material-icons"/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    ` ;
    root.innerHTML = feed;
    document.querySelector('#myProfile').addEventListener('click', function(event) {
        renderFirstProfile();
    });
    const showImg = document.querySelector('#profilePic');
    let imgSrc;
    database.getProfilePic()
        .then(data=>{
        console.log(data)
        imgSrc = data.url
        showImg.src = imgSrc
        });
    const showName = document.querySelector('#profileNameSaved');
    const showUserName = document.querySelector('#profileUserNameSaved');
    let nameSrc;
    let userNameSrc;
    database.getProfileName()
       .then(data=>{
        console.log(data)
        nameSrc = data.profileName
        userNameSrc = data.userName
        showName.innerHTML = nameSrc;
        showUserName.innerHTML = userNameSrc;
        });
};