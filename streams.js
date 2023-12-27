const fs = require("fs");
fs.readFile("readme.md", "UTF-8", (err, chatLog) => {
  console.log(`File Read ${chatLog.length}`);
});

console.log("reading the file");
