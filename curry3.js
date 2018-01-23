function outer(arg1)
{
  return function inner(arg2)
  {
    return arg1+arg2;
  };
}

module.exports = outer;
