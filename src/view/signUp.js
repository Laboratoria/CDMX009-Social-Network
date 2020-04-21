export default () => {
    const root = document.getElementById('root')
    const viewSignUp = `
    <div class=header>
    <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png">
    <h4>Regístrate para interactuar</br>con la comunidad escolar</h4>
    <form id="signup-form">
    <div class="form">
    <input type="text" id="signup-name" placeholder="Nombre completo">
    <input type="email" id="signup-email"placeholder="Correo electrónico">
    <input type="password" id="signup-password" placeholder="Contraseña">
    <input type="password" id="signup-confirm" placeholder="Confirmar contraseña">
    <button class="sign-btn">Regístrate</button>
    <p class="terms">Al registrarte aceptas nuestros <br><a href="#">términos y condiciones</a></p>
    </div>
    </form>
    </div>
        `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewSignUp;
    root.appendChild(divElement)

    //function signup

  const signupform = document.querySelector('#signup-form');
    signupform.addEventListener('submit', (e) => {
      e.preventDefault();

    const email= signupform['signup-email'].value;
const password= signupform['signup-password'].value;
const name= signupform['signup-name'].value;
const confirm= signupform['signup-confirm'].value;

console.log(email,password, name, confirm)

    return divElement;
    
    })
}
  


