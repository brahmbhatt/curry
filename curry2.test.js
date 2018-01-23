let curry = require('./curry2');
describe('testcases for problem 2:', () =>{
  test('arguments as numbers:', () =>{
    expect(curry(2,3)).toBe(5);
  });
});
