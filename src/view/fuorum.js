function viewForum(user) {
    console.log(user);

    var EmailCortado = 'No hay email';

    if (typeof user != 'undefined') {
        var email = user.email;
        var divisiones = email.split("@");
        EmailCortado = divisiones[0];
    }

    var image = "images/profile-picture-green.jpg";
    if (user.photoURL != null) {
        image = user.photoURL;
    }
    return new Promise(function(resolve, rejected) {
        let forumView = ` <!-- ***********PAGINA 3********* -->
    <div id="containerThree">
        <section class="profileInformation">
            <div>
                <div class="littleCircle">
                    <img src="${image}" alt="foto de perfil usuario" class="responsive-img photo">
                </div>

                <div class="personalInformationPerfilUser">
                    <div class="namePerfilUser"><strong class="black-text perfilName little">
                    ${EmailCortado}
                    <i class="material-icons center editProfileIcon">edit</i></strong></div>
                    <div class="professionDescription">Profesión</div>
                </div>
            </div>
        </section>
        <div>
            <p>
                <textarea id="showComment" class="comentUser"  name="description" placeholder="Escribe un commit..."></textarea>
            </p>
            
            <div class="right-align">
                <input id="myNewFile" type="file" name="myNewFile" accept="image" class="publication">
                <label class="waves-effect waves-light btn-small" for="myNewFile"> <i class="material-icons center">image</i></label>
                <button id="publish" class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2" ><i class="material-icons right">computer</i>Publicar</button>
            </div>
        </div>
        <div>
            <div class="informationBox">

                <div class="chip boxStyle">
                    <img src="${image}" alt="Contact Person">
                    <p>usuario 1</p>
                </div>
                <i class="fas fa-globe-americas world"></i>
                <i class="material-icons center points">more_vert</i>
            </div>

            <div class="comentsAndLikes">
            <p id="comentsForum"></p>
                <div id="picturePerfect" class="stylePicturePerfect"></div>
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
         <div class="informationBox">

                <div class="chip boxStyle">
                    <img src="${image}" alt="Contact Person">
                    <p>usuario 2</p>
                </div>
                <i class="fas fa-globe-americas world"></i>
                <i class="material-icons center points">more_vert</i>
            </div>

            <div class="comentsAndLikes">
                <p class="coments">¿Comunidad, cómo le hago para enrutar con Javascript?</p>
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
    </div>`
        root.innerHTML = forumView;
        resolve();
    });
};

export { viewForum }