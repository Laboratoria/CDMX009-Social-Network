import singIn from './login.js'
import profile from './profile.js'

document.querySelector("#oupladContent").addEventListener('click', showOupladWindow);
let content= document.querySelector(".root");
let header= document.querySelector(".header");
let staticMenu= document.querySelector("#staticMenu");

export function showOupladWindow (){
    let btnOut= document.createElement("buttom");
    btnOut.id= "out";
    btnOut.innerHTML= `<img src="images/logOut.png">`
    header.appendChild(btnOut);
    content.innerHTML= '';
    let oupladView= `
    <section>
    <div id="divFile">
    <img id="labelImg" src="images/plusImage.png">
    <input type="file" accept="image/*" class="addImage" id="addImage">
    </div>
    <div id="previewImage"></div>
    <label>
    Título
    <input type="text" placeholder="Máximo 70 carácteres"/>
    </label>
    <label>
    Descripción
    <input type="text" id="title" placeholder="Máximo 200 carácteres"/>
    </label>
    <button id="toPost">PUBLICAR</button>
    </section>`
    content.innerHTML= oupladView;
    let post= document.querySelector('#toPost');
    post.onclick= profile;
    let out= document.querySelector('#out');
    out.onclick= singIn;
    let inputFile= document.querySelector("#addImage");
    inputFile.onchange= (e) => {
        let file= e.target.files[0];
        firebase.storage().ref("publications").child(file.name).put(file)
    }
};

export default showOupladWindow;