function fib(n, memo = { 1: 1, 2: 1 }) {
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

function gridTraveler(m, n, memo = {}) {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    if (canSum(targetSum - num, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const sum = howSum(targetSum - num, numbers, memo);
    if (sum) {
      sum.push(num);
      memo[targetSum] = sum;
      return sum;
    }
  }
  memo[targetSum] = null;
  return null;
}

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortSum = null;

  for (const num of numbers) {
    const temp = bestSum(targetSum - num, numbers, memo);
    if (temp) {
      const sum = [...temp, num];
      if (shortSum == null || sum.length < shortSum.length) {
        shortSum = sum;
      }
    }
  }
  memo[targetSum] = shortSum;
  return shortSum;
}

function canConstruct(target, words, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const w of words) {
    if (
      target.startsWith(w) &&
      canConstruct(target.slice(w.length), words, memo)
    ) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

function countConstruct(target, words, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;
  for (const w of words) {
    if (target.startsWith(w)) {
      const count = countConstruct(target.slice(w.length), words, memo);
      totalCount += count;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

function allConstruct(target, words, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let allWays = [];

  for (const w of words) {
    if (target.startsWith(w)) {
      const ways = allConstruct(target.slice(w.length), words, memo).map(
        (way) => [w, ...way]
      );
      allWays.push(...ways);
    }
  }
  memo[target] = allWays;
  return allWays;
}

// console.log(fib(50));
// console.log(gridTraveler(20, 20));
// console.log(canSum(300, [7,14]));
// console.log(howSum(7, [3, 4, 7, 5]));
// console.log(bestSum(3000, [1, 2, 5, 25, 30, 40, 240]));
// console.log(
//   canConstruct(
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
//     ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"]
//   )
// );

// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.time("countConstruct");
// console.log(
//   countConstruct(
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeee"]
//   )
// );
// console.timeEnd("countConstruct");

console.time("allConstruct");
console.log(
  allConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeez",
    ["e", "ee", "eee", "eeee", "eeeee"]
  )
);
console.timeEnd("allConstruct");

