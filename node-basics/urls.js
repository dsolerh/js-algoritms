const url = require("url");
const path = require("path");
console.log(
  url.pathToFileURL(path.join("public", "daniel", "is", "awesome.txt")).h
);
