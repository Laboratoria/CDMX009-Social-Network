//  import { example } from '../src/example.js';
function suma(a, b) {
  return a + b;
}

describe('suma', () => {
  it('sumar 2 + 2 es igual a 4', () => {
    expect(suma(2 + 2)).toBe(4);
  });
});
