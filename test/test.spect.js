import * as firebase from '../src/digitalplatform/firebase';
import 'firebase/auth';
import { loginPageOne } from '../src/functions/loginpageone.js'

describe('loginPageOne', () => {
    it('should be a object', () => {
        expect(typeof loginPageOne).toBe('object');
    });
});
describe('loginPageOne.signUp', () => {
    it('should be a function', () => {
        expect(typeof loginPageOne.signUp).toBe('function');
    });
});
describe('loginPageOne.signUp', () => {
    it('should sign up an account successfully', () => {
        firebase.auth().onAuthStateChanged(function(user) {
            expect(typeof user).toBe('object');
        });
        loginPageOne.signUp("beto@codev.com", "betocodev", firebase)
    });
});