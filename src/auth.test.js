import * as auth from "./auth.js"
import firebasefunctions from  'firebase-functions-test';
let firebase   = firebasefunctions()
test('emailLogin', () => {
    let email = "antropologia@gmail.com"
    let password = "123D"
    expect(auth.emailLogin(email, password)).toBe(false);
});

