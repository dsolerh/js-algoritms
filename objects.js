const a = {
  p1: {
    p11: "p11",
    p12: "p12",
  },
  p2: {},
};
const b = {
  p12: "bbbb",
};
a["p1"] = {
  ...a["p1"],
  ...b,
};

console.log("🚀 ~ file: objects.js ~ line 8 ~ a", a)