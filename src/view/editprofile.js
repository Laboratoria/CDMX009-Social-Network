function editionOfProfile(user) {
    
    let emailCortado = 'No email';

    if (typeof user != 'undefined') {
        let email = user.email;
        let divisiones = email.split("@");
        emailCortado = divisiones[0];
    };

    let image = "images/profile-picture-green.jpg";
    if (user.photoURL != null) {
        image = user.photoURL;
    };
    let name = user.displayName ? user.displayName : emailCortado;

    return new Promise(function(resolve, rejected) {
        let editProfileVieView = ` 
    <div id="containerFour">
        <div>
            <p class="chip boxStyle2">Editar Perfil</p>
        </div>

        <div class="littleCircle secondCircle">
            <img src="${image}" alt="foto de perfil usuario" id="userPhoto" class="responsive-img photo">
            <p class="changePhoto">Cambiar foto</p>
        </div>

        <div class="selectProfilePicture">
            <input id="newProfilePhoto" type="file" name="newProfilePhoto" accept="image" class="publication pencilEdit">
                <label class="waves-effect waves-light btn-small" for="newProfilePhoto">
                    <i class="material-icons center pencil">edit</i>
                </label>
       </div>

       <div class="namePerfilUser editNameProfile"><strong class="black-text perfilName little">${name}</div> 
       <div action="" class="formPerfil">
            <label for="" class="perfilChanges">
                <input id="changeName" value="${name}" type="text" class="chageName boxFields" required="" aria-required="true" placeholder="Cambia tu nombre">
            </label>

            <label for="" class="perfilChanges">
                <input id="changeProfession" type="text" class="chageProfession boxFields" required="" aria-required="true" placeholder="Cambia tu profesión">
            </label>

            <label for="" class="changePassword">
                <input type="password" placeholder="Cambia tu contraseña" class="validatePassword boxFields" required="" aria-required="true">
            </label>

            <label for="" class="changePassword">
                <input type="password" placeholder="Confirma tu contraseña" class="validatePassword  boxFields" required="" aria-required="true">
            </label>

           <button id="saveChangesButton" type="submit" class="waves-effect waves-light btn-small btn-login">Guardar cambios</button>
       </div>
   </div>
   <div id="ProfileNewInformation"></div>`
   
        root.innerHTML = editProfileVieView;
        resolve();
    });
};

export { editionOfProfile }