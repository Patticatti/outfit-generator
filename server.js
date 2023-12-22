const express = require("express");
const fs = require("fs/promises"); // Using fs.promises for async/await
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public")); // Serve static files from the 'public' directory

const cacheFilePath = path.join(__dirname, "public", "cache.json");

app.get("/getData", async (req, res) => {
  try {
    const data = await fs.readFile(cacheFilePath, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  }
});

app.post("/saveData", async (req, res) => {
  const jsonData = req.body;
  const jsonContent = JSON.stringify(jsonData, null, 2);

  try {
    await fs.writeFile(cacheFilePath, jsonContent, "utf8");
    console.log("JSON file has been updated successfully.");
    res.json({ message: "Data successfully saved" });
  } catch (err) {
    console.error("Error writing to file:", err);
    res.status(500).send("Error writing to file");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
