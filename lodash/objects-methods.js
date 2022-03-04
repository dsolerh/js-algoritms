const _ = require("lodash");

const filter = {
  root: {
    "created.by": "daniel",
  },
};

function f(obj, segments) {
  let seg = obj;
  for (const segment of segments) {
    seg = _.get(seg, segment);
  }
  return seg;
}
const val2 = f(filter, ["root", "created.by"]);
console.log(val2);
const val = _.get(filter, "root.created.by");
console.log(val);
console.log(_.isPlainObject(val));
