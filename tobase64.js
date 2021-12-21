const fs = require("fs/promises");

async function toBase64() {
  const data = await fs.readFile(
    "/home/daniel/Documents/Assets/diferencias/WL3142-12JUL.csv"
  );
  const base64 = data.toString('base64');
  fs.writeFile('/home/daniel/Documents/Assets/diferencias/WL3142-12JUL.b64', base64);
}
toBase64()
// console.log(Buffer.from("Hello World").toString("base64"));
