import { example } from '../src/example.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
});