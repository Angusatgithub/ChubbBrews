var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + '1gC51el4lpJ36Ij_TWq12ApLQ3hvj9NM9J5Dhc3vjfA8' + '/values/' + 'Tap_list' + '?alt=json&key=' + 'AIzaSyAn545aPb1YXYJOnVkPX_VNunHwUGvwoGk';
let arrays;
const container = document.getElementById("container");

  fetch(url)
  .then(response => response.json())
  .then(data => {
    arrays = data.values;
    for (let i = 0; i < arrays.length; i++) {
      const section = document.createElement("section");
      section.style.backgroundColor = arrays[i][3];

      for (let j = 0; j < arrays[i].length - 1; j++) {
        const p = document.createElement("p");
        p.innerText = arrays[i][j];
        section.appendChild(p);
      }

      container.appendChild(section);
    }
  });

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     arrays = data.values;
//     console.log(arrays);
//   });


//   for (let i = 0; i < arrays.length; i++) {
//     const section = document.createElement("section");
  
//     for (let j = 0; j < arrays[i].length; j++) {
//       const p = document.createElement("p");
//       p.innerText = arrays[i][j];
//       section.appendChild(p);
//     }
  
//     container.appendChild(section);
//   }