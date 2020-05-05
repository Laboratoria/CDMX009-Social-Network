let root = document.querySelector('#root')
    // loginView
function renderLogin() {

    let loginView =
        `<div class="container">
        <input id="txtEmail" type="email" placeholder="Email">
        <input id="txtPassword"type="password" placeholder="Password">
        
        <button id="btnSignUp" class="btn btn-action">Registrarse</button>
        <button id="btnLogin" class="btn btn-secondary">Accesar</button>
        <button id="btnLogout" class="btn btn-action hide">Salir</button>
        </div> 
        </div>`
    root.innerHTML = loginView

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    //Add signup event
    btnSignUp.addEventListener("click", e => {
        //Get email and pass
        const email = txtEmail.value;
        const password = txtPassword.value;
        const user = firebase.auth().currentUser;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .catch(e => console.log(e.message));
    });

    //Add Login event
    btnLogin.addEventListener("click", e => {
        //Get email and pass 
        const email = txtEmail.value;
        const password = txtPassword.value;
        const user = firebase.auth().currentUser;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
        alert(email + "Bienvenid@ a la revolución del conocimiento!!");
    });

    //Add realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Estás registrado");
            alert("¡Bienvenid@!")
            btnLogout.classList.add("hide");
            console.log("Existe un usuario activo")
        } else {
            // User is signed out.
            console.log("No existe un usuario activo")
                // ...
        }
    });

    btnLogout.addEventListener("click", e => {
        firebase.auth().signOut();
        console.log("Cerrando sesión")
        alert("Adiós!!")
    });
}



export default renderLogin