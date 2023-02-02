var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + '1gC51el4lpJ36Ij_TWq12ApLQ3hvj9NM9J5Dhc3vjfA8' + '/values/' + 'Tap_list' + '?alt=json&key=' + 'AIzaSyAn545aPb1YXYJOnVkPX_VNunHwUGvwoGk';
let arrays;
const container = document.getElementById("container");

// Fetch data from the specified URL
fetch(url)
  .then(response => {
    // Return the response as a JSON object
    return response.json();
  })
  .then(data => {
    // Store the values from the data in the arrays variable
    arrays = data.values;

    // Loop through each array in the arrays variable
    for (let i = 0; i < arrays.length; i++) {
      // Create a new section element
      const section = document.createElement("section");

      // Create the first div with class "icon"
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("icon");
      section.appendChild(iconDiv);

      const svg = document.createElement("img");
      svg.src = "imgs/" + arrays[i][4] + ".svg"; // Access the path to the image stored in the data
      iconDiv.appendChild(svg);

      // Create the second div with class "content"
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");
      section.appendChild(contentDiv);

      // Set the background color of the section using the 4th item in the current array
      section.style.backgroundColor = arrays[i][3];

      // Create a new caption element and add a class of "caption"
      const caption = document.createElement("p");
      caption.classList.add("caption");

      // Set the inner text of the caption to "Tap" followed by the current iteration number
      caption.innerText = "Tap " + (i + 1);

      // Append the caption to the content div
      contentDiv.appendChild(caption);

      // Create a new h2 element
      const h2 = document.createElement("h2");

      // Set the inner text of the h2 to the first item in the current array
      h2.innerText = arrays[i][0];

      // Append the h2 to the content div
      contentDiv.appendChild(h2);

      // Loop through each item in the current array, excluding the first and last 2 items
      for (let j = 1; j < arrays[i].length - 2; j++) {
        // Create a new p element
        const p = document.createElement("p");

        // Set the inner text of the p to the current item in the array
        p.innerText = arrays[i][j];

        // Append the p to the content div
        contentDiv.appendChild(p);
      }

      // Append the section to the container
      container.appendChild(section);
    }

  });
