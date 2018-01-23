let curry = require('./curry5');
let person1 = {
  nameArg : 'margi',
  ageArg : 23,
  tShirtSizeArg : 'S'
};
function update(name, age, tSize)
{
  this.nameArg = name;
  this.ageArg = age;
  this.tShirtSizeArg = tSize;
}
describe('test case for problem 5 of curry:', () =>{
  test('updating info of a person by giving all parameters', () =>{
    expect(curry.caller(person1, update, 'gargi', 23, 'S')).toEqual({ nameArg: 'gargi', ageArg: 23, tShirtSizeArg: 'S' });
  });

  test('updating info of a person by giving all parameters', () =>{
    expect(curry.applier(person1, update,['gargi', 23, 'S'])).toEqual({ nameArg: 'gargi', ageArg: 23, tShirtSizeArg: 'S' });
  });

  test('updating info of a person by giving all parameters', () =>{
    expect(curry.caller(person1, update, '', NaN, 'XL')).toEqual({ nameArg: '', ageArg: NaN, tShirtSizeArg: 'XL' });
  });

  test('updating info of a person by giving all parameters', () =>{
    expect(curry.caller(person1, update)).toEqual({ nameArg: undefined, ageArg: undefined, tShirtSizeArg: undefined });
  });

  test('updating info of a person by giving all parameters', () =>{
    expect(curry.applier(person1, update,['XS'])).toEqual({ nameArg: 'XS', ageArg: undefined, tShirtSizeArg: undefined });
  });

  test('updating info of a person by giving all parameters', () =>{
    expect(curry.applier(person1, update,[,,'XS'])).toEqual({ nameArg: undefined, ageArg: undefined, tShirtSizeArg: 'XS' });
  });
});
