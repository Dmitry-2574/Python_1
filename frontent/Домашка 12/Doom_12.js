let weatherData = {"coord":{"lon":30.2642,"lat":59.8944},"weather":[{"id":800,"main":"Clear","description":"ясно","icon":"01n"}],"base":"stations","main":{"temp":15.03,"feels_like":14.65,"temp_min":14.08,"temp_max":15.03,"pressure":1011,"humidity":79,"sea_level":1011,"grnd_level":1009},"visibility":10000,"wind":{"speed":3,"deg":150},"clouds":{"all":0},"dt":1727203506,"sys":{"type":2,"id":197864,"country":"RU","sunrise":1727149703,"sunset":1727193203},"timezone":10800,"id":498817,"name":"Санкт-Петербург","cod":200}

function parseWeatherData(weather) {
  let clar = {
    name: weather.name,
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    feelsLike: weather.main.feels_like,
    windSpeed: weather.wind.speed,
   
  }
  return clar;
}

function renderWeatherData(weatherData) {

  const weatherContainer = document.getElementById('weather-container');
            
  const title = document.createElement('h2');
  title.textContent = `Сейчас в г. ${weatherData.name}: ${weatherData.description}`;
  weatherContainer.appendChild(title);

  const tempInfo = document.createElement('p');
  tempInfo.textContent = `Температура: ${weatherData.temperature}°C (ощущается как ${weatherData.feelsLike}°C)`;
  weatherContainer.appendChild(tempInfo);

  const windInfo = document.createElement('p');
  windInfo.textContent = `Скорость ветра: ${weatherData.windSpeed} м/с`;
  weatherContainer.appendChild(windInfo);

  
}

const parsedWeatherData = parseWeatherData(weatherData);

document.addEventListener('DOMContentLoaded', () => {
  const weatherContainer = document.getElementById('weather-container');
  

  renderWeatherData(parsedWeatherData);

});


