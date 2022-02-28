const word = "babbaacc";
const count = {};
for (const l of word) {
  count[l] = (count[l] || 0) + 1;
}
let max, letter;
for (const key in count) {
  if (max === undefined || count[key] > max) {
    max = count[key];
    letter = key;
  }
}
console.log(letter);
// const letters = word.split('');
// console.log(letters.sort().join());

/**
 *
 * @param {string} wordA
 * @param {string} wordB
 * @returns
 */
function isAnagram(wordA, wordB) {
  if (wordA.length != wordB.length) {
    return false;
  }
  const arrayOfB = wordB.split("");
  for (const letter of wordA) {
    const i = arrayOfB.indexOf(letter);
    if (i >= 0) {
      arrayOfB.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
}
// console.log(isAnagram('daniel','leanid'));
// console.log(isAnagram('danie','leanid'));

function countSentences(wordSet, sentences) {
  const result = [];
  for (const sentence of sentences) {
    const words = sentence.split(" ");
    let combinations = 1;
    for (const word of words) {
      let anagramCount = 1;
      for (const w of wordSet) {
        if (w !== word && isAnagram(w, word)) {
          anagramCount++;
        }
      }
      if (anagramCount > 1) {
        combinations *= anagramCount;
      }
    }
    result.push(combinations);
  }
  return result;
}
countSentences(
  ["the", "bats", "tabs", "in", "cat", "act"],
  ["cat the bats", "in the act", "act tabs in"]
);

/**
 *
 * @param {number[]} numbers
 * @param {number} k
 */
function countPairs(numbers, k) {
  const pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    const b = numbers.find((x, j) => j != i && x == a + k);
    if (b) {
      if (pairs.length == 0) {
        pairs.push([a, b]);
      } else {
        if (!pairs.some((pair) => pair.includes(a) && pair.includes(b))) {
          pairs.push([a, b]);
        }
      }
    }
  }
  return pairs.length;
}

countPairs([1, 2, 3, 4], 0);
countPairs([1, 1, 2, 2, 3, 3], 1);
