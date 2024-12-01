const apiKey = "23496c2a58b99648af590ee8a29c5348";

const units = "metric";
const lang = "ru";
const Input = document.getElementById('input');
const formButton = document.getElementById('button');



window.addEventListener('DommContentLoaded', () => {
    const savedCity = localStorage.getItem('city');
    if (savedCity) {
        Input.value = savedCity;
    }
});


formButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    
    const city = Input.value.trim();
    if (city==='') {
        alert('Введите город');
        return;
    }
       
        localStorage.setItem('city', city);

        
    });
    