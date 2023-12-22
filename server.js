const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

app.use(bodyParser.json());

app.post("/saveImageInfo", (req, res) => {
  const { imageInfoArray } = req.body;
  // Implement the logic to save image info to a file or database
  // For example, you can use fs.writeFile to save to a file
  // Then send a response back to the client
  res.json({ message: "Image info saved successfully." });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
