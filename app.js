const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRouKnY_K7dQLbyEr_e6vfAmKHRuPA6daqKPZpZo1w5j9cgNqXJR61fZDY_89lfBkOEG9fzLDDgQreZ/pubhtml";

// Send an AJAX request to retrieve the data from the URL
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "document";
xhr.onload = function() {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // Get the table from the published Google Sheets URL
      const table = xhr.response.querySelector("table");

      // Get the table rows
      const rows = table.querySelectorAll("tr");

      // Initialize an empty array to store the data
      const data = [];

      // Loop through each row and extract the data
      for (const row of rows) {
        const cells = row.querySelectorAll("td");
        const rowData = [];
        for (const cell of cells) {
          rowData.push(cell.textContent);
        }
        data.push(rowData);
      }

      // Create a section for each row of data
      const sectionsContainer = document.querySelector("#sections");
      for (const [index, rowData] of data.entries()) {
        const section = document.createElement("div");
        section.classList.add("section");

        // Add a title to the section
        const title = document.createElement("h2");
        title.textContent = rowData[0];
        section.appendChild(title);

        // Add the other data points to the section
        for (let i = 1; i < rowData.length; i++) {
          const dataPoint = document.createElement("p");
          dataPoint.textContent = rowData[i];
          section.appendChild(dataPoint);
        }

        sectionsContainer.appendChild(section);
      }
    } else {
      console.error("Failed to retrieve data from the URL");
    }
  }
};
xhr.send();
