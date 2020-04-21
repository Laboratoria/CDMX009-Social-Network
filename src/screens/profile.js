// imagen usuario
// nickname
// breve descripcion de lo que quiero aprender
// breve descripcion de lo que quiero enseñar

//Declaración de variables
let addBtn = document.querySelector("#botonPost");
let text = document.querySelector("#textPost");
let fileInput = document.querySelector("#file");
let root = document.querySelector('#root')

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
        date: new Date(),
        img: "url"
    }

    addNewPost(post)
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
    snap.forEach(doc => {
        let div = `<div>
<img src="${doc.data().img}"/>
<p>${doc.data().body}</p> 
</div>`

        root.innerHTML = div
        document.body.appendChild(root)
    })
})

export default addNewPost