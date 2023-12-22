document.addEventListener("DOMContentLoaded", function () {
  // Read data from a JSON file
  fetch('cache.json')
    .then(response => response.json())
    .then(data => {
      console.log('Read data from cache.json:', data);
    })
    .catch(error => console.error('Error reading file:', error));

  // Write data to a JSON file
  const jsonData = { example: 'data' };
  const jsonContent = JSON.stringify(jsonData, null, 2);

  // Use the Fetch API to send data to a server (you may need to set up a server for this)
  fetch('http://localhost:5500/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonContent,
  })
  .then(response => response.json())
  .then(result => {
    console.log('Data successfully saved:', result);
  })
  .catch(error => console.error('Error saving data:', error));
  const imageInfoArray = [];

  document.addEventListener("DOMContentLoaded", function () {
    fetch('cache.json')
    .then(response => response.json())
    .then(data => {
      console.log('Read data from cache.json:', data);
    })
    .catch(error => console.error('Error reading file:', error));

  // Write data to a JSON file
  const jsonData = { example: 'data' };
  const jsonContent = JSON.stringify(jsonData, null, 2);

  // Use the Fetch API to send data to a server (you may need to set up a server for this)
  fetch('http://localhost:3000/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonContent,
  })
  .then(response => response.json())
  .then(result => {
    console.log('Data successfully saved:', result);
  })
  .catch(error => console.error('Error saving data:', error));
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
      imageInfoArray.push(imageInfo);
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
    imageContainer.appendChild(imgElement); // Add image to container
  }

  function saveImageInfoToJson() {
    const jsonContent = JSON.stringify(imageInfoArray, null, 2);

    fs.writeFile(cacheFilePath, jsonContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }

      console.log('JSON file has been updated successfully.');
    });
  }

  function finishUpload() {
    saveImageInfoToJson();
  }
});
});
