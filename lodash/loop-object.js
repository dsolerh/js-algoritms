const _ = require("lodash");

const r = _.forOwn({ a: 1, b: 1, c: 1 }, function (v, k) {
  return [v, k];
});
console.log("🚀 ~ file: basic.js ~ line 8 ~ r", r);
