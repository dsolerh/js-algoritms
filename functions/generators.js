const { random } = require("lodash");

function* generateIata() {
  const iatas = ["FI", "SW", "WQ"];
  for (
    let i = random(0, iatas.length - 1);
    i < iatas.length;
    i = random(0, iatas.length - 1)
  ) {
    yield iatas[i];
    iatas.splice(i, 1);
  }
}

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
    throw new Error("Dried out");
  };
}

// for (const iata of generateIata()) {
//   console.log(iata);
// }
// generateIata()
console.log(
  "🚀 ~ file: generators.js ~ line 19 ~ generateIata()",
  generateIata().next()
);
