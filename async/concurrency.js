let data = 0;

const upData = (val) =>
  new Promise((resolve, reject) => {
    data = val;
    resolve();
  });

Promise.all([upData(1), upData(2), upData(0)]).then(() => {
  console.log(data);
});
