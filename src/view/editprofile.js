function editionOfProfile() {
    return new Promise(function(resolve, rejected) {
        let editProfileVieView = ` 
    <!-- *********** PAGINA 4 EDITAR PERFIL   *********** -->
    <div id="containerFour">
        <div>
            <p class="chip boxStyle2">Editar Perfil</p>
        </div>

        <div class="littleCircle secondCircle">
            <img src="images/foto_perfil_circulo.png" alt="foto de perfil usuario" class="responsive-img photo">
            <p class="changePhoto">Cambiar foto</p>
        </div>

        <form action="" class="formPerfil">
            <label for="" class="perfilChanges">
        <input type="text" class="chageName boxFields" required="" aria-required="true" placeholder="Cambia tu nombre">
      </label>
            <label for="" class="perfilChanges">
        <input type="text" class="chageProfession boxFields" required="" aria-required="true" placeholder="Cambia tu profesión">
      </label>
            <label for="" class="changePassword">
        <input type="password" placeholder="Cambia tu contraseña" class="validatePassword boxFields" required="" aria-required="true">
      </label>
            <label for="" class="changePassword">
        <input type="password" placeholder="Confirma tu contraseña" class="validatePassword  boxFields" required="" aria-required="true">
      </label>
            <button type="submit" class="waves-effect waves-light btn-small btn-login">Guardar cambios</button>
        </form>
    </div>
        `
        root.innerHTML = editProfileVieView;
        resolve();
    });
};

export { editionOfProfile }