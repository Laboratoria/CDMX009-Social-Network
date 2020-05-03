// En esta parte hago la funcion que va tener mi boton al hacer click
// en entar a la aplicación en esta parte  la que me hace entrar a la app con google (google)
function googleButton() {
    // Aquí se crea una instancia del objeto del proveedor de Google y facebook
    // esta instancia es para que me redireccione a google o de facebook, es la parte que me lleva a ellos.
    let provider = new firebase.auth.GoogleAuthProvider();
    let movilIcon = document.getElementById('movilIcon');

    firebase.auth().signInWithPopup(provider)
        .then(function(data) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = data.credential.accessToken;
            // The signed-in user info.
            let user = data.user;
            clickMenus(user);
            viewForum(user)
                .then(function() {
                    publicPost();
                }).then(function() {
                    localStorage.setItem('userdata', JSON.stringify(user)); //aquí le digo que guarde como un json formateado mi objeto, esa data.user la bautizo como user data que es lo que estoy colocando arriba
                })
            document.getElementById('hideAndShow').style.display = 'block';
            movilIcon.classList.add('shown');
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
};

export { googleButton }
