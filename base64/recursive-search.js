const obj = require("./obj.json");
const { base64ToFile } = require("./base64-to-file");

/**
 *
 * @param {Object} o
 */
async function name(o) {
  if (Array.isArray(o)) {
    for (let i = 0; i < o.length; i++) {
      o[i] = await name(o[i]);
    }
    return Promise.resolve(o);
  } else if (typeof o == "object") {
    for (const key in o) {
      o[key] = await name(o[key]);
    }
    return Promise.resolve(o);
  } else if (
    typeof o == "string" &&
    o.match(/^data:(image|video|application)\/(.*);base64/)
  ) {
    return base64ToFile(o, "base64");
  } else {
    return Promise.resolve(o);
  }
}

(async () => {
  await name(obj);
  console.log(obj);
})();
