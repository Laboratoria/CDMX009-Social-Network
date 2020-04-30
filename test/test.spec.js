import { checkIn } from '../src/firebase.js';

describe('checkIn', () => {
  it('debería ser una función', () => {
    expect(typeof checkIn).toBe('function');
  });
});
