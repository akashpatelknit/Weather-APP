const aa = document.querySelector(".a span");
let target1 = "new delhi";
const fetchData1 = async (target1) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=56bd3d15a0dd4e68808123820231102&q=${target1}&days=1&aqi=yes&alerts=no`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Destructuring
    const {
      forecast: {
        forecastday: {
          0: {
            day: {
              air_quality: {
                co, no2, o3, pm2_5
              }
            }
          }
        }
      },
      
     
    } = data;

    // Calling update Dom Function
    updateDom(co, no2, o3, pm2_5);
  } catch (error) {
    // alert("Location not found");
  }
};

// Function to update Dom
function updateDom(co, no2) {
  aa.innerText = "CO-"+co;
}

fetchData1(target1);
function search(e) {
  e.preventDefault();

  target = searchField.value;

  fetchData1(target1);
}