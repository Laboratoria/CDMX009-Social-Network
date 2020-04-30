// import { actionGoogle, actionFacebook } from './utils/providers.js';
// import {newUser} from './src/utils/createUsers.js';
// import { login } from './utils/loginEmail.js';
// import { actionDelete } from './utils/deletePost.js';
// import { saveFirestore } from './utils/saveInFirestore.js';
// import { openModalEdit } from './utils/modalEdit.js';
// import { signOut } from './utils/exit.js';
// import { getNameProfile, theWatcher } from './index.js';
import * as newUser from '../src/utils/createUsers.js';

global.firebase = {
  newUser: jest.fn(() => ({
    singInWithEmailAndPassword: jest.fn(() => new Promise((resolve) => {
      resolve(true);
    })),
  })),
};

test('Valida Email', () => {
  const email = 'dany26@hotmail.com';
  const password = 'patricio';

  expect(newUser(email, password)).toBe('There is no user record corresponding to this identifier. The user may have been deleted.');
});
