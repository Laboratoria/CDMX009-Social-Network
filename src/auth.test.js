/*import * as auth from "./auth.js"

global.firebase = {
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

<<<<<<< HEAD
// esperamos que si escribe un correo inválido, le devuelva un error

test('emailLogin', () => {
    let email = "antropologia@gmail"
    let password = "123DZM"
    expect(auth.emailLogin(email, password)).toThrowError('Email inválido');
});

/* esperamos que si su contraseña no coincide con la guardada en db, le devuelva un error

test('emailLogin', () => {
    let email = ""
    let password = "123D"
    expect(auth.logout(email, password))..toThrowError('Contraseña incorrecta');
});
=======


global.firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true)
    }))
  }))
}
test('Validacion incorrecta', () => {
  let email = "suregmail.com"
  let password = "123D"

  expect(auth.createAccount(email, password)).toBe('Email inválido');
  expect(auth.createAccount(password)).toBe('No cumple con los 6 caracteres');
});


test('Validacion correcta', () => {
  let email = "sure@gmail.com"
  let password = "123DOP"

  auth.createAccount(email, password).then(valor => {
    expect(valor).toBe(true)
  });
});

>>>>>>> 0de4c4d96e0a3c808ca8d6c3545e6e9aa45c5b61
