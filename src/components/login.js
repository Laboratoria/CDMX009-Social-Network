let root =  document.querySelector('#root');

const login =  `
 <div class="container">
    <div class="imgportada">
      <img class="imagen" src="/img/portada.jpg">
    </div>
       <div class= "contenido">
         <p class="estilobienvenida"> Bienvenida a nuestra comunidad  
         de programadoras </p>
         
          <div class ="inputslogin">
             <input type="text" id="email" class="email"placeholder="example@gmail.com">
             <input type="text" id="password" class="password" placeholder="Password">
             <input type="button" value="Ingresar" id="ingresa" class="ingresa">
          </div>
          <p class="pas">Olvide mi contraseña</p>
              <input type="image" src="/img/F.jpg" class="logoF">
              <input type="image" src="/img/G.jpg" class="logoG"> 
          <p class="sincuenta">¿No tienes cuenta?</p>
          <p class="re" id="registro">Registrate</p>
          </div>
       <footer>
         <p class="dr">Developed © 2020 CW, Inc.</p>
       </footer> 
  </div>
    `;

root.innerHTML = login;
