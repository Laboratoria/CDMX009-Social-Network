import * as auth from '../src/firebase.js';

global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true);
    })),
  })),
};

test('Validaciones de emailLogin', () => {
  const email = 'antropologia@gmail.com';
  const password = '123D';

  expect(auth.emailLogin(email, password)).toBe('No cumple con 6 caracteres');
  expect(auth.emailLogin('', password)).toBe('No existe email o password');
});

test('emailLogin se ejecuta correctamente', () => {
  const email = 'antropologia@gmail.com';
  const password = '123DKL';

  auth.emailLogin(email, password).then((valor) => {
    expect(valor).toBe(true);
  });
});

test('Validaciones de emailLogin', () => {
  const emailUser = 'antropologia@gmail.com';
  const passwordUser = '123D';

  expect(auth.emailLogin(emailUser, passwordUser)).toBe('No cumple con 6 caracteres');
  expect(auth.emailLogin('', passwordUser)).toBe('No existe email o password');
});

test('emailLogin se ejecuta correctamente', () => {
  const emailUser = 'antropologia@gmail.com';
  const passwordUser = '123DKL';

  auth.emailLogin(emailUser, passwordUser).then((valor) => {
    expect(valor).toBe(true);
  });
});
