export const example = () => {
    // aquí tu código
}

// DOM
let addBtn = document.querySelector('#addBtn')
let text = document.querySelector('#body')
let fileInput = document.querySelector('#file')

//globas
let url;

//listeners
fileInput.onchange = e => {
    let file = e.target.files[0]
    firebase.storage().ref("memes").child(file.name).put(file)
        .then(snap => {
            console.log(snap.ref.getDownloadURL())
        })
        .then(link => {
            url= link;
            let img= document.createElement('img');
            img.src= url;
            document.body.appendChild(img);
        })
}

addBtn.onclick = event => {
    // traer el texto
    let post = {
        body: text.value,
        user: "BlisS",
        date: new Date(),
        img: url
    }
    // QUE PEDO CON LAS PROMESAS [ASINCRONO] let  =

    addNewPost(post)
        // ESto es asíncrono
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log("todo valió baby: ", err)
        })
}

// firebase

let db = firebase.firestore() // YOLO
let postsRef = db.collection('posts')

function addNewPost(post = { user: "bliss", body: "tengo hambre", date: Date.now() }) {
    return postsRef.add(post) // <----- Esto essss una PROMESA
}


// 
postsRef.onSnapshot(snap => {
    let p = document.querySelector('#posts')
    p.innerHTML = ''
    snap.forEach(doc => {
        let div = `<div>
            <img width="200" src="${doc.data().img}" />
            <p>${doc.data().body}</p>
        </div>`
        let nodo = document.createElement('div')
        nodo.innerHTML = div
        p.appendChild(nodo)

    })
})