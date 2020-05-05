let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

function renderPost() {

    let postView =
        `<div>  
      <div class=card w-50">
       <div class="card-colums">
        <div class="card-body">
            <h3 class="card-title">Cuéntanos... qué quieres enseñar?: </h3>
            <input  class="card-img-top img-fluid" alt="Card image cap" id="file" type="file" accept="image/" multiple>
            <div class="card-block">
            <textarea class="card-text" id="textPost" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="card-footer">
            <button id="postBtn" class="btn btn-outline-primary">Add Post</button>
            <!--<div id="div"></div>-->
         </div>
      </div>
     </div>
    </div>`
    root.innerHTML = postView
    let addBtn = document.querySelector("#postBtn");
    let text = document.querySelector("#textPost");
    let fileInput = document.querySelector("#file");
    let url
    const user = firebase.auth().currentUser;
    //
    fileInput.onchange = e => {
        let file = e.target.files[0]
        firebase.storage().ref("imagenes").child(file.name).put(file)
            .then(snap => {
                return snap.ref.getDownloadURL()
            })
            .then(link => {
                url = link
                let img = document.createElement("img");
                img.setAttribute("id", "photo");
                img.src = link;
                document.body.appendChild(img);
                console.log(link);
            })
    }

    addBtn.onclick = event => {
        //traer el texto 
        const post = {
            body: text.value,
            user: "Natalia Olmos",
            date: Date.now(),
            img: "url",
        }

        addNewPost(post)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    let db = firebase.firestore()
    const postsRef = db.collection("posts")

    function addNewPost(post = { img: img, user: "Natalia Olmos", body: "hola k ase", date: Date.now() }) {
        return postsRef.add(post) //Esta es la promesa
    }

    postsRef.onSnapshot(snap => {
        snap.forEach(doc => {
            let div = `<div class=card w-50" >
             <div class="card-colums">
              <div class="card-body">
                 <p>${doc.data().img}
                    ${doc.data().body}
                    ${doc.data().user}
                    ${doc.data().date}
                 </p>
                    <p><button class="type2" id="deletePost">Borrar</button><button class="type2"  id="updatePost">Editar</button></p>
                    <input type="button" class="type2" id="like" value="Me gusta"/> 
               </div>
              </div>
            </div>`

            let nodo = document.createElement("div");
            nodo.innerHTML = div;
            document.body.appendChild(nodo);
        });
        const btnDelete = document.querySelector("#deletePost");
        const btnUpDate = document.querySelector("#updatePost");
        const btnLike = document.querySelector("#like");


        btnDelete.addEventListener("click", e => {
            db.collection("posts").doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document:", error);
            });
        });

        btnUpDate.addEventListener("click", e => {
            db.collection("posts").doc().update().then(function() {
                console.log("Document successfully edited!")
            }).catch(function(error) {
                console.error("Error editing document: ", error)
            })
        });

        btnLike.addEventListener("click", e => {
            var i = 0;
            i = i + 1;
            // btnLike.forEach()
            btnLike.value = "Me gusta (" + i + ")";
        });
    })
}

export default renderPost