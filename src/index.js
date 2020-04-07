import { example } from './example.js';

let click = document.getElementById("click");
let welcomeBox = document.getElementById("welcomeBox");
let flag = "False";

click.addEventListener("click", f => {
    if (flag == "False" ){
        welcomeBox.style.display = "block";
        click.style.backgroundColor = "gray";
        welcomeBox.innerHTML = example();
        flag = "True";
    }else{
        welcomeBox.style.display = "none";
        click.style.backgroundColor = "pink";
        flag = "False";
    }
    
});




