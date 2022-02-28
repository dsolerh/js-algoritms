const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
};

const getNumFruitSync = (fruit) => {
  return fruitBasket[fruit];
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getNumFruitAsync = (fruit) => {
  return sleep(1000).then((v) => fruitBasket[fruit]);
};

// getNumFruitAsync("apple").then((num) => console.log(num)); // 27
// getNumFruitAsync("pear").then((num) => console.log(num)); // 27

// const numApples = getNumFruitSync("apple");
// console.log(numApples); // 27

const control = async () => {
  console.log("Start");

  const numApples = await getNumFruitAsync("apple");
  console.log(numApples);

  const numGrapes = await getNumFruitAsync("grape");
  console.log(numGrapes);

  const numPears = await getNumFruitAsync("pear");
  console.log(numPears);

  console.log("End");
};

// control();

const fruitsToGet = ["apple", "grape", "pear"];
const forLoop = async (_) => {
  console.log("Start");

  for (let index = 0; index < fruitsToGet.length; index++) {
    const fruit = fruitsToGet[index];
    const numFruit = await getNumFruitAsync(fruit);
    console.log(numFruit);
  }

  console.log("End");
};

// forLoop();

const forEachLoop = (_) => {
  console.log("Start");

  fruitsToGet.forEach(async (fruit) => {
    const numFruit = await getNumFruitAsync(fruit);
    console.log(numFruit);
  });

  console.log("End");
};
// forEachLoop();

const mapLoop = async (_) => {
  console.log("Start");

  const promises = fruitsToGet.map(async (fruit) => {
    const numFruit = await getNumFruitAsync(fruit);
    return numFruit;
  });

  const numFruits = await Promise.all(promises);
  console.log(numFruits);

  console.log("End");
};
// mapLoop();

// Filter if there's no await
const filterLoop = (_) => {
  console.log("Start");

  const moreThan20 = fruitsToGet.filter((fruit) => {
    const numFruit = fruitBasket[fruit];
    return numFruit > 20;
  });

  console.log(moreThan20);
  console.log("End");
};
// filterLoop();

//

const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 10) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};
(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
});

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}
(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();