function f1(times) {
  let s1 = "";
  const t1 = Date.now();
  for (let i = 0; i < times; i++) {
    s1 += "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjkl";
  }
  return Date.now() - t1;
}

function f2(times) {
  const a1 = [];
  const t1 = Date.now();
  for (let i = 0; i < times; i++) {
    a1.push("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjkl");
  }
  return Date.now() - t1;
}

console.log("String += variant:");
(() => {
  for (let i = 100000; i < 1000000; i += 100000) {
    const elp = [];
    for (let j = 0; j < 100; j++) {
      elp.push(f1(i));
    }
    console.log(
      `Times: ${i}\t\t\tElapsed: ${elp.reduce((a, b) => a + b) / elp.length}`
    );
  }
})();
//
console.log("Join variant:");
(() => {
  for (let i = 100000; i < 1000000; i += 100000) {
    const elp = [];
    for (let j = 0; j < 100; j++) {
      elp.push(f2(i));
    }
    console.log(
      `Times: ${i}\t\t\tElapsed: ${elp.reduce((a, b) => a + b) / elp.length}`
    );
  }
})();
