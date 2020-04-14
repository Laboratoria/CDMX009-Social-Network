import { changeView } from './viewControler/viewControler.js';
//Load view
const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash))
    
}
window.addEventListener('load', init)


/* function Log in Google
function registrar(){
    console.log("Click!! funciona")
}

//button log in Google
const loginGoogle = document.getElementById('btnGmail');
if (loginGoogle){
loginGoogle.addEventListener('click', registrar);
}*/