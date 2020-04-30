/*import * as auth from "./auth.js"

/global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true)
    }))
  }))
}

test('Validaciones de emailLogin', () => {
  let email = "antropologia@gmail.com"
  let password = "123D"

  expect(auth.emailLogin(email, password)).toBe('No cumple con 6 caracteres');
  expect(auth.emailLogin('', password)).toBe('No existe email o password');
});

test('emailLogin se ejecuta correctamente', () => {
  let email = "antropologia@gmail.com"
  let password = "123DKL"

  auth.emailLogin(email, password).then(valor => {
    expect(valor).toBe(true)
  });
});



global.firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true)
    }))
  }))
}

function falsaCreateAccount(email, pass){
  if(!email.includes("@")){
  return "Email inválido"
  }
}

test('Validacion incorrecta', () => {
  let email = "suregmail.com"
  let password = "123D"

  expect(falseCreateAccount(email, password)).toBe('Email inválido');
  expect(auth.createAccount(password)).toBe('No cumple con los 6 caracteres');
});


test('Validacion correcta', () => {
  let email = "sure@gmail.com"
  let password = "123DOP"

  auth.createAccount(email, password).then(valor => {
    expect(valor).toBe(true)
  });
});*/

/*function falsesignInWithEmailAndPassword(email, password){
  if(!email.includes("@")){
    return "email invalido"
}
}

test('Validacion incorrecta', () => {
  let email = "suregmail.com"
  let password = "123D"

  expect(falsesignInWithEmailAndPassword(email, password)).toBe('Email inválido');
  expect(auth.emailLogin(password)).toBe('No cumple con los 6 caracteres');
});
<<<<<<< HEAD

test('Validacion correcta', () => {
  let email = "sure@gmail.com"
  let password = "123DOP"

  auth.emailLogin(email, password).then(valor => {
    expect(valor).toBe(true)
  });
});*/
=======
*/
>>>>>>> 353ae0604934a049a604bd307a81dbccd7d22f3f
