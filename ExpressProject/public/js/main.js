const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("searchingCity");
const showRes = document.getElementById("city__name");
const currentTemp = document.getElementById("temp__val");
const tempStatus = document.getElementById("temp__status");
const showData = document.querySelector(".middle__layer");

// Function for getting an info of a search result
const getInfo = async (event) => {
  event.preventDefault();
  const cityNameVal = cityName.value;

  if (cityNameVal !== "") {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=b974154b70ff11af3b49d415da3e3d08`;
      const response = await fetch(url);
      const result = await response.json();
      //   pass data response data into array
      const resultArray = [result];

      // update value to the UI
      showRes.innerText = `${resultArray[0].name}, ${resultArray[0].sys.country}`;
      currentTemp.innerText = resultArray[0].main.temp;

      const tempMode = resultArray[0].weather[0].main;

      //   conditions to check the weather
      if (tempMode == "Clear") {
        tempStatus.innerHTML =
          "<i class='fas fa-sun' style='color: #ffe87c'></i>";
      } else if (tempMode == "Clouds") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempMode == "Rainy") {
        tempStatus.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>";
      }

      showData.classList.remove("hide_data");
    } catch (error) {
      console.error(error);
      showData.classList.add("hide_data");
    }
  } else {
    showRes.innerText = "Please enter a valid city name.";
    showData.classList.add("hide_data");
  }
};

submitBtn.addEventListener("click", getInfo);
