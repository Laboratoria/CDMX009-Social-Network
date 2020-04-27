import showOupladWindow from './uopladContent.js'

document.querySelector("#profile").addEventListener('click', welcomeView);
let content= document.querySelector(".root");
let header= document.querySelector(".header");
let staticMenu= document.querySelector("#staticMenu");


function welcomeView (){
    content.innerHTML= '';
    let dataBase= firebase.firestore();
    dataBase.collection("posts").orderBy("date","desc").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            let section= document.createElement("section");
            section.classList.add("containerPosts");
            let button= document.createElement("button");
            button.classList.add("btnsPosts")
            console.log(button);
            let img= document.createElement("img");
            img.src= doc.data().img;
            img.id = doc.id;
            img.setAttribute('data-title',doc.data().title);
            img.setAttribute('data-description', doc.data().description);
            button.appendChild(img);
            section.appendChild(button);
            content.appendChild(section);

            });
            let modalRoot= document.querySelector("#modalRoot");
            let btnsPosts= document.querySelectorAll(".btnsPosts");
            btnsPosts.forEach(btn=> btn.onclick = e => {
                modalRoot.style.display= "block";
                let value= e.target.id;
                let link = e.target.getAttribute('src');
                let title= e.target.getAttribute('data-title');
                let description= e.target.getAttribute('data-description');
                console.log(title);
                console.log(description);
                modal(value, link, title, description);
            });

            function modal(id, link, title, description){
                id;
                modalRoot.innerHTML='';
                let contentModal= `
                <div class="modalContent">
                <span class="close">&times</span>
                <p class="title">${title}</p>
                <div id="contentImg">
                <img id="imgModal" src=${link}>
                </div>
                <p class="text">${description}</p>
                </div>`
                modalRoot.innerHTML=contentModal;
                let btnSpan= document.getElementsByClassName("close")[0];
                btnSpan.onclick= () => modalRoot.style.display="none";
                // btnSpan.forEach(btn=> btn.onclick = e =>{
                // modalRoot.style.display="none";
                // })
            }
});
}

export default welcomeView;

//{
    //title:"lil",
    //text:"jdijijsijf",
  //  userId:"osudfoijsf"
//}

//firebase.firestore().collection('posts').where('userId',user.uid).get()