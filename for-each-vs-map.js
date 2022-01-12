const arr = [1, 2];
arr[0] = 30;
arr[30] = 15;
arr[5] = 5;

arr.forEach((x) => console.log(x));

const a = [1, 2, 43, 4, 5, 6, 7, 8, 9, 9];

const b = a.map((x) => {
  return 2 * x;
});
console.log("🚀 ~ file: for-each-vs-map.js ~ line 11 ~ b", b);
const d = [1,2,3,4];
const c = a.forEach((x) => {
  d.push(2 * x);
});
console.log("🚀 ~ file: for-each-vs-map.js ~ line 15 ~ d", d);
console.log("🚀 ~ file: for-each-vs-map.js ~ line 13 ~ c", c);
