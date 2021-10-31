function fib(n) {
  const t = new Array(n + 1).fill(0);
  t[1] = 1;

  for (let i = 0; i <= n; i++) {
    t[i + 1] += t[i];
    t[i + 2] += t[i];
  }
  return t[n];
}

console.log(fib(6));
console.time("fib");
console.log(fib(50));
console.timeEnd("fib");
