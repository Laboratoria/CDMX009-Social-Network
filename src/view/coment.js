function buildComent(imageUser, nameUser, img, text, id) {
    return `
<div>
    <div class="informationBox">
        <div class="chip boxStyle">
            <img src="${imageUser}" alt="Contact Person">
            <p>${nameUser}</p>
        </div>

        <i class="fas fa-globe-americas world"></i>     

    <div class="fixed-action-btn align">
 
   <i class="material-icons center points actionsComment">more_vert</i>
  
    <ul>
        <li class="editPostUser"><a class="btn-floating  purple darken-1"><i data-id="${id}" class="material-icons">edit</i></a></li>
        <li  class="deletePostUser" data-id="${id}"><a class="btn-floating  purple darken-1" ><i data-id="${id}" class="material-icons">delete</i></a></li>
    </ul>
    </div>
    </div>

    <div class="comentsAndLikes">
        <img width="200" src="${img}"/>
        <p class="coments">${text}</p>

        <textarea class="editTextPostUser-${id} onBox" name="description" placeholder="Escribe un commit...">${text}</textarea>
         
        <div class="publicationedit-${id} onBox">
            <input id="newEditPost-${id}" type="file" class="hideFile" name="newEditPost-${id}" accept="image">
            <label class="waves-effect waves-light btn-small" for="newEditPost-${id}"> <i class="material-icons center">image</i></label>
            <button id="newPostPublish-${id}" class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2" > <i class="material-icons">check_box</i></button>
         </div>
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
};

export { buildComent }