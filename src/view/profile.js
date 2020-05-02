function viewProfile(user) {
    console.log(user);
    let EmailCortado = 'No hay email';

    if (typeof user != 'undefined') {
        let email = user.email;
        let divisiones = email.split("@");
        EmailCortado = divisiones[0];
    }

    let image = "images/profile-picture-green.jpg";
    if (user.photoURL != null) {
        image = user.photoURL;
    }
    return new Promise(function(resolve, rejected) {
        let profileView = `
       <!-- ***********PAGINA profile********* -->
<div id="profilepage"> 
      <section class="profileInformation">
        <div>
            <div class="littleCircle">
                <img src="${image}" alt="foto de perfil usuario" class="responsive-img photo">
            </div>

            <div class="personalInformationPerfilUser">
                <div class="namePerfilUser"><strong class="black-text perfilName little">${EmailCortado}<i class="material-icons center editProfileIcon">edit</i></strong></div>
                <div class="professionDescription">Profesión</div>
            </div>
        </div>
    </section>
    <form>
        <p>
            <textarea class="comentUser" name="description" placeholder="Escribe un commit..."></textarea>
        </p>
        <div class="right-align">
            <input id="myNewFile" type="file" name="myNewFile" accept="image" class="publication">
            <label class="waves-effect waves-light btn-small" for="myNewFile"> <i class="material-icons center">image</i></label>
            <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Publicar</button>
        </div>
    </form>
    <div>
        <div class="informationBox">
            <div class="chip boxStyle">
                <img src="${image}" alt="Contact Person">
                <p>${EmailCortado}</p>
            </div>
            <i class="fas fa-globe-americas world"></i>
            <i class="material-icons center points">more_vert</i>
        </div>

        <div class="comentsAndLikes">
            <p class="coments">¿Cómo centrar texto en HTML?</p>
        </div>
        <div class="punchButtons comentsAndLikes">
            <div class="likeButton">
                <a class="waves-effect waves-light btn-small"><i class="material-icons left like">thumb_up</i></a>
                <span class="likeCounter">5</span>
            </div>
            <div class="commentButton">
                <a class="waves-effect waves-light btn-small"><i class="material-icons left like">mode_comment</i></a>
                <span class="commentCounter">2</span>
            </div>
        </div>
    </div>
    <form>
        <p>
            <textarea class="comentUser" name="description" rows="5" cols="10" placeholder="Comentar..."></textarea>
        </p>
        <div class="right-align">
                <input id="myNewFile" type="file" name="myNewFile" accept="image" class="publication">
                <label class="waves-effect waves-light btn-small" for="myNewFile"> <i class="material-icons center">image</i></label>
            <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Comentar</button>
        </div>
    </form>
    <div> 
    `
        root.innerHTML = profileView;
        resolve();
    });
};

export { viewProfile }