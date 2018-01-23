let curry = require('./curry4');
let result1 = curry(2);

describe('testcase for problem 4 of curry is', () =>{
  test('passing only one argument as a number', () =>{
    expect(result1()).toBe(2);
  });

  test('passing no arguments', () =>{
    expect(curry()).toBe(0);
  });

  test('passing three arguments', () =>{
    expect(curry(2)(2)(2)()).toBe(6);
  });

  test('passing two aruments and checking the type of result', () =>{
    expect(typeof(curry(9)(1)())).toBe('number');
  });
});
