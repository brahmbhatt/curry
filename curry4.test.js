let curry = require('./curry4');
let result1 = curry(2);

describe('testcase for problem 4 of curry is', () =>{
  test('passing only one argument as a number', () =>{
    expect(result1()).toBe(2);
  });

  test('passing only one argument as a number', () =>{
    expect(curry()).toBe(0);
  });

  test('passing only one argument as a number', () =>{
    expect(curry(2)(2)(2)()).toBe(6);
  });

  test('passing only one argument as a number', () =>{
    expect(typeof(curry(9)(1)())).toBe('number');
  });
});
