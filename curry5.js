let callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg);
    return object;
  },
  applier: function (object, method, argumentsArr) {
    method.apply(object, argumentsArr);
    return object;
  }
};

module.exports = callAndApply;
