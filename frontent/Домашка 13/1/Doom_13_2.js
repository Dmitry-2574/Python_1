// Получение элементов DOM
const Input = document.getElementById('input');
const Button = document.getElementById('button');


// Этот код JavaScript использует метод document.getElementById() для получения ссылки на HTML-элемент по его ID. 

// Разбор кода:

// - const:  Ключевое слово const объявляет константу — переменную,  значение которой  не  может  быть  изменено  после  инициализации.  
// - Input:  Имя  переменной,  которое  будет  хранить  ссылку  на  HTML-элемент.  
// - document.getElementById('input'):  Метод  document.getElementById()  ищет  в  HTML-документе  элемент  с  уникальным  идентификатором  input  и  возвращает  ссылку  на  него.

// Итого:

// Этот код  задает  переменную  Input  и  присваивает  ей  ссылку  на  HTML-элемент  с  идентификатором  input. Теперь  вы  можете  использовать  переменную  Input  для  работы  с  этим  элементом  в  JavaScript,  например,  для  получения  его  значения,  изменения  его  содержимого  или  добавления  событий.

// Загрузка данных из локального хранилища при загрузке страницы
window.addEventListener('DommContentLoaded', () => {
    const savedCity = localStorage.getItem('city');
    if (savedCity) {
        Input.value = savedCity;
    }
});
// Объяснение кода:

// 1. window.addEventListener('DOMContentLoaded', () => { ... });  - Эта строка добавляет обработчик событий для события DOMContentLoaded. Это означает, что код внутри фигурных скобок выполнится, когда весь DOM (Document Object Model) полностью загрузится.
// 2. const savedCity = localStorage.getItem('city'); -  Здесь мы получаем значение, сохраненное в локальном хранилище браузера под ключом 'city'. Если значение не было сохранено, savedCity будет равен null.
// 3. if (savedCity) { ... } -  Эта проверка выполняет код внутри фигурных скобок, если savedCity не равен null. Это означает, что ранее город был сохранен.
// 4. searchInput.value = savedCity; -  В этой строке мы устанавливаем значение поля поиска (searchInput) на то, что было сохранено в локальном хранилище. 

// Пример использования:

// 1. Пользователь вводит город в поле поиска.
// 2. После отправки запроса код сохраняет введенный город в локальное хранилище под ключом 'city'.
// 3. При следующем посещении сайта код извлекает город из локального хранилища и автоматически заполняет поле поиска.

// Дополнительно:

//  `localStorage` -  Это API браузера для хранения небольших объемов данных на стороне клиента. 
//  searchInput -  Это имя переменной, которая должна быть объявлена где-то выше в коде и представлять собой ссылку на элемент поля поиска.

// Важно:

// Этот код предполагает, что вы уже имеете реализованную функцию, которая сохраняет введенный город в локальное хранилище после его ввода.


// Обработка события нажатия на кнопку поиска
Button.addEventListener('click', (event) => {
    // Блокировка стандартного поведения
    event.preventDefault();
    // Проверка поля ввода
    const city = Input.value.trim();
    if (city==='') {
        alert('Введите город');
        return;
    }
        // Сохраняем текущую город в локальное хранилище
        localStorage.setItem('city', city);

        
    });
    // Объяснение кода:

    // 1. Button.addEventListener('click', (event) => { ... }); - Эта строка добавляет обработчик событий для события click к элементу Button.  Код внутри фигурных скобок выполнится при каждом клике по кнопке.
    // 2. event.preventDefault(); -  Эта строка предотвращает стандартное поведение элемента по умолчанию, которое может быть, например, отправкой формы.
    // 3. const city = Input.value.trim(); -  Здесь мы извлекаем значение из поля ввода (Input.value), удаляем пробелы в начале и конце строки (trim()) и сохраняем полученное значение в переменной city.
    // 4. if (city==='') { ... } -  Эта проверка проверяет, не пустое ли значение city. Если значение пустое, выводится сообщение об ошибке (alert('Введите город');) и функция завершает свою работу (return;).
    // 5. localStorage.setItem('city', city); -  Если город не пустой, то эта строка сохраняет значение city в локальное хранилище браузера под ключом 'city'.
    
    // Пример использования:
    
    // 1. Пользователь вводит город в поле ввода (Input).
    // 2. Пользователь нажимает кнопку Button.
    // 3. Код проверяет, введено ли значение города. 
    // 4. Если значение не пустое, оно сохраняется в локальное хранилище.
    
    // Дополнительно:
    
    //  `Button` и `Input` -  Это имена переменных, которые должны быть объявлены где-то выше в коде и представлять собой ссылки на элементы HTML кнопки и поля ввода соответственно.
    //  localStorage.setItem() -  Эта функция API браузера сохраняет данные в локальное хранилище.


