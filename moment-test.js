const moment = require("moment");

console.clear()
const nativeD = new Date(2021, 10, 30, 22, 30);
const date1 = moment(nativeD).local().format("YYYY-MM-DDThh:mm");
const date2 = moment('2021-11-30 22:30').format("YYYY-MM-DDThh:mm");
console.log("🚀 ~ file: moment-test.js ~ line 4 ~ date1", date1);
console.log("🚀 ~ file: moment-test.js ~ line 5 ~ date2", date2);

const date1ISO = moment(nativeD).local().toISOString();
const date2ISO = moment('2021-11-30 22:30').toISOString();
console.log("🚀 ~ file: moment-test.js ~ line 10 ~ date1ISO", date1ISO)
console.log("🚀 ~ file: moment-test.js ~ line 11 ~ date2ISO", date2ISO)
