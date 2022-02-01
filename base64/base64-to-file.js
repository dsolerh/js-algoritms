const fs = require("fs/promises");
const path = require("path");

/**
 *
 * @param {String} m
 */
function mimeType(m) {
  const [type, subtype] = m.split("/");
  switch (type) {
    case "image":
    case "video":
      return subtype === "svg+xml" ? "svg" : subtype;

    case "application":
      if (subtype !== "pdf") {
        throw new Error("Unsupported MIME type");
      } else {
        return subtype;
      }
    default:
      throw new Error("Unsupported MIME type");
  }
}

/**
 *
 * @param {String} rawData
 * @returns {Promise}
 */
function base64ToFile(rawData, dir) {
  const [fileInfo, data] = rawData.split(","),
    ext = mimeType(fileInfo.match(/:(.*?);/)[1]),
    filename = path.resolve(dir, `${Date.now() + Math.random() * 1000}.${ext}`);

  return fs
    .writeFile(filename, data, { encoding: "base64" })
    .then(() => filename);
}

module.exports = {
  base64ToFile,
};
