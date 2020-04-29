let content= document.querySelector(".root");


function profile () {
    content.innerHTML='';
    var user = firebase.auth().currentUser;
    let dataBase= firebase.firestore();
    if (user != null) {
        let infoUser= `
        <div>${user.displayName}</div>
        <div>${user.uid}</div>
        <div id="flexImg">
        <img id="imgUserProfile" src=${user.photoURL}>
        </div>`
        content.innerHTML=infoUser;
        dataBase.collection("posts").where("id", "==", user.uid).orderBy("date","desc")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let div= document.createElement("div");
                div.id= "contentImgPosts"
                let link= doc.data().img;
                let img= document.createElement("img");
                img.id= "postsImgProfile" 
                img.src= link;
                div.appendChild(img)
                content.appendChild(div);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
}

export default profile;