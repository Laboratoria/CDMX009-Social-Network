import { registerUser } from '../firebase.js';

export default () => {
    const viewSignUp = `
    <div class=header>
    <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png">
    <h4>Regístrate para interactuar</br>con la comunidad escolar</h4>
    <form id="signup-form">
    <div class="form">
    <input id="names" type="text" placeholder="Nombre completo">
    <input id="email" type="email" placeholder="Correo electrónico">
    <input id="password" type="password" placeholder="Contraseña">
    <input id="verifyPass" type="password" placeholder="Confirmar contraseña">
    <button class="sign-btn">Regístrate</button>
    <p class="terms">Al registrarte aceptas nuestros <br><a href="#">términos y condiciones</a></p>
    </div>
    </form>
    </div>
        `

    const divElement = document.createElement('div');
    divElement.innerHTML = viewSignUp;
    root.appendChild(divElement)
    const btnRegistro = document.querySelector('.sign-btn');
    btnRegistro.addEventListener('click', registerUser);


    return divElement;
}
