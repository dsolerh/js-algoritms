const _ = require("lodash");

const data = [
  {
    a: 11,
  },
  {
    a: 11,
  },
  {
    a: 12,
  },
  {
    a: 13,
  },
];
const fn = (x) => x.a + 1;
// console.log(_.groupBy(data, fn));
const d2 = {
  a:{}
}
console.log(_.forEach(data, (x)=>console.log(x)));
