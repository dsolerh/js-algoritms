import { EventEmitter } from "events";
import { readFile } from "fs";

class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }
  addFile(file) {
    this.files.push(file);
    return this;
  }
  find() {
    for (const file of this.files) {
      readFile(file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);
        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/);
findRegexInstance
  .addFile("event-emitter/fileA.txt")
  .addFile("event-emitter/fileB.json")
  .find()
  .on("found", (file, match) => console.log(`Matched "${match}" in ${file}`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));
