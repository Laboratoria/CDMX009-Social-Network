
export function editPost(e) {
    console.log(e.target)
    let id = e.target.getAttribute('data-id')
    console.log("id del post:", id)
    let titleP = document.querySelector(`#${id}-title`)
    let textP = document.querySelector(`#${id}-text`)
    titleP.style = "display:none"
    textP.style = "display:none"
    let inputTitle = document.createElement('input')
    let inputText = document.createElement("input")
    titleP.after(inputTitle)
    textP.after(inputText)
    inputTitle.value = titleP.innerText
    inputText.value = textP.innerText
    let btnSave = document.querySelector(`#${id}-save`)
    btnSave.addEventListener("click", savePost)
    btnSave.style = "display: block"

    function savePost(e) {
        alert("prueba del botón guardar")
        inputTitle.style = "display:none"
        inputText.style = "display:none"
        let id = e.target.getAttribute('data-id')
        console.log("id del post en el btnSave:", id)
        let newTitle = inputTitle.value
        let newText = inputText.value
        console.log("newTitle:", newTitle)
        console.log("newText", newText)
        btnSave.style = "display:none"
        // const title = { title: newTitle }
        // const text = { text: newText }
        console.log("este es el objeto post:", post)
        updatePost(newTitle, newText)
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.log("No se pudieron guardar los cambios al post", err)
        // })
    }

    function updatePost(newTitle, newText) {
        firebase.firestore().collection('postsList').doc(id).update({
            title: newTitle,
            text: newText
        });
        // firebase.firestore().collection('postsList').doc(id).update({
        //     title: newTitle
        // });
    }


}


export function clean(node) {
    node.innerHTML = '';
}


export function deletePost(e) {
    let id = e.target.getAttribute('data-id')
    alert("prueba de borrar");
    firebase.firestore().collection('postsList').doc(id).delete();

}



//let resultLikes = document.querySelectorAll('.resultCounter')
//let listResultLikes = resultLikes[resultLikes.length - 1]
let countLikes = 0
export function counter() {
    let user = firebase.auth().currentUser;

    console.log(user.displayName);
    let whoLike = user.displayName

    let idPost = btnClick.getAttribute('dataid')
    console.log(idPost);
    countLikes = countLikes + 1
    console.log(countLikes);

    const docPost = firebase.firestore().collection("postsList").doc(idPost)
    docPost.get().then(docPost => {
        let whosLikePost = docPost.data().whoLike
        console.log(whosLikePost);
        /* console.log(whosLikePost.includes(whoLike));
        let checkUser = whosLikePost.includes(whoLike) */
        if (whosLikePost === undefined) {
            saveLikes(countLikes, idPost, whoLike)
            btnClick.classList.add('colorLike')

        } if (whosLikePost != undefined) {
            console.log(whosLikePost.includes(whoLike));
            let checkUser = whosLikePost.includes(whoLike)
            if (checkUser === false) {
                saveLikes(countLikes, idPost, whoLike)
                btnClick.classList.add('colorLike')
            }

        }
    });
}


function saveLikes(countLikes, idPost, whoLike) {
    const docPost = firebase.firestore().collection("postsList").doc(idPost)
    docPost.update({
        likes: firebase.firestore.FieldValue.increment(countLikes),
        whoLike: [whoLike]
    })
}

