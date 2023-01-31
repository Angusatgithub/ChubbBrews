// Get the container for all sections
const sectionsContainer = document.getElementById("section-container");

// Get all sections within the container
const sections = sectionsContainer.getElementsByClassName("section");

// URL of the Google Sheets API
const apiUrl = "https://spreadsheets.google.com/feeds/list/1gC51el4lpJ36Ij_TWq12ApLQ3hvj9NM9J5Dhc3vjfA8/0/public/values?alt=json";

// Function to fetch data from the API
async function getData() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Get all entries from the data
    const entries = data.feed.entry;

    // Update sections with the data from the entries
    updateSections(entries);
  } catch (error) {
    console.error(error);
  }
}

// Function to update the sections with the data from the entries
function updateSections(entries) {
  // Loop through all entries
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const section = sections[i];

    // Get the title element for the section
    const title = section.getElementsByClassName("section-title")[0];

    // Get all data point elements for the section
    const dataPoints = section.getElementsByClassName("data-point");

    // Update the title and data points with the values from the entry
    title.innerHTML = entry.gsx$title.$t;
    dataPoints[0].innerHTML = entry.gsx$datapoint1.$t;
    dataPoints[1].innerHTML = entry.gsx$datapoint2.$t;
    dataPoints[2].innerHTML = entry.gsx$datapoint3.$t;
  }
}

// Call the getData function when the DOM content has loaded
document.addEventListener("DOMContentLoaded", getData);
