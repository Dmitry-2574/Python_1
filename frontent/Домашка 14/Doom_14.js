const apiKey = "f39cb4ca7a02025caf00fd3a3aef7545";

const units = "metric";
const lang = "ru";
const input = document.getElementById('input');
const formButton = document.getElementById('formButton');
const pResult= document.getElementById('result');

// const airPollution = {
//     1: {
//         description: "Отличное",
//         bsClass: ""
//     }
// }

// Функция получения координат города по его названию
async function getGeoByCityName () {
    const cityName = input.value;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    const response = await fetch(url);
    
    if (response.ok) {
        const data = await response.json();
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
})


    
    

// // Текущая погода
// async function getCurWeather(city) {
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error ('Город не найден');
//         }
//     const data = await response.json();
//     return data;
//    }
//     catch (error) {
//     console.error("Ошибка получения погоды", error);
    
//    }
// };

// // Качество воздуха
// async function getAirWeather(latitude, longitude) {
//     const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
//     try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error ('Город не найден');
//         }
//     const data = await response.json();
//     return data;
//    }
//     catch (error) {
//     console.error("Ошибка получения погоды", error);
    
//    }
// };

// // Прогноз на 5 дней
// async function get5DayWeather(city) {
//     const url = `http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;
//     try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error ('Город не найден');
//         }
//     const data = await response.json();
//     return data;
//    }
//     catch (error) {
//     console.error("Ошибка получения погоды", error);
    
//    }
// };