import * as auth from '../src/utils/loginEmail.js';

global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true);
      console.log(reject);
    })),
  })),
};

test('Password min 6 characters', () => {
  const email = 'dany26@hotmail.com';
  const password = 'paña';
  expect(auth.login(email, password)).toBe('no cumple lisiada');
});

test('format email incorrect', () => {
  const email = 'dany26@h';
  expect(auth.login(email)).toBe('esta mal lisiada');
});


test('User correct', () => {
  const email = 'danycl_26@hotmail.com';
  const password = 'patricio';
  auth.login(email, password).then((ok) => {
    expect(ok).toBe(true);
  });
});
