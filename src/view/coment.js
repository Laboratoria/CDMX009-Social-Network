function buildComent(imageUser, nameUser, img, text, id) {
    return `<div>
    <div class="informationBox">

        <div class="chip boxStyle">
            <img src="${imageUser}" alt="Contact Person">
            <p>${nameUser}</p>
        </div>
        <i class="fas fa-globe-americas world"></i>
        <i class="material-icons center points actionsComment" data-id="${id}">more_vert</i>
    </div>

    <div class="comentsAndLikes">
    <img width="200" src="${img}"/>
         <p class="coments">${text}</p>
    </div>

    <div class="punchButtons comentsAndLikes">
         <div class="likeButton"> <a class="waves-effect waves-light btn-small"><i class="material-icons left like">thumb_up</i></a>
        <span class="likeCounter">5</span>
    </div>
    <div class="commentButton"><a class="waves-effect waves-light btn-small"><i class="material-icons left like">mode_comment</i></a>
        <span class="commentCounter">2</span>
    </div>
     </div>
</div>`
}

export { buildComent }