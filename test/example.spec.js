import { emailLoginFb } from '../src/firebase-auth';

const { MockFirebase } = require('firestore-jest-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    () => null,
    () => mockauth,
    () => mockfirestore,
);

describe('ingresarConCorreoYContrasena', () => {
    it('debería ser una función', () => {
        expect(typeof emailData).toBe('function');
    });
    it('Debería poder iniciar sesion', () => emailLoginFb('grojasm@gmail.com', 'grojasm')
        .then((user) => {
            expect(user.email).toBe('grojasm@gmail.com');
        }));
});
