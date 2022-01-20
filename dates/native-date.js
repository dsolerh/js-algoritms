console.clear();

const date1 = new Date(Date.parse("2021-10-30 21:30"));
// console.log("🚀 ~ date1.toString()", date1.toString());
// console.log("🚀 ~ date1.toISOString()", date1.toISOString());
// console.log("🚀 ~ date1.toUTCString()", date1.toUTCString());

let d1 = new Date("2021-10-30 10:30");
let d2 = new Date("2021-10-30 4:30");

// console.log("🚀 ~ d1:", d1);
// console.log("🚀 ~ d2:", d2);
// console.log("🚀 ~ d2 ?> d1:", d2 > d1);
// console.log("🚀 ~ d1 ?> d2:", d1 > d2);
// console.log("🚀 ~ d1 == d2:", d1 == d2);

d2 = new Date("2021-10-30 10:30");
// console.log("🚀 ~ d1:", d1);
// console.log("🚀 ~ d2:", d2);
// console.log("🚀 ~ d1 == d2:", d1 == d2);

// console.log(new Date("2021-12-31")>=new Date("2021-12-31"))

/**
 * devuelve false si date es mayor o igual al dia actual
 * @param {Date} date
 */
function isADayBefore(date) {
  const today = new Date();

  return (
    today.getFullYear() >= date.getFullYear() &&
    today.getMonth() >= date.getMonth() &&
    date.getDate() > today.getDate()
  );
}

const ldate = new Date("2022-03-10");
console.log(
  "🚀 ~ file: native-date.js ~ line 39 ~ ldate.getTimezoneOffset()",
  ldate.getTimezoneOffset()
);
console.log(
  "🚀 ~ file: native-date.js ~ line 41 ~ ldate.toString()",
  ldate.toString()
);
console.log(
  "🚀 ~ file: native-date.js ~ line 42 ~ ldate.toUTCString()",
  ldate.toUTCString()
);

new Date(2022, 0, 16, 12, 0, 0, 0);
