const moment = require("moment");

console.clear();
const nativeD = new Date(2021, 10, 30, 22, 30);
const date1 = moment(nativeD).local().format("YYYY-MM-DDThh:mm");
const date2 = moment("2021-11-30 22:30").format("YYYY-MM-DDThh:mm");
// console.log("🚀 ~ file: moment-test.js ~ line 4 ~ date1", date1);
// console.log("🚀 ~ file: moment-test.js ~ line 5 ~ date2", date2);

const date1ISO = moment(nativeD).local().toISOString();
const date2ISO = moment("2021-11-30 22:30").toISOString();
// console.log("🚀 ~ file: moment-test.js ~ line 10 ~ date1ISO", date1ISO);
// console.log("🚀 ~ file: moment-test.js ~ line 11 ~ date2ISO", date2ISO);

const result = moment().isAfter(new Date("2021-12-29 23:59"), "day");
// console.log("🚀 ~ file: moment-test.js ~ line 16 ~ result", result);

const dateM = moment("2022-01-08T00:00:00.000Z")
  .utc(false)
  .format("DD/MM/YYYY");
// console.log("🚀 ~ file: moment-test.js ~ line 19 ~ dateM", dateM);

const aDayAfrer = moment(new Date("2021-12-30")).subtract(1, "day");
// console.log("🚀 ~ file: moment-test.js ~ line 21 ~ aDayAfrer", aDayAfrer);
const diff = moment("2021-12-31").diff(moment("2021-12-30 23:59"), '');
// console.log("🚀 ~ file: moment-test.js ~ line 25 ~ diff", diff);

console.log(moment('2022-01-01').get('isoWeekYear'));