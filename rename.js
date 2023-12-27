const fs = require("fs");

//fs.renameSync("./lib/config.js", "./lib/project-config.js");

console.log("renamed file");

fs.rename("./lib/notes.md", "./notes.md", function (err) {
  if (err) {
    throw err;
  }
  console.log("Notes markdown file moved");
});
