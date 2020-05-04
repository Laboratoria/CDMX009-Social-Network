/* eslint-disable */
import * as firebase from 'firebase';
import 'firebase/auth';
import database from '../src/database.js';

//config

firebase.initializeApp(firebaseConfig);

describe('database', () => {
  it('should be a object', () => {
    expect(typeof database).toBe('object');
  });
});
describe('database.signUp', () => {
  it('should be a function', () => {
    expect(typeof database.signUp).toBe('function');
  });
});
describe('database.signUp', () => {
  it('should sign up an account successfully', () => {
    firebase.auth().onAuthStateChanged(function(user) { 
        expect(typeof user).toBe('object');
    });    
    database.signUp ("pruebachida@yopmail.com", "lapapasabemejorcocida",firebase)
  });
});

