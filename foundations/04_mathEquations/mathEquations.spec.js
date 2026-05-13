const {a, b, c, d, e, f} = require('./mathEquations')

describe('math', () => {
  test('a is 0', () => {
    expect(a).toEqual(0);
  });
  skip('b is 9', () => {
    expect(b).toEqual(9);
  });
  skip('c is 66', () => {
    expect(c).toEqual(66);
  });
  skip('d is 1', () => {
    expect(d).toEqual(1);
  });
  skip('e is -8', () => {
    expect(e).toEqual(-8);
  });
  skip('f is 68', () => {
    expect(f).toEqual(68);
  });
});
