const { Buffer } = require("buffer");

const buff = Buffer.from('daniel')
console.log(buff);
console.log(buff.toString());
console.log(buff.toString('base64'));
