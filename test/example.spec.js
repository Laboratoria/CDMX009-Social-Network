/* import { example } from '../src/example.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
}); */

import * as auth from '.auth.js'

global.firebase {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword
  }))
}

