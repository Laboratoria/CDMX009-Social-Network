/* global firebase */

/* const { firebasemock } = require('firestore-jest-mock');

global.firebase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
  () => mockfirestore,
); */

/* import {
  emailLoginFb,
} from '../src/firebase-auth.js';

const firebasemock = require('firebase-jest-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    () => null,
    () => mockauth,
    () => mockfirestore,
);


describe('login with email', () => {
  it('must be a function', () => {
    expect(typeof emailLoginFb).toBe('function');
  });
  it('Debería poder iniciar sesion', () => emailLoginFb('test@test.com', 'abcd1234')
    .then((user) => {
      expect(user.email).toBe('test@test.com');
    }));
});
 */

 //  import { example } from '../src/example.js';
function suma(a, b) {
  return a + b;
}

describe('suma', () => {
  it('sumar 2 + 2 es igual a 4', () => {
    expect(suma(2, 2)).toBe(4);
  });
});