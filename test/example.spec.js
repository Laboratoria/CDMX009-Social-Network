import mockFirebase from '../_mocks_/firebase-mock.js'
//import { loginGoogle } from '../src/index.js';
//import * as login from '../src/index.js'

/* global.firebase = {
  auth: jest.fn(() => ({
    signInWithPopup: jest.fn(() => new Promise((resolve, reject) => {
      resolve(true)
    }))
  }))
}

test('Login email', () => {
  let email = 'ejemplo@hotmail.com'
  let password = 'ejem'

  expect(auth.loginUser(email, password)).toBe('No cumple con 6 caracteres')

})  */




global.firebase = mockFirebase();


describe('loginGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

