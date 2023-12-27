const fs = require("fs");

let stream = fs.createReadStream("readme.md", "UTF-8");

let data;

stream.once("data", (chunk) => {
  console.log("read stream started");
  console.log("===========");
  console.log(chunk);
});

console.log("reading the file");
