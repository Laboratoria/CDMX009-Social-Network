import profile from './profile.js';

import welcomeView from './welcome.js';

document.querySelector("#oupladContent").addEventListener('click', showOupladWindow);
const content = document.querySelector(".root");
let header= document.querySelector(".header");
let staticMenu= document.querySelector("#staticMenu");


    function showOupladWindow (){
    let url;
    content.innerHTML= '';
    let oupladView= `
    <section>
    <div id="divFile">
    <img id="labelImg" src="images/plusImage.png">
    <input type="file" accept="image/*" class="addImage" id="addImage">
    </div>
    <div id="previewImage"></div>
    Título
    <div>
    <textarea id="tittle" placeholder="Máximo 70 carácteres" cols="30" rows="10"></textarea>
    </div>
    Descripción
    <div>
    <textarea id="description" placeholder="Máximo 200 carácteres" cols="30" rows="10"></textarea>
    </div>
    <button id="toPost">PUBLICAR</button>
    <div id="test"></div>
    </section>`
    content.innerHTML= oupladView;
    // let out= document.querySelector('#out');
    // out.onclick= singIn;
    let preview= document.querySelector("#previewImage");
    let inputFile= document.querySelector("#addImage");
    inputFile.onchange= (e) => {
        let file= e.target.files[0];
        firebase.storage().ref("publications").child(file.name).put(file)
        .then (snap =>{
            return snap.ref.getDownloadURL();
        })
        .then(link => { 
            url= link;
            let img= document.createElement('img');
            img.src= link;
            preview.appendChild(img);
            // post.onclick= welcomeView;
        })
        let publishBtn= document.querySelector("#toPost");
        publishBtn.onclick= (e) => {
            let user = firebase.auth().currentUser;
            console.log(user);
            let post = {
                user: user.displayName,
                id: user.uid,
                title: tittle.value,
                description: description.value,
                img: url,
                date: new Date(),
            }
            newPublication(post)
                .then(accept =>{
                console.log(accept);
                //write window
                profile();
                })
                .catch(error => {
                console.log(error)
                })
        }
    }
    let dataBase= firebase.firestore();
let postsNew= dataBase.collection('posts');
function newPublication(post ={user:"Edith", title: "hola", description:"Cómo están??", date: Date.now()}) {
    return postsNew.add(post);
    // .then
}
// postsNew.onSnapshot(snap =>{
//     let textarea= document.querySelector("#test");
//     textarea.innerHTML= '';
//     snap.forEach( doc =>{
//         let div = `<div>
//             <p>${doc.data().user}</p>
//             <p>${doc.data().id}</p>
//             <p>${doc.data().description}</p>
//             <img src= ${doc.data().img}>
//         </div>`
//         let nodo = document.createElement('div');
//         nodo.innerHTML = div;
//         textarea.appendChild(nodo); 
//     })   
// })
};

export default showOupladWindow; 