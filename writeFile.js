const fs = require("fs");

let md = `
    This is a New File
    ==================

    ES6 Template Strings are cool. They honor white space.

    * Template Strings
    * Node File System
    * Readline CLIs
`;

fs.writeFile("javascript.md", md.trim(), function () {
  console.log("Markdown Created");
});
