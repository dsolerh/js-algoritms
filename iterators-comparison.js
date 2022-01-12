let array = [];
for (var i = 0; i < 20000; i++) {
  array.push(i)
}

console.time('map');
array.map(num => {
  return num * 4;
});
console.timeEnd('map');


console.time('forEach');
array.forEach((num, index) => {
  return num * 4;
});
console.timeEnd('forEach');

console.time('for');
for (i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;

}
console.timeEnd('for');