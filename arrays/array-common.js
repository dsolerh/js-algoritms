// const freq = Array.from('123313123213').map((x) => {
//   return parseInt(x);
// });
// console.log(freq);

// [{a:"0",b:1},{a:"0",b:1},{a:"2",b:1}].reduce((prev, curr)=> {
//   if (prev.find((x)=> x.a === curr.a)) {

//   }
// }, [])

// (async () => {
//   console.time("Promise");
//   await Promise.all(
//     Array.from({ length: 1000 }).map(async () => {
//       let a = 1000 * 1000;
//     })
//   );
//   console.timeEnd("Promise");
// })();

console.time("For");
for (const i of Array.from({length:1000})) {
  let a = 1000*1000;
}
console.timeEnd("For");