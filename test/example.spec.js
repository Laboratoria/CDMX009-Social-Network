import { emailLogin } from '../src/firebase.js';

const { mockFirebase } = require('firestore-jest-mock');

const mockauth = new mockFirebase.MockFirebase();
const mockfirestore = new mockFirebase.MockFirestore();
mockFirebase.autoFlush();
mockauth.autoFlush();

global.firebase = mockFirebase.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// iniciando tests

describe('firebase', () => {
  it('Debería poder iniciar sesion', () => emailLogin('correo@correo.com', '123456')
    .then((user) => {
      expect(user.email).toBe('correo@correo.com');
    }));
});
