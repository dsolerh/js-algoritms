/**
 *
 * @param {Date} from
 * @param {Date} to
 * @param {"start"|"end"|"both"} include
 */
function* rangeOfDays(from, to, include = "both") {
  if (from > to) throw new Error("Invalid Interval");
  if (include === "start" || include === "both") {
    yield new Date(from);
  }
  while (dffInDays(to, from) > 0) {
    from.setDate(from.getDate() + 1);
    yield new Date(from);
  }
  if (include === "end" || include === "both") {
    yield new Date(to);
  }
}

/**
 * returns true if both dates are the same day
 * @param {Date} date1 first date
 * @param {Date} date2 second date
 */
function isSameDay(date1, date2) {
  return (
    date1.getFullYear() == date2.getFullYear() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getDate() == date2.getDate()
  );
}

/**
 *
 * @param {Date} d1
 * @param {Date} d2
 */
function dffInDays(d1, d2) {
  let tspan = d1 - d2;
  return Math.trunc(tspan / (3600 * 24 * 1000));
}

// Array.from(rangeOfDays(new Date("2022-03-10"), new Date("2022-03-15")), (d) => {
//   console.log("Array.from",d);
//   return d;
// }).map((d) => console.log(".map",d));
const g = rangeOfDays(new Date("2022-03-10"), new Date("2022-03-15"));
console.log(g.next());
console.log([...g]);
// for (const day of rangeOfDays(
//   new Date("2022-03-10"),
//   new Date("2022-03-17"),
//   "both"
// )) {
//   console.log(
//     'Local:\t',
//     day.getFullYear(),
//     day.getMonth(),
//     day.getDate(),
//     day.getTimezoneOffset() / 60,
//     day.getDay()
//   );
//   console.log(
//     'UTC:\t',
//     day.getUTCFullYear(),
//     day.getUTCMonth(),
//     day.getUTCDate(),
//     day.getTimezoneOffset() / 60,
//     day.getUTCDay()
//   );
//   console.log();
//   // console.log(day.getDay())
//   // console.log(day.getUTCDay())
//   // console.log(day);
// }
