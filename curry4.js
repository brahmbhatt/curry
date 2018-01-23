let total = 0;
function delayInvoc(a) {
  if (a === undefined) {
    let result = total;
    total = 0;
    return result;
  }
  else {
    total = total + a;
    return delayInvoc;
  }
}
// let res = delayInvoc(2);
// console.log(res.toString());

module.exports = delayInvoc;
