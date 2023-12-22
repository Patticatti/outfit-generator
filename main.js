const fs = require('fs');
const cacheFilePath = 'cache.json';
const imageInfoArray = [];

document.addEventListener("DOMContentLoaded", function () {
function handleFileSelect() {
    const fileInput = document.getElementById('fileInput');
    const selectedFiles = fileInput.files;

    if (selectedFiles.length === 0) {
      alert('No files selected.');
      return;
    }

    // Filter out non-image files
    const imageFiles = Array.from(selectedFiles).filter(file => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      alert('No image files selected.');
      return;
    }

    // Process image files
    imageFiles.forEach(imageFile => {
      displayImage(imageFile);

      const imageInfo = {
        name: imageFile.name,
        dataURL: '', // Placeholder for the data URL (set below)
      };
    });

    // Reset the file input to allow selecting the same files again
    fileInput.value = '';
  }

  function displayImage(imageFile) {
    const imageContainer = document.getElementById('imageContainer');
    const imgElement = document.createElement('img');

    const reader = new FileReader();
    reader.onload = function (e) {
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
    imgElement.alt = imageFile.name;
    imgElement.style.maxWidth = '100px';
    imageContainer.appendChild(imgElement); //add image to container
  }
});


function saveImageInfoToJson(imageInfoArray) {
  const jsonContent = JSON.stringify(imageInfoArray, null, 2);
  console.log(jsonContent);
  fs.readFile(cacheFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  });
  const jsonData = JSON.parse(data);
  fs.writeFile(cacheFilePath, updatedJsonString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.shirt = 'pink';
    const updatedJsonString = JSON.stringify(jsonData, null, 2);
    console.log('JSON file has been updated successfully.');
  });
};