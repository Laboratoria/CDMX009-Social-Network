function showComments() {
    let areTherePosts;
    let postId = this.id.slice(8)
    document.getElementById("comments-section-"+postId).innerHTML = "";
    firebase.database().ref("/posts/"+postId+"/comments/").once("value", function(snapshot){
        if (snapshot.val() == null) {
            areTherePosts = false
            return;
        }
        for (let comment in snapshot.val()) {
            document.getElementById("comments-section-"+postId).innerHTML += `
            
            <div class="comment-header">
            <span><img src="${snapshot.val()[comment].authorPic ? snapshot.val()[comment].authorPic : './img/userLogo.png'}" class="user-pic-post" alt="userPic"><p>${snapshot.val()[comment].author} ${snapshot.val()[comment].especialidad ? "- "+snapshot.val()[comment].especialidad : ""}</p></span>       
            </div>
            <div class="comment-content">
                <textarea disabled id="comentUser${snapshot.val()[comment].postId}/comments/${comment}" class="coment_user">${snapshot.val()[comment].content}</textarea>
                <div>
                    <div id= "buttonConfirmComment${snapshot.val()[comment].postId}/comments/${comment}"  class= "button_confirm_edit" >
                    <a id="confirm-change${snapshot.val()[comment].postId}/comments/${comment}" class="change-comment" >Actualizar</a>
                    <a id="cancel-change${snapshot.val()[comment].postId}/comments/${comment}" class="cancel_change">Cancelar</a>
                    </div>
                <a id="edit-comment-${snapshot.val()[comment].postId}/comments/${comment}" class="edit-comment" >Editar</a>
                <a id="delete-comment-${snapshot.val()[comment].postId}/comments/${comment}" class="remove-comment">Eliminar</a>
                </div>
            </div> 
            
            `

            let deleteComment = document.getElementsByClassName("remove-comment");
            for (let i = 0; i < deleteComment.length; i++){
                deleteComment[i].addEventListener("click", removeComment)
            }

            let editComment = document.getElementsByClassName("edit-comment");
            for (let i = 0; i < editComment.length; i++){
                editComment[i].addEventListener("click", edit_comment)
            }

            let confirmChangeComment= document.getElementsByClassName("change-comment")
            for (let i = 0; i < confirmChangeComment.length; i++){
                confirmChangeComment[i].addEventListener("click", confirm_change_comment)
            }

            let cancelChangeComment=document.getElementsByClassName("cancel_change")
            for (let i= 0; i < cancelChangeComment.length; i++){
                cancelChangeComment[i].addEventListener("click", cancel_change_comment)
            }
        
        }
    })
    if(areTherePosts === false) {
        return;
    }
    if (document.getElementById("comments-section-"+postId).style.display === "none") {
        document.getElementById("comments-section-"+postId).style.display = "block";
        return
    }
    if (document.getElementById("comments-section-"+postId).style.display === "block") {
        document.getElementById("comments-section-"+postId).style.display = "none";
        return
    }
}

function createComment() {
    const postId = this.id.slice(15)
    const userId = firebase.auth().currentUser.uid;
    if (document.getElementById("text-"+postId) === null) {
        document.getElementById("create-comments-section-"+postId).innerHTML = `
        <div class="create-comments-section">
        <textarea id="text-${postId}" class="comment-input" placeholder="Ingrese su comentario.."></textarea>
        <button id="btn${postId}" type="button" class="comment-btn">Publicar</button>
        </div>
        
        `
        document.getElementById(`btn${postId}`).addEventListener("click", ()=> {
            const post_text = document.getElementById(`text-${postId}`).value;
            submitComment(userId, post_text, postId)
        })
        
    } else {
        document.getElementById("create-comments-section-"+postId).innerHTML = "";
    }
}






//Function delete post

function removePost() {
    let  shortenId= this.id.slice(7)

    let commentsRef = firebase.database().ref("posts/"+shortenId);
    let commentsRef2 = firebase.database().ref("users/"+firebase.auth().currentUser.uid+"/posts/"+shortenId);
    let option = confirm("Confirma si quieres eliminar el post")
    
    if (option == true) {
        commentsRef.remove();
        commentsRef2.remove();
	} else {
        return  
    
    }
}

//Function delete comments

function removeComment() {
    let shortenId2=this.id.slice(15)
    // console.log(shortenId2)
    let commentRef3= firebase.database().ref("posts/"+shortenId2);
    let optionConfirmRemove = confirm ("Confirma si quieres eliminar el comentario")
    if (optionConfirmRemove == true){
        commentRef3.remove();
    } else {
        return 
    }
    
}

//function to enable textarea of the post

function enableTextarea () {
    let shortenId3=this.id.slice(5) //id del boton editar
    document.getElementById("post-user"+shortenId3).disabled=false
    // document.getElementById("post-user"+shortenId3).contenteditable=true
    document.getElementById("button-option"+shortenId3).style.display= "block";
    document.getElementById("post-user"+shortenId3).focus();    
    }           
    

//function to confirm post update

function confirm_edit() {
    let shortenId4=this.id.slice(10)
    let routeContent= document.getElementById("post-user"+shortenId4).value;
    firebase.database().ref("posts/"+shortenId4).update({
        content: routeContent
    })

}

//function to cancel edit post

function cancel_editPost(){
    let cancelId=this.id.slice(12)
    document.getElementById("post-user"+cancelId).disabled = true;
    document.getElementById("button-option"+cancelId).style.display= "none";
}


//function to enable textarea of comments

function edit_comment() {
    let editCommentUser=this.id.slice(13)
    document.getElementById("comentUser"+editCommentUser).disabled=false;
    document.getElementById("comentUser"+editCommentUser).focus();
    document.getElementById("buttonConfirmComment"+editCommentUser).style.display= "block";

}


// comment editing function
function confirm_change_comment() {
    let confirm_change = this.id.slice(14) //id button, update
    let routeContentComment = document.getElementById("comentUser"+confirm_change).value;
    firebase.database().ref("posts/"+confirm_change).update({
        content: routeContentComment
    })
}

//function to cancel edit comments

function cancel_change_comment(){
    let cancelIdComment = this.id.slice(13)
    document.getElementById("comentUser"+cancelIdComment).disabled = true;   
    document.getElementById("buttonConfirmComment"+cancelIdComment).style.display= "none"
}