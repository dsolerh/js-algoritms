function fib(n) {
  const t = new Array(n + 1).fill(0);
  t[1] = 1;

  for (let i = 0; i <= n; i++) {
    t[i + 1] += t[i];
    t[i + 2] += t[i];
  }
  return t[n];
}

// console.log(fib(6));
// console.time("fib");
// console.log(fib(50));
// console.timeEnd("fib");

function gridTraveler(m, n) {
  const t = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  t[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = t[i][j];
      if (j + 1 <= n) t[i][j + 1] += current;
      if (i + 1 <= m) t[i + 1][j] += current;
    }
  }

  return t[m][n];
}

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 3));
// console.time("gridTraveler");
// console.log(gridTraveler(18, 18));
// console.timeEnd("gridTraveler");

function canSum(target, numbers) {
  const t = new Array(target + 1).fill(false);
  t[0] = true;

  for (let i = 0; i < target; i++) {
    if (t[i]) {
      for (let j = 0; j < numbers.length; j++) {
        const pos = i + numbers[j];
        if (pos < t.length) {
          t[pos] = true;
          if (pos == target) return true;
        }
      }
    }
  }

  return t[target];
}

// console.log(canSum(7, [5, 3, 4]));
// console.log(canSum(3, [2]));
// console.log(canSum(2, [3]));
// console.log(canSum(3, [1, 2, 3]));
// console.time("canSum");
// console.log(canSum(10000, [7, 14, 7, 14, 7, 14, 7, 14, 7]));
// console.timeEnd("canSum");

function howSum(target, numbers) {
  const t = new Array(target + 1).fill(null);
  t[0] = [];

  for (let i = 0; i < target; i++) {
    if (t[i] !== null) {
      for (let j = 0; j < numbers.length; j++) {
        const pos = i + numbers[j];
        if (pos < t.length) {
          t[pos] = [...t[i], numbers[j]];
          if (pos == target) return t[pos];
        }
      }
    }
  }

  return t[target];
}

// console.log(howSum(7, [5, 3, 4]));
// console.log(howSum(3, [2]));
// console.log(howSum(2, [3]));
// console.log(howSum(3, [1, 2, 3]));
// console.time("howSum");
// console.log(howSum(10000, [7, 14, 7, 14, 7, 14, 7, 14, 7]));
// console.timeEnd("howSum");

function bestSum(target, numbers) {
  const t = new Array(target + 1).fill(null);
  t[0] = [];

  for (let i = 0; i < target; i++) {
    if (t[i] !== null) {
      for (let j = 0; j < numbers.length; j++) {
        const pos = i + numbers[j];
        if (pos < t.length) {
          if (
            (t[pos] !== null && t[pos].length > t[i].length + 1) ||
            t[pos] === null
          ) {
            t[pos] = [...t[i], numbers[j]];
          }
        }
      }
    }
  }

  return t[target];
}

// console.log(bestSum(7, [5, 3, 4]));
// console.log(bestSum(3, [2, 1]));
// console.log(bestSum(2, [3]));
// console.log(bestSum(3, [1, 2, 3]));
// console.time("bestSum");
// console.log(bestSum(100, [25, 1, 2, 5]));
// console.timeEnd("bestSum");

function canConstruct(target, words) {
  const t = new Array(target.length + 1).fill(false);
  t[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (t[i]) {
      for (let j = 0; j < words.length; j++) {
        if (target.slice(i, i + words[j].length) === words[j]) {
          const pos = i + words[j].length;
          if (pos <= target.length) {
            t[pos] = true;

            if (pos == target.length) {
              return true;
            }
          }
        }
      }
    }
  }

  return t[target.length];
}

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct(3, [2, 1]));
// console.log(canConstruct(2, [3]));
// console.log(canConstruct(3, [1, 2, 3]));
// console.time("canConstruct");
// console.log(canConstruct(100, [25, 1, 2, 5]));
// console.timeEnd("canConstruct");

function countConstruct(target, words) {
  const t = new Array(target.length + 1).fill(0);
  t[0] = 1;

  for (let i = 0; i < target.length; i++) {
    if (t[i]) {
      for (let j = 0; j < words.length; j++) {
        if (target.slice(i, i + words[j].length) === words[j]) {
          const pos = i + words[j].length;
          if (pos <= target.length) {
            t[pos] += t[i];
          }
        }
      }
    }
  }

  return t[target.length];
}

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// // console.log(countConstruct(2, [3]));
// // console.log(countConstruct(3, [1, 2, 3]));
// console.time("countConstruct");
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// );
// console.timeEnd("countConstruct");


function countConstruct(target, words) {
  const t = new Array(target.length + 1).fill().map(()=> []);
  t[0] = [[]];

  for (let i = 0; i < target.length; i++) {
    if (t[i].length) {
      for (let j = 0; j < words.length; j++) {
        if (target.slice(i, i + words[j].length) === words[j]) {
          const pos = i + words[j].length;
          if (pos <= target.length) {
            t[pos].push(...t[i].map(x=> [...x, words[j]]));
          }
        }
      }
    }
  }

  return t[target.length];
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(countConstruct(2, [3]));
// console.log(countConstruct(3, [1, 2, 3]));
console.time("countConstruct");
console.log(
  countConstruct("eeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
console.timeEnd("countConstruct");
