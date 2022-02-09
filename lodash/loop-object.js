const _ = require("lodash");

const r = _.map({ a: 1, b: 1, c: 1 }, function (v, k) {
console.log("🚀 ~ file: loop-object.js ~ line 4 ~ r ~ v, k", v, k)
  return [v, k];
});
console.log("🚀 ~ file: basic.js ~ line 8 ~ r", r);
