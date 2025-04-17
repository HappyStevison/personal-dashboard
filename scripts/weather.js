// scripts/weather.js
async function getWeather() {
    // Get free API key from https://openweathermap.org/api
    const apiKey = 'YOUR_KEY';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    
    document.querySelector('#weather-widget .weather-info').innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p>${Math.round(data.main.temp)}°C in ${data.name}</p>
      <small>${data.weather[0].description}</small>
    `;
  }