/* eslint-disable */
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import database from '../src/database.js';

//config

firebase.initializeApp(firebaseConfig);
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage().ref();
const usersRef = firebase.database().ref('users');
const imageRefPost = firebase.database().ref().child('post-image');
const imageUser = firebase.database().ref('image');

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
    database.signUp ("pruebachida@yopmail.com", "lapapasabemejorcocida", firebase)
  });
});

