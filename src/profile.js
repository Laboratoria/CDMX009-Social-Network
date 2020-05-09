import {modal} from './welcome.js'
let content= document.querySelector(".root");


function profile () {
    content.innerHTML='';
    let user = firebase.auth().currentUser;
    let dataBase= firebase.firestore();
    if (user != null) {
        let infoUser= `
        <div>${user.displayName}</div>
        <div id="flexImg">
        <img id="imgUserProfile" src=${user.photoURL}>
        </div>`
        content.innerHTML=infoUser;
        dataBase.collection("posts").where("id", "==", user.uid).orderBy("date","desc")
        .onSnapshot(function(snapshot){
            let changes= snapshot.docChanges();
            console.log(changes);
            changes.forEach(change =>{
                let section= document.createElement("section");
                section.classList.add("containerProfile");
                let button= document.createElement("button");
                button.classList.add("btnsPosts");
                let link= change.doc.data().img;
                let img= document.createElement("img");
                img.src= link;
                img.id = change.doc.id;
                img.setAttribute('data-title',change.doc.data().title);
                img.setAttribute('data-description', change.doc.data().description);
                img.setAttribute('data-user', change.doc.data().user);
                button.appendChild(img);
                section.appendChild(button);
                content.appendChild(section);
                content.removeChild(section);
            });
            let modalRoot= document.querySelector("#modalRoot");
            let btnsPosts= document.querySelectorAll(".btnsPosts");
            btnsPosts.forEach(btn=> btn.onclick = e => {
                modalRoot.style.display= "block";
                let value= e.target.id;
                // console.log(value);
                let link = e.target.getAttribute('src');
                let title= e.target.getAttribute('data-title');
                let description= e.target.getAttribute('data-description');
                let user= e.target.getAttribute('data-user');
                modal(value, link, title, description, user);
            });
        })
        // .catch(function(error) {
        //     console.log("Error getting documents: ", error);
        // });
        
    }
}

export default profile;