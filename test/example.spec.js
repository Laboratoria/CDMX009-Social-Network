function suma(a, b) {
  return a + b;
}

describe('suma', () => {
  it('sumar 1 + 2 es igual a 3', () => {
    expect(suma(3, 4)).toBe(7);
  });
});
