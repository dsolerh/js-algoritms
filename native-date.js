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

console.log(isADayBefore(new Date("2022-01-14 00:00:00")));

function isSameDate(params) {
  
}

/**
 * 
 * @param {Date} from 
 * @param {Date} to 
 */
function rangeOfDays(from, to) {
  while (from.getUTCDate()) {
    
    yield 0
  }
}