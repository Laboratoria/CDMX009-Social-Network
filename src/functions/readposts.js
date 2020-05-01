import { buildComent } from '../view/coment.js';

//leer coleccion de post
function readPosts() {
    var EmailCortado = 'No hay email';
    let postsRef = db.collection('pruebas_300420_Esther') //se llama post porque asi se llama nuestra coleccion en Database , le podemos llamar como queramos     
    postsRef.orderBy('date', 'desc').onSnapshot(snap => {
        let publishPust = document.querySelector('#showComment')
        publishPust.innerHTML = ''
        snap.forEach(doc => { 
            if (typeof doc.data().mail != 'undefined') {
                var email = doc.data().mail;
                var divisiones = email.split("@");
                EmailCortado = divisiones[0];
            } //mi condicion    si, si está ponlo  si no está pon el mail
            var nombre = doc.data().user ? doc.data().user : EmailCortado;
            var image = doc.data().photo ? doc.data().photo : "images/profile-picture-green.jpg";
            let div = buildComent(image, nombre, doc.data().img, doc.data().texto, doc.id);
            let nodo = document.createElement('div')
            nodo.innerHTML = div
            publishPust.appendChild(nodo);

        })
    });
}

export { readPosts }
