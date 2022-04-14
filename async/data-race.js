const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getTime() {
  console.log("getTime(): ", Date.now());
  await sleep(1);
  console.log("getTime(after 1s): ", Date.now());
}
// process.nextTick(getTime)
getTime();
for (let i = 0; i < 10000000000; i++) {
  100 * 100;
}
console.log("outSide: ", Date.now());