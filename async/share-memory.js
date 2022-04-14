const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

for (let i = 0; i < 100; i++) {
  let state = "none";
  Promise.all([
    sleep(1).then(() => {
      state = "1ms (1)";
    }),
    sleep(1).then(() => {
      state = "1ms (2)";
    }),
    sleep(1).then(() => {
      state = "1ms (3)";
    }),
  ]).then(() => {
    console.log(state);
  });
}
