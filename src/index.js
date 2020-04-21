import database from './database.js';


const root = document.querySelector('#root');
const logo = `<div class=""> <img width="250px" class="mainLogo" src="https://i.ibb.co/sFBwWCc/memingos-rgb.png"></div>`;
const logoM = ` <div class="logoMemingos"> <img id="mLogo" width="50px" src="https://i.ibb.co/WDbX8yw/logo-m-new-rgb.png"></div>`;
const renderSignIn = () => {
    const signInForm = `
    <div class="has-text-centered has-text-white title is-4">
        <h4> Bienvenido(a) </h4>
    </div>
    <div>
        <div class="field">
            <div class= "file is-small file is-centered"> 
                <p class="control has-icons-left has-icons-right">
                    <input id="logEmail" class="input is-rounded " type="email" placeholder="Email">
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
                <td> ¿No tienes cuenta? </td> <a id="singUpLink"> Regístrate </a>
            </div>`;
        root.innerHTML = `${logo}${signInForm}`;
};
document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'logIn') {
        database.signIn();
    }
});
const renderSignUp = () => {
    const signUpForm = `
     
        <div class="has-text-centered has-text-white title is-4 ">
            <h4> Bienvenido(a) </h4>
        </div>
    <div>
        <div class="field file is-small file is-centered ">
            <p class="control has-icons-left has-icons-right ">
                <input id="regEmail" class="input is-rounded " type="email" placeholder="Email">
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
                <input id="regPassword" class="input is-rounded" type="password" placeholder="Password">
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
            <td> ¿Ya tienes cuenta? </td> <a id="singInLink"> Inicia sesión </a>
        </div>
         `;

    root.innerHTML = `${logo}${signUpForm}`;
};
document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'register') {
        database.signUp();
    } 
 });
 document.addEventListener('click',function(event) {
    const item = event.target.closest('a');
   if (item && item.id === 'facebookSignIn') {
       database.signInFacebook();
   } 
});
document.addEventListener('click',function(event) {
    const item = event.target.closest('a');
   if (item && item.id === 'googleSignIn') {
       database.signInGoogle();
   } 
});
document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'singInLink') {
        renderSignIn();
    }
});
document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'singUpLink') {
        renderSignUp();
    }
});
renderSignUp();

export const renderFirstProfile = () => {
    root.classList.remove("signUpAndIn");
    const firstProfile = `

    <div class="file is-centered is-rounded">
    <img width="100" id="pp"/>
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
            <div class="control">
                <div class="has-text-centered has-text-black title is-6">
                    <h3> Información </h3>
                </div>
                <div class="has-text-centered has-text-black title is-6">                  
                    <input id="profileName" class="input is-rounded" type="text" placeholder="Nombre">      
                </div>
                <div class="has-text-centered has-text-black title is-6">
                <input id="userName" class="input is-rounded" type="text" placeholder="Usuario">            
                </div>
                <div class="field">
                    <div class="control">
                         <textarea id="biography" class="textarea is-small" placeholder="Acerca de mi"></textarea>
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
                <button id="logout" class=" button is-success button is-medium  has-background-warning is-rounded">
                    Cerrar Sesion
                </button> 
                </p>
            </div>
        </div>
        `;
        root.innerHTML = `${logoM}${firstProfile}`;

    database.getProfilePic()
    .then(data=>{
        console.log(data)
document.querySelector('#pp').src=data.url
    })
    
    document.querySelector('#profilePicture').addEventListener('change',function(event) {
           database.uploadPicture(event.target.files[0]);
    });
};

    /*const formCommit = () => {
        const formPic = document.querySelector('profilePicture').value;
        const formUser = document.querySelector('userName').value;
        if (formPic && formUser) {
            console.log('yes image,yes form');
        } else if (!formPic && formUser) {
            console.log('No image,yes form');
        } else if (formPic && !formUser) {
            console.log('yes image,no form');
        } else if (!formPic && !formUser) {
            console.log('no image,no form');
        }
    };*/

document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'confirm') {
        database.saveData();
        //formCommit();
    }
});

document.addEventListener('click',function(event) {
    if (event.target && event.target.id === 'logout') {
        database.logout();
    }
});
const renderFeed = () => {
    root.classList.remove("signUpAndIn");
    root.classList.remove("renderFirstProfile");
    const feed = `
    <div class="navbar is-inline-flex is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="https://ibb.co/Gsk8bhg" width="112" height="28">
            </a>
        </div>
        <div class="navbar-item is-flex-touch">
            <a class="navbar-item">
                <i class="material-icons"> Home </i>
            </a>
            <a class="navbar-item">
                <i class="material-icons"> Agregar </i>
            </a>
            <a class="navbar-item">
                <i class="material-icons"> Profile </i>
            </a>
        </div>
    </div>
    <div class="columns body-columns">
    <div class="column is-half is-offset-one-quarter">
        <div class="card">
            <div class="header">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://ibb.co/hfbXZQH" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"> Pipo Rodríguez </p>
                        <p class="subtitle is-6">@Pipopistolas</p>
                    </div>
                </div>
            </div>
    ` 
}