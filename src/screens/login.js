let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // loginView
function renderLogin() {
    let loginView =
        `<div>
        <div class="container">
        <div class="row mt-5">
        <div class="col">
        <div id="alertInfo" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Gracias!</h4>
        <p class="mb-0">Tu comentario se ha guardado. En breve te responderemos. 
        </p>
        </div>        
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
        <button type="submit" class="btn btn-primary">Enviar</button>
        </fieldset>
        </form>
        </div>
        </div>
        </div>`
    root.innerHTML = loginView
    let contactosRef = firebase.database().ref('contactosWeb');
    document.getElementById('alertInfo').style.display = 'none';
    document.getElementById('formContacto').addEventListener('submit', guardarFormulario);

    function guardarFormulario(e) {
        e.preventDefault();
        let email = document.getElementById('txtEmail').value;
        let password = document.getElementById('txtPass').value;

        let nuevoComentarioRef = contactosRef.push();
        nuevoComentarioRef.set({
            email: email,
            password: password,
        });

        document.getElementById('alertInfo').style.display = 'block';
        //Borrar la info
        document.getElementById('formContacto').reset();
        //Mensaje de confirmación
        setTimeout(function() {
            document.getElementById('alertInfo').style.display = 'none';
        }, 2000);
    }
}


export default renderLogin