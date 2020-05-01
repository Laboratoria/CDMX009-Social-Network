import { emailLogin } from '../src/firebase.js';

const mockFirebase = require('firebase-mock');

const mockauth = new mockFirebase.MockFirebase();
const mockfirestore = new mockFirebase.Mockfirestore();
mockFirebase.autoFlush();
mockauth.autoFlush();

global.firebase = mockFirebase.MockFirebaseSdk(
  () => null,
  () => mockauth,
  () => mockfirestore,
);


describe('post', () => {
  it('deberia poder iniciar sesion', () => emailLogin('kbx@frontend.com', '123456')
    .then((user) => {
      expect(user.email).toBe('kbx@frontend.com');
    }));
});
