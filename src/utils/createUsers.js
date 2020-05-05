/* eslint no-param-reassign: "error" */
function createUser(emailNew, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailNew, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/invalid-email':
          alert(`Correo lisiado ${errorMessage}`);
          break;
        case 'auth/weak-password':
          alert(`por tu seguridad usa una contraseña más larga ${errorMessage}`);
          break;
        default:
          alert('ingreso lisiado');
      }
    });
}
export function printCreate(printCreateUser1, userAction2) {
  printCreateUser1.style.display = 'none';
  const register = `<div id="createUser">
       <p><input class="boxInput" id="emailNw" type="email" placeholder="Ingrese correo electrónico"> </p> <br>
       <p><input class="boxInput" id="passwordNw" type="password" placeholder="Nueva contraseña"></p><br>
       <p><button class="logIn" id="createUserNw"> Registrar </button></p>
     </div>`;
  userAction2.innerHTML = register;
  const emailNew = document.getElementById('emailNw');
  const password = document.getElementById('passwordNw');
  const createNewUser = document.getElementById('createUserNw');
  createNewUser.addEventListener('click', () => {
    createUser(emailNew.value, password.value);
  });
}
