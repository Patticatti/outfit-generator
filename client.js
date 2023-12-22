function saveImageInfoToJson(imageInfoArray) {
  const jsonContent = JSON.stringify(imageInfoArray, null, 2);

  // Assuming you have a function for making a POST request to your server
  fetch("http://localhost:5500/saveImageInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageInfoArray }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
