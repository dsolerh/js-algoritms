const data = [
  { al: 1 },
  { al: 1 },
  { al: 1 },
  { al: 1 },
  { al: 1 },
  { al: 1 },
  { al: 1 },
];

const r = data.reduce((prev, curr) => {
  // console.log(prev, curr);
  if (!prev) {
    return curr.al;
  } else {
    if (prev != curr.al) {
      throw console.error("Bad result");
    } else {
      return curr.al;
    }
  }
}, null);
console.log(r);
