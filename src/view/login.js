function viewLogin() {
    return new Promise(function(resolve, rejected) {
        let homeView = `
          <div id="containerOne">
        <section id="esther">
            <main>
                <div class="description">
                    <p class="intro">Una red social pensada para los que hacemos Desarrollo Web</p>
                </div>

                <div class="iconUsers">
                    <i class="material-icons medium lines">remove</i>
                    <i class="material-icons star">stars</i>
                    <i class="material-icons medium lines">remove</i>
                </div>

                <form action="" class="form">
                    <label for="" class="fieldUser">
                    <input type="email" class="validate user boxEmail" required="" aria-required="true"
                        placeholder="Usuario" id="email">
                </label>
                    <label for="" class="fieldPassword">
                    <input type="password" placeholder="Contraseña" class="validate user password boxPassword" required=""
                        aria-required="true" id="pass">
                </label>
                    <button id="doLogin" type="submit" class="waves-effect waves-light btn-small btn-login">Login</button>
                    <!-- <button id="doLogin">Enviar</button> -->
                </form>

                <div class="register">
                    <p class="account">No tienes cuenta? <a href="#register2" class="register2" id="reg">Registrate</a> </p>
                </div>

                <div>
                    <p class="description">Sé parte de nuestra comunidad y fortalece tus ideas y conocimientos.</p>
                </div>

                <div class="loginSocialNetwork">
                    <p class="choose">¿Si no tienes una cuenta? <br>Ingresa con:</p>
                    <a class="waves-effect waves-light btn center iconWeb1" id="loginFacebook"><i class="fab fa-facebook"></i>Facebook</a>
                    <!-- <button id="LoginFacebook">Ingresa con Facebook</button> -->
                    <a class="waves-effect waves-light btn center iconWeb2" id="loginGoogle"><i class="fab fa-google"></i>Google</a>
                    <!-- <button id="LoginGoogle">Ingresa con Google</button> -->
                </div>
            </main>
        </section>
    </div>
    `
        root.innerHTML = homeView;
        resolve();
    });
};

export { viewLogin }