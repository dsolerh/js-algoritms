const result = [];
const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      result.push("sleep");
      resolve();
    }, ms)
  );
};

const reject = (ms) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      result.push("reject");
      reject(new Error('reject'));
    }, ms)
  );
};

const fail = (ms) => {
  return new Promise(() =>
    setTimeout(() => {
      throw new Error();
    }, ms)
  );
};

const fail_throw = async (ms) => {
  await sleep(ms);
  throw new Error('throw');
};

async function f() {
  try {
    const r = await Promise.all([
      sleep(200),
      sleep(400),
      sleep(600),
      reject(200),
      // fail(600),
      fail_throw(180),
    ]);
    console.log("R:", r);
  } catch (error) {
    console.log("🚀 ~ file: promises.js ~ line 27 ~ f ~ error", error);
  }
}
f().then(() => {
  console.log("Result:", result);
});
