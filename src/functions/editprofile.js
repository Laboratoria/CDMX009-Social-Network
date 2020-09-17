import { clickMenus } from './clickmenus.js';
import { viewForum } from '../view/fuorum.js';
import { publicPost, addNewPost } from './publicpoust.js';
import { readPosts } from './readposts.js';


function editProfileUser(user) {
    let savesChanges = document.getElementById('saveChangesButton');
    let profilePictureInput = document.getElementById('newProfilePhoto'); //aquí pongo en id del input donde voy dar click para entrar a carpeta que muestra imágenes
    let imageUrl = ''; //la variable está vacia,porque solamente cuando el usuario mande una imagen y la imagen sea subida a firebase, tendremos solo así el link. En caso de que el usuario ponga una imagen se llenará.

    profilePictureInput.onchange = changeProfilePhoto => {
        console.log(changeProfilePhoto);

        let file = changeProfilePhoto.target.files[0];
        firebase.storage().ref("devpost").child(file.name).put(file) //le digo a firebase que voy a ocupar su servicio de storage haciendo referencia a la carpeta devpost y que voy a declarar un hijito como mi file que ya declaramos arriba .name ahí entramos a la propiedad name de file, y luego le decimos quiero poner que es PUT este archivo(file) y es tal cual todo el objeto del archivo
            .then(snap => { ///cuando ya sea exitoso snap es el que me va a retornar la respuesta del storage de firebase
                return snap.ref.getDownloadURL() //retorname el ref y la url de descarga de mi imagen que acabo de subir a tu servicio, esta url la recibe la siguiente promesa como link
            })
            .then(link => { //entonces..Si todo exitoso:
                console.log(link)
                imageUrl = link; //devuelveme la url de esta imagen que subiste
                let img = document.getElementById('userPhoto'); //recueparmos la imagen con su id
                img.src = imageUrl; //y le decimos que su srrc va ser igual a esa imagen y ya se ve el preview en el circulito 
            });
    };

    savesChanges.onclick = function() {

        let callName = document.querySelector('#changeName');
        let callProfession = document.querySelector('#changeProfession');

        let editDataProfile = {
            user: callName.value,
            job: callProfession.value,
            img: imageUrl,
            uid: user.uid,
        };

        addInformationProfileEdit(editDataProfile)
            .then(function() {
                // Get the existing data
                let existing = localStorage.getItem('userdata');
                // If no existing data, create an array
                // Otherwise, convert the localStorage string to an array
                existing = existing ? JSON.parse(existing) : {}; //un objeto vacio en el caso de que no haya para yo llenarlo
                // Add new data to localStorage Array
                existing['displayName'] = editDataProfile.user;
                existing['job'] = editDataProfile.job;
                existing['photoURL'] = editDataProfile.img;
                // Save back to localStorage
                localStorage.setItem('userdata', JSON.stringify(existing));
                return existing;
            })
            .then(function(existing) { //esto es la promesa
                console.log('este es el bueno', existing);

                alert('se guardaron los datos') //este es el resultado de la promesa
                viewForum(existing)
                    .then(function() {
                        publicPost(existing);
                        readPosts();
                    })
                    .then(function() {
                        clickMenus(existing);
                        updatePostPic(user.uid, imageUrl);
                    })
            })
            .catch(err => {
                console.log(err) //esto es el error cuando la respuesta es negativa
            });
    };

};

function addInformationProfileEdit(editDataProfile) {
    console.log(editDataProfile);
    return firebase.database().ref('users/' + editDataProfile.uid).set(editDataProfile);
}

function updatePostPic(uid, photo) {
    return db.collection("pruebas_020520").where("uid", "==", uid)
        .get()
        .then(function(resultAllPost) {
            resultAllPost.forEach(function(post) {
                db.collection("pruebas_020520").doc(post.id).update({
                    photo: photo,
                });
            });
        });

};

export { editProfileUser }