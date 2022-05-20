import { EventEmitter } from "events";
import { readFile } from "fs";

function findRegex(files, regex) {
  const emitter = new EventEmitter();
  for (const file of files) {
    readFile(file, "utf8", (err, content) => {
      if (err) {
        return emitter.emit("error", err);
      }

      emitter.emit("fileread", file);
      const match = content.match(regex);
      if (match) {
        match.forEach((el) => emitter.emit("found", file, el));
      }
    });
  }
  return emitter;
}

findRegex(["event-emitter/fileA.txt", "event-emitter/fileB.json"], /hello \w+/g)
  .on("fileread", (file) => console.log(`${file} was read`))
  .on("nothing", console.log)
  .on("found", (file, match) => console.log(`Matched "${match}" in  ${file}`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));
