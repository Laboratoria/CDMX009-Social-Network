let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

function renderPost() {
    let postView = `<div>
    <h3>Cuéntanos... qué quieres enseñar?: </h3>
    <input id="file" type="file" accept="image/*" multiple>
    <textarea id="textPost" id="" cols="30" rows="10"></textarea>
    <button id="botonPost" class="btn">Add Post</button>
    <div id="div"></div>
</div>`
    root.innerHTML = postView
    let addBtn = document.querySelector("#botonPost");
    let text = document.querySelector("#textPost");
    let fileInput = document.querySelector("#file");

    let url
    fileInput.onchange = e => {
        let file = e.target.files[0]
        firebase.storage().ref("imagenes").child(file.name).put(file)
            .then(snap => {
                return snap.ref.getDownloadURL()
            })
            .then(link => {
                url = link
                let img = document.createElement("img")
                img.src = link
                document.body.appendChild(img)
                console.log(link)
                addBtn.onclick = event => {
                    //traer el texto 
                    let postIt = {
                        body: text.value,
                        user: "Natalia Olmos",
                        date: new Date(),
                        img: url
                    }
                    addNewPost(postIt)
                        .then(result => {
                            console.log(result)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }



                let db = firebase.firestore()
                let postsRef = db.collection("posts")


                function addNewPost(post = { user: "Natalia Olmos", body: "probando firebase", date: Date.now() }) {
                    return postsRef.add(post) //Esta es la promesa
                }

                postsRef.onSnapshot(snap => {
                    let p = document.querySelector('#textPost')
                    p.innerHTML = ''
                    snap.forEach(doc => {
                        let div = `<div>
    <img src="${doc.data().img}"/>
    <p>${doc.data().body}</p> 
    </div>`
                        let nodo = document.createElement("div")
                        nodo.innerHTML = div
                        document.body.appendChild(nodo)
                    })
                })
            })
    }
}

export default renderPost