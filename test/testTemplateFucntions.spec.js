//import {login} from '../test/testTemplateFunctions.js';
import MockAuth from '../_mocks_/firebase-auth-mock.js';
import MockFirebase from '../_mocks_/firebase-mock.js';
global.firebase = MockFirebase();
global.firebaseAuth = MockAuth();

//   login
function login(email){
  if(email !='') return 'ok'
}

test ('email valdiation', () =>{
  let email= 'user@123.com';
  expect(login(email)).toBe('ok')
})

// Add data
const addData = (post) =>
    firebase.firestore().collection('posts').add({
        id: "1234",
        user: 'User123',
        userphoto: 'url',
        postimg: 'url',
        description: post,
        location: 'loc',
        date: 'date',
        counter: 0,
    });
    
    describe('addData',() => {
      it('should add doc', ()=>{
        return addData('cual es su id'). then((data) => {
          expect(data).toBe('ok ok');
        })
      })
    });

//  logout
const logout = () => 
  firebaseAuth.auth().singOut(() => {
    return 'ok ok'
  });

describe('logout', () => {
  it('should log out', ()=>{ 
    return logout().then((user => {
      expect(user).toBe('ok ok');
    }))  
    }) 
});

  
 