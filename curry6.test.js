let curry = require('./curry6');

describe('test cases for problem 6 of curry', () => {
  let sumOfThree = function(a, b, c)
  {
    return a+b+c;
  };
  let curriedSum = curry(sumOfThree);

  test('all three arguments passed at once', () => {
    expect(curriedSum(2, 2, 6)).toBe(10);
  });

  test('three arguments passed one by one', () => {
    expect(curriedSum(6)(2)(2)).toBe(10);
  });

  test('one argument passed and two passed together', () => {
    expect(curriedSum(7)(5, 3)).toBe(15);
  });

  test('two arguments passed at once and then the third', () => {
    expect(curriedSum(9, 2)(3)).toBe(14);
  });


});
