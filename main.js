function saveImageInfoToJson(imageInfoArray) {
  const jsonContent = JSON.stringify(imageInfoArray, null, 2);

  // Assuming you have a function for making a POST request to your server
  fetch("http://localhost:3000/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonContent,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Data successfully saved:", result);
    })
    .catch((error) => console.error("Error saving data:", error));
}
