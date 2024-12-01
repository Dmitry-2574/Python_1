const apiKey = "f39cb4ca7a02025caf00fd3a3aef7545";

const units = "metric";
const lang = "ru";
const input = document.getElementById('input');
const formButton = document.getElementById('formButton');
const pResult= document.getElementById('result');




// Функция получения координат города по его названию
async function getGeoByCityName () {
    const cityName = input.value;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    const response = await fetch(url);
    
    if (response.ok) {
        const data = await response.json();

      // Проверка на пустой массив
      if (data.length === 0) {
        alert('Город не найден');
        throw new Error('Город не найден');
      }


        clearDana = {
            lat: data[0].lat,
            lon: data[0].lon
        };
        return clearDana
    } else {
    console.error("Ошибка получения погоды", error);
    throw new Error(`HTTP-код ошибки: ${response.status}`);
    }
};

// Формирования объектов, ключи - названия маршрутов, значения - адресами для запроса к API 
// Текущая погода (принимает так же язык и систему измерения) - https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Прогноз на 5 дней - api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// Состояния воздуха - http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
function getUrlByInput(lat, lon) {
    let weatherUrlsQbject = {
        currentWeather: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`,
        forecastWeather: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`,
        airPollution: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    }

    return weatherUrlsQbject;
}



// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}



async function getWeather(url) {
   const response = await fetch(url);
    
        if (response.ok) {
          console.log("Получен успешный ответ от URL: " + url);
          return await response.json();
        } else {
          console.error("Ошибка при получении данных от URL: " + url);
          throw new Error(`HTTP-код ошибки: ${response.status}`);
        }
      };
  

formButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const cityName = input.value;
    localStorage.setItem('cityName', cityName);
    displayAllWeather(cityName);
});

document.addEventListener(



async function displayAllWeather(cityName) {
    let geoData = await getGeoByCityName();
    let urlsQbject = getUrlByInput(geoData.lat, geoData.lon);
    console.log(urlsQbject);
    


let weartherData = await Promise.all([
    getWeather (urlsQbject.currentWeather),
    getWeather(urlsQbject.forecastWeather),
    getWeather(urlsQbject.airPollution)
]);
let resultWeatherData = {
    currentWeather: weartherData[0],
    forecastWeather: weartherData[1],
    airPollution: weartherData[2]
}
console.log(resultWeatherData);
}








function getIconUrl(iconCode, size) {
  if (size === undefined) {
    size = "";
  }
  else if (size === "4x") {
    size = "@4x";
  }
  else if (size === "2x") {
    size = "@2x";
  }
  return `http://openweathermap.org/img/wn/${iconCode}${size}.png`;
};




// Функция по дабавлению наследников 2 параграфа

function displayCurrenntWeather (currenntWeather) {
  const cityName = currenntWeather.name;
  const iconId = currenntWeather.weather[0].icon;
  const iconUrl = getIconUrl(iconId, "4x");
  const temp = currenntWeather.main.temp;
  const feelsLike = currenntWeather.main.feels_like;
  const windSpeed = currenntWeather.main.wind.speed;

  firstP = document.createElement('p');
  iconImg = document.createElement('img');
  iconImg.src = iconUrl;
  firstP.appendChild(iconImg);
  textContentFirstP = `Город: ${cityNames}`;
  currentWeatherDiv.appendChild(firstP);

  secontContent = `<p>Температура: ${temp} </p>`
}


// Функция рисует таблицу

function displayForecastWeather(forecastWeather) {

  // Создаем элементы
  const table = document.createElement('table');

  // Добавляем классы
  table.classList.add('table', 'table-striped', 'table-hover');

  // Первая строка
  const firstRow = "<tr><th>Дата</th><th>Время</th><th>Иконка</th><th>Температура</th><th>Ветер</th></tr>"
  table.innerHTML = firstRow;

  for (let weatherObj of forecastWeather.list) {
    const dataTime = forecastWeather.dt_txt;
    const idIcon = forecastWeather.weather[0].icon;
    const iconUrl = getIconUrl(idIcon);
    const temp = forecastWeather.main.temp;
  };



  function showModal(message) {
    const modalHtml = `
      <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="errorModalLabel">Ошибка</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${message}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('errorModal'));
    modal.show();
  
    document.getElementById('errorModal').addEventListener('hidden.bs.modal', function () {
      this.remove();
    });
  }
