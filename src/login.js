import showOupladWindow from './uopladContent.js'
let content= document.querySelector(".root");
let staticMenu= document.querySelector("#staticMenu");

function singIn (){
        content.innerHTML='';
        let profileView= `
        <section>
        <img src="images/logo.png">
        </section>`
        content.innerHTML= profileView;
        // staticMenu.remove();
        document.querySelector("#oupladContent").onclick= showOupladWindow;
    }

export default singIn;