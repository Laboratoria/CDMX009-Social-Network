let logInGoogle = document.getElementById("/goo")

let root = document.querySelector('#root')

function logGoogle() {
    let provider1 = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider1)
        .then(data => {
            console.log(data.user)
            root.innerHTML = ""
            let imggoo = document.createElement("img")
            imggoo.src = data.user.photoURL
            let h1 = document.createElement("h1")
            h1.innerText = data.user.displayName
            let h3 = document.createElement("email")
            h3.innerText = data.user.email
                // //colocarlos

            document.body.appendChild(imggoo)
            document.body.appendChild(h1)
            document.body.appendChild(h3)
            logInGoogle.remove()
        });

}
logInGoogle.addEventListener("click", logGoogle);


export default logGoogle