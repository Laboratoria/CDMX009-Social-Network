import { loginGoogle, loginFB, loginUserEmail } from '../firebase.js';

export default () => {
    const root = document.getElementById('root')
    const viewLogin = `
    <div class="mainConteinerLogin">
    <img src="img/portada.jpg" alt="" class="imageLogin">
    <input type="text" name="e-mail" id="e-mail" placeholder="Correo">
    <input type="password" name="password" id="password" placeholder="Contraseña">
    <button id="btnLogin" class="btnLogin">Entrar</button>
    <p class="txt">O ingresa con tu cuenta de</p>
    <div>
    <button id="btnGmail"class="btnRedes"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEy%0D%0AIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFj%0D%0AZT0icHJlc2VydmUiPg0KPHJlY3QgeD0iNjQiIHk9IjY0IiBzdHlsZT0iZmlsbDojRUNFRkYxOyIg%0D%0Ad2lkdGg9IjM4NCIgaGVpZ2h0PSIzODQiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDRkQ4REM7%0D%0AIiBwb2ludHM9IjI1NiwyOTYuMzg0IDQ0OCw0NDggNDQ4LDE0OC42NzIgIi8+DQo8cGF0aCBzdHls%0D%0AZT0iZmlsbDojRjQ0MzM2OyIgZD0iTTQ2NCw2NGgtMTZMMjU2LDIxNS42MTZMNjQsNjRINDhDMjEu%0D%0ANTA0LDY0LDAsODUuNTA0LDAsMTEydjI4OGMwLDI2LjQ5NiwyMS41MDQsNDgsNDgsNDhoMTZWMTQ4%0D%0ALjY3Mg0KCWwxOTIsMTQ3LjY4TDQ0OCwxNDguNjRWNDQ4aDE2YzI2LjQ5NiwwLDQ4LTIxLjUwNCw0%0D%0AOC00OFYxMTJDNTEyLDg1LjUwNCw0OTAuNDk2LDY0LDQ2NCw2NHoiLz4NCjxnPg0KPC9nPg0KPGc+%0D%0ADQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0K%0D%0APC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwv%0D%0AZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="" class="btnRedes"></button>
    <button id="btnFB"class="btnRedes"><img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/facebook.png" alt="" class="btnRedes"></button>
    </div>
    <p class="txt">¿No tienes una cuenta?</p>
    <a href="#/SignUp">Regístrate</a>
    </div>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewLogin;
    root.appendChild(divElement)

    // function Log in Google, fb and e-mail
    
    const btnLogin = document.querySelector('#btnLogin')
          btnLogin.addEventListener('click', loginUserEmail)

    const btnGmail = document.querySelector('#btnGmail')
          btnGmail.addEventListener('click', loginGoogle)

    const btnFB = document.querySelector('#btnFB')
          btnFB.addEventListener('click', loginFB)
return divElement;
}
