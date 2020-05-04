/* eslint-disable */
import * as firebase from 'firebase';
import 'firebase/auth';
import database from '../src/database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD6boxRV32Ld50HrVuWx2Fkl5ZlYQyAabk',
  authDomain: 'memingos-abeea.firebaseapp.com',
  databaseURL: 'https://memingos-abeea.firebaseio.com',
  projectId: 'memingos-abeea',
  storageBucket: 'memingos-abeea.appspot.com',
  messagingSenderId: '299345545979',
  appId: '1:299345545979:web:a1d0095b63dc2c48e5be5e',
  measurementId: 'G-7SHPQ7YX96',
};

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

