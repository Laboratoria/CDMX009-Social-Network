import database from './database.js';

const root = document.querySelector('#root');
const logo = `<img width="200px" class="mainLogo" src="https://i.ibb.co/sFBwWCc/memingos-rgb.png">`

const renderLogin = () => {
    const loginForm = `
    <div class="field">
        <div class= "file is-small file is-centered"> 
            <p class="control">
              <input id="email" class="input" type="email" placeholder="Email">
            </p>
        </div>
    </div>
    <div class="field">
        <div class="file is-small file is-centered">
        <p class="control">
            <input id="password" class="input" type="password" placeholder="Password">
        </p>
        </div>
    </div>
    <div class="field">
        <div class="file is-centered">
            <p class="control">
                <button id="register" class="button is-success button is-medium  has-background-warning">
                Registrarse
                </button>   
            </p>
       </div>
    </div>`;
    root.innerHTML = `${logo}${loginForm}`;
};
const register = document.querySelector('#register');
document.addEventListener('click',function(event){
    if(event.target && event.target.id== 'register'){
        database.signUp();
    }
});

renderLogin();