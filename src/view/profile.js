function viewProfile() {
    return new Promise(function(resolve, rejected) {
        let profileView = `
       <!-- ***********PAGINA profile********* -->
<div id="profilepage"> 
      <section class="profileInformation">
        <div>
            <div class="littleCircle">
                <img src="images/foto_perfil_circulo.png" alt="foto de perfil usuario" class="responsive-img photo">
            </div>

            <div class="personalInformationPerfilUser">
                <div class="namePerfilUser"><strong class="black-text perfilName little">Taco López<i class="material-icons center editProfileIcon">edit</i></strong></div>
                <div class="professionDescription">Developer Sr. en Accenture</div>
            </div>
        </div>
    </section>
    <form>
        <p>
            <textarea class="comentUser" name="description" placeholder="Escribe un commit..."></textarea>
        </p>
        <div class="right-align">
            <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
            <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Publicar</button>
        </div>
    </form>
    <div>
        <div class="informationBox">

            <div class="chip boxStyle">
                <img src="images/foto_perfil_circulo.png" alt="Contact Person">
                <p>Taco Perez</p>
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
            <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
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