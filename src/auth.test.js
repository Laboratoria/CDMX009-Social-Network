import * as auth from "./auth.js"
import firebasefunctions from  'firebase-functions-test';
let firebase   = firebasefunctions()
test('emailLogin', () => {
    let email = "antropologia@gmail.com"
    let password = "123D"
    expect(auth.emailLogin(email, password)).toBe(false);
});

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