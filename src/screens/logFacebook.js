let logInFb = document.getElementById("/face")


function logFb() {
    let provider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(data => {
            console.log(data.user)
        })
}
logInFb.addEventListener("click", logFb);

export default logFb