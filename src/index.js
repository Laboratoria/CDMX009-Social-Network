/* import { example } from './example.js';

example(); */
var db = firebase.firestore();

//login, instancia del provedor del servicio
var provider = new firebase.auth.GoogleAuthProvider();
var providerf = new firebase.auth.FacebookAuthProvider();

let div = document.querySelector('#root');
//Autentificar con Google
let btn = document.querySelector('#login');
btn.addEventListener('click', function () {
    firebase.auth()//Se llama a la func autenticar
        .signInWithPopup(provider)//Se va a usar una popUp y se va a loguear con la var provider que es google
        .then(function (result) {//lo que se hace cuando el usuario ya inicio sension y ya dio permisos, nos dio su info
            console.log(result.user);//trae info de usuario(correo, nombre, foto, etc)
            guardaDatos(result.user)//Se le manda a la func guardDatos para hacer uns BD
            //ocultar el boton y mostrar la foto
            btn.classList.hide;
            div.innerHTML = `
                <img src="${result.user.photoURL}"/>
            `

        })
});

//const docData = db.doc('datausers/users');
//func que guarda los datos gmail automaticamente
function guardaDatos(user) {
    //console.log(user);
    /* firebase.database().ref("usersapp/" + user.uid)//la / y el + user.uid hace que no se duplique el usuario
        .set(usuario) */
    const docData = db.doc('datausers/' + user.uid);//la / y el + user.uid hace que no se duplique el usuario
    docData.set({
        uid: user.uid,//Servirá para eliminar
        nombre: user.displayName,//Se obtiene el nom
        email: user.email,
        foto: user.photoURL
    })

        .then(function () {
            console.log('Los datos se guardaron');

        })
        .catch(function (error) {
            console.log('Hubo en error:', error);

        })
    updateData(docData)

}


//se leen los datos de la BD

function updateData(docData) {
    docData.get().then(function (snapshot) {
        let myData = snapshot.data();
        console.log(myData);
        div.innerHTML = `Hola ${myData.nombre}`

    })
}

//se leen los datos de la BD
/* firebase.database().ref("datausers/users")//cuando alguien agregue un elemen a la rama
    .on("child_added", function (snapshot) {//on escucha si se agrega algo(child_added), recibe snapshot que es el nodo con toda la info del obj telmex
        //Se agregan las fotos de las personas que ingresan
        var user = snapshot.val()//val tiene los datos (obj con key y val)
        div.innerHTML = `
                <img src="${user.foto}"/>
            `
 
 
    }) */

//Autentificar con facebook
let btnfb = document.querySelector('#loginfb');
btnfb.addEventListener('click', function () {
    firebase.auth()//Se llama a la func autenticar
        .signInWithPopup(providerf)//Se va a usar una popUp y se va a loguear con la var provider que es google
        .then(function (result) {//lo que se hace cuando el usuario ya inicio sension y ya dio permisos, nos dio su info
            console.log(result.user);//trae info de usuario(correo, nombre, foto, etc)
            guardaDatosFb(result.user)//Se le manda a la func guardDatos para hacer una BD
            //ocultar el boton y mostrar la foto
            btn.classList.hide;
            div.innerHTML = `
                <img src="${result.user.photoURL}"/>
            `

        })
});

//func que guarda los datos gmail automaticamente
function guardaDatosFb(user) {
    //console.log(user);
    /* firebase.database().ref("usersapp/" + user.uid)//la / y el + user.uid hace que no se duplique el usuario
        .set(usuario) */
    const docDataFb = db.doc('datausers/' + user.uid);//la / y el + user.uid hace que no se duplique el usuario
    docDataFb.set({
        uid: user.uid,//Servirá para eliminar
        nombre: user.displayName,//Se obtiene el nom
        email: user.email,
        foto: user.photoURL
    })

        .then(function () {
            console.log('Los datos se guardaron');

        })
        .catch(function (error) {
            console.log('Hubo en error:', error);

        })
    updateDataFb(docDataFb)

}

//se leen los datos de la BD

function updateDataFb(docDataFb) {
    docDataFb.get().then(function (snapshot) {
        let myData = snapshot.data();
        console.log(myData);
        div.innerHTML = `Hola <img src='${myData.foto}'> ${myData.nombre} `

    })
}

//Crear cuenta con email
/* document.querySelector('#ingresar').addEventListener('submit', cargarEmail)
 
function cargarEmail(e) {
    e.preventDefault();
 
    //Leer variables del form
    const valEmail = document.querySelector('#email').value
    const valPass = document.querySelector('#password').value
 
    console.log(valEmail);
    console.log(valPass);
 
 
} */
//Leer y guardar los datos del usuario para crear cuenta
document.querySelector('#create').addEventListener('click', function (e) {
    e.preventDefault()
    //Leer variables del form
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    //console.log(valEmail);
    //console.log(valPass);

    return createUser(email, password)
})
//Guardar los datos en firebase y BD
function createUser(email, password) {
    console.log(email + password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log('Se ha creado la cuenta!');
            console.log(user.user);

        })
        .catch(function (error) {
            console.error(error);

        })
    const docData = db.doc('datausers/' + email);//la / y el + user.uid hace que no se duplique el usuario
    docData.set({
        email: email,
        password: password
    })

        .then(function () {
            console.log('Los datos se guardaron');

        })
        .catch(function (error) {
            console.log('Hubo en error:', error);

        })

}


//Leer y guardar los datos del us. para despues comparar con los datos almacenados en la BD
document.querySelector('#enter').addEventListener('click', function (e) {
    e.preventDefault()
    //Leer variables del form
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    //console.log(email);
    //console.log(password)
    return loginUser(email, password)
})

//Comparar los datos del usuario con los datos que usó para crear cuenta
function loginUser(email, password) {
    console.log(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log('Datos correctos, bienvenido!')
        })
        .catch(function (error) {
            alert('Upsi, datos incorrectos');

        })

}

//salir de la sesión
const btnexit = document.querySelector('#salir')
btnexit.addEventListener('click', signoutUser)

function signoutUser() {
    firebase.auth().signOut();
}