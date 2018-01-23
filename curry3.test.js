let curry = require('./curry3');
let inner = curry(100);
describe('testcase for 3rd problem of curry:', () => {
  test('two number as an arguments:', () => {
    expect(curry(2)(3)).toBe(5);
  });

  test('one argument as number and one empty', () => {
    expect(curry()(3)).toBe(NaN);
  });

  test('calling inner function ', () => {
    expect(inner(3)).toBe(103);
  });

  test('one argument as number and one empty', () => {
    expect(typeof(curry(7)(3))).toBe('number');
  });
});
