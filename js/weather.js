const API_KEY = "ae8558eb8e1bde0794a6ee4d22d0b008";
const weatherIcon = document.getElementById("weather-icon");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = data.main.temp;
      const weather = data.weather[data.weather.length - 1];
      city.innerText = data.name;
      weatherContainer.innerHTML = `${temp} &#176;C ${weather.main}`;

      weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
