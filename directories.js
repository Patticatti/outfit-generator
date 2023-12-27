const fs = require("fs");

//fs.renameSync("./assets/logs.js", "boob/logs.js");
//console.log("logs folder moved");

// fs.rmdir("./assets", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("./assets directory removed");
//   }
// });

fs.readdirSync("./boob").forEach((file) => {
  fs.renameSync(`./boob/${file}`, `./lib/${file}`);
});
console.log("Files Removed");
fs.rmdirSync("./boob");
console.log("Folder removed");
