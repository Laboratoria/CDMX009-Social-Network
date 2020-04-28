let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // loginView
function renderLogin() {
    let loginView =
        `<div>    
        <form id="formContacto">
        <fieldset>
        <legend>Formulario</legend>
        <div class="form-group">
        <label for="txtEmail">Email</label>
        <input type="email" class="form-control" name="txtEmail" id="txtEmail" placeholder="Tu email">
        </div>
        <div class="form-group">
        <label for="txtPass">Password</label>
        <input type="text" class="form-control" name="txtPass" id="txtPass" placeholder="Password">
        </div>
        <button type="submit"onclick="registrar()" class="btn btn-primary">Enviar</button>
        </fieldset>
        </form>
        </div>
        </div>
        </div>`
    root.innerHTML = loginView

    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPass").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
        });
}

export default renderLogin