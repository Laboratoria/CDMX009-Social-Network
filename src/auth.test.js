import * as auth from "./auth.js"

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

