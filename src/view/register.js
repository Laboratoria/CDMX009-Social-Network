function viewRegister() {
    return new Promise(function(resolve, rejected) {
        let registerView = `
    <div id="containerTwo">
        <main>
            <div class="loginRequired">
                <p class="description">Por favor llena los siguientes campos <br>Obligatorio *</p>
            </div>

            <div class="iconUsers">
                <i class="material-icons medium lines">remove</i>
                <i class="material-icons star">stars</i>
                <i class="material-icons medium lines">remove</i>
            </div>

            <form action="" class="form">
                <label for="" class="fieldUser">
                    <input id="registerLoginName2" type="text" class="validate user boxFields" required="" aria-required="true" placeholder="Nombre Completo">
                </label>
                <label for="">
                    <input id="registerLoginEmail2" type="email" class="validate user boxFields" required="" aria-required="true" placeholder="Email">
                </label>
                <label for="" class="fieldPassword">
                    <input id="registerLoginPass2" type="password" placeholder="Contraseña" class="validate user password boxFields" required="" aria-required="true">
                </label>
                <label for="" class="fieldPassword ">
                    <input id="registerLoginConfirmPass2" type="password" placeholder="Confirma Contraseña" class="validate user password confP2 boxFields" required="" aria-required="true">
                </label>
                <button type="submit" class="waves-effect waves-light btn-small btn-enter" id="doRegister">Registrar</button>
            </form>

            <div class="descriptionP2">
                <p>Sé parte de nuestra comunidad y fortalece tus ideas y conocimientos.</p>
            </div>
        </main>
    </div>
    `
        root.innerHTML = registerView;
        resolve();
    });
};

export { viewRegister }