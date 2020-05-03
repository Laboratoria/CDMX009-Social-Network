
/*
let addBtn = document.querySelector('#myCommit')
let text = document.querySelector('#showComment')//variable con id en donde se pintaran los post, textArea 
let fileInput = document.querySelector('#file') //variable para la prueba de subir imagen

//global
let url // variable para que reciba el link(token) de la foto que esta en storage



//listeners

//funcion para subir archivo o archivos en el post
fileInput.onchange = e => {        
    let file = e.target.files[0]  
    firebase.storage().ref("memes").child(file.name).put(file)
        .then(snap => {   //¿Donde esta el archivo? En file.name
            return snap.ref.getDownloadURL() //conseguir el link de la imagen. Retornas la promesa y concatenas el otro then
        })
        .then(link => {
            url = link
            let img = document.createElement('img')
            img.src = link
            document.body.appendChild(img)
        })
}


//traer la informacion del post cuando se le da clic en el boton
addBtn.onclick = event => {
    // traer el texto
    let post = {
        body: text.value,
        user: "spiderman",
        date: new Date(),
        img: url //variable global, aqui se almacena la imagen cuando ya se tiene el link que envio la funcion onchange
    }
    //  [ASINCRONO] 

    addNewPost(post)
        // ESto es asíncrono
        .then(res => { //esto es la promesa
            console.log(res) //este es el resultado de la promesa
        })
        .catch(err => {
            console.log("todo valió baby: ", err) //esto es el error cuando la respuesta es negativa
        })
}

// firebase

let db = firebase.firestore() // YOLO
let postsRef = db.collection('posts')



//pasar a la funcion el objeto que se encuentra en la base de datos de firebase
function addMyNewPost(post = { user: "spiderman", texto: "mira que bonita foto", date: Date.now() }) { 
    return postsRef.add(post) // <--- esto es una promesa
}

// leer la coleccion de post
postsRef.onSnapshot(snap => {
    let p = document.querySelector('#posts')
    p.innerHTML = ''
    snap.forEach(doc => {
        let div = `<div>
            <img src="${doc.data().foto}" /> // doc.data xq ahi esta la data
            <p>${doc.data().texto}</p>
        </div>`
        let nodo = document.createElement('div')
        nodo.innerHTML = div
        p.appendChild(nodo)

    })
})

*/
