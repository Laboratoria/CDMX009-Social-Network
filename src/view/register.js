export default () => {
  const viewRegistre = `
  <div class=header>
  <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png">
  <h4>Registrate para interactuar</br>con la comunidad escolar.</h4>
  <div class="form">
  <input type="text" placeholder="Nombre completo">
  <input type="email" placeholder="Correo electronico">
  <input type="password" placeholder="Contraseña">
  <input type="password" placeholder="Confirmar contraseña">
  </div>
  <div>
  <button>Registrate
  </div>
  <p>Al registrarte aceptas nuestros terminos y condiciones</p>
      `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewRegistre;

  return divElement;
}

