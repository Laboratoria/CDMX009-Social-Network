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

    //
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
            })
    }

    addBtn.onclick = event => {
        //traer el texto 
        let post = {
            body: text.value,
            user: "Natalia Olmos",
            date: Date.now(),
            img: "url"
        }

        addNewPost(post)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(res)
    }

    let db = firebase.firestore()
    let postsRef = db.collection("posts")

    function addNewPost(post = { img: img, user: "Natalia Olmos", body: "hola k ase", date: Date.now() }) {
        return postsRef.add(post) //Esta es la promesa
    }

    postsRef.onSnapshot(snap => {
        snap.forEach(doc => {
            let div = `<div><p>${doc.data().img}</p> 
 </div>`
            let nodo = document.createElement("div")
            nodo.innerHTML = div
            document.body.appendChild(nodo)
        })
    })

    db.collection("posts").onSnapshot((querySnapshot) => {
        div.innerHTML = ""
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(`${doc.id} => , ${doc.data()}, ${doc.data().body}, ${doc.data().user},${doc.data().date}`);
            div.innerHTML += `<div>
    <p>${doc.data().body}</p> 
    <p>${doc.data().user}</p>
    <p>${doc.data().date}</p> 
    <p>${doc.data().img}</p>
    <p><button id="eliminar('${doc.id}')">Borrar</button></p>
    <p><button onclick="update('${doc.data().body}')">Editar</button></p>
    <input type="button" id="like" value="Me gusta" onclick="javascript: contador()"/> 
    </div>`

            //BORRAR DATOS
            function eliminar(id) {
                db.collection("posts").doc(id).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                })
                document.getElementById('eliminar').addEventListener('click', eliminar);
            }

            function update() {
                db.collection("posts").doc().update().then(function() {
                    console.log("Document successfully edited!")
                }).catch(function(error) {
                    console.error("Error editing document: ", error)
                })
            }

            {
                var i = 0;
            }

            function contador() {
                i = i + 1;
                var btnLike = document.getElementById("like");
                btnLike.value = "Me gusta (" + i + ")";
            }

        })
    })
}

export default renderPost