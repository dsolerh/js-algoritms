const { random } = require("lodash");

/**
 *
 * @param {Array} list
 * @returns
 */
function generateRandom(list) {
  return function () {
    for (
      let i = random(0, list.length - 1);
      i < list.length;
      i = random(0, list.length - 1)
    ) {
      const [v] = list.splice(i, 1);
      return v;
    }
    throw new Error('Dried out')
  };
}


const g = generateRandom(['a','b','c'])
console.log(g());
console.log(g());
console.log(g());