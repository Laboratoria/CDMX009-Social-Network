let logInFb = document.getElementById("/face")

let root = document.querySelector('#root')

function logFb() {
    let provider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(data => {
            root.innerHTML = ""
            let img = document.createElement("img")
            img.src = data.user.photoURL
            let h3 = document.createElement("h3")
            h3.innerText = data.user.displayName
            document.body.appendChild(img)
            document.body.appendChild(h3)
            logInFb.remove()

        })
}
logInFb.addEventListener("click", logFb);

export default logFb