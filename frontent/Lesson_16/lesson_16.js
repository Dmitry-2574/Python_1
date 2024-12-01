// Lesson 16

// Навигация по Dom древу

// parentElement - возвращает родительский элемент
// children - возвращает коллекцию дочерних элементов
// firstElementChild - возвращает первый дочерний элемент
// lastElementChild - возвращает последний дочерний элемент
// nextElementSibling - возвращает следующий соседний элемент
// previousElementSibling - возвращает предыдущий соседний элемент
// closest() - ищет ближайший родительский элемент, соответствующий селектору
// hasChildNodes() - проверяет наличие дочерних узлов
// querySelectorAll() - возвращает все подходящие элементы внутри текущего
// querySelector() - возвращает первый подходящий элемент
// parentNode - возвращает родительский узел (может быть не только элементом)
// childNodes - возвращает коллекцию всех дочерних узлов, включая текстовые
// nextSibling - возвращает следующий соседний узел
// previousSibling - возвращает предыдущий соседний узел


// Практика!

// Выберите первую строку таблицы (не считая заголовок) и покрасьте её фон в светло-голубой цвет. Селектор: document.querySelector('tbody') Метод: .firstElementChild.style.backgroundColor = 'lightblue'
//  document.querySelector('tbody').firstElementChild.style.backgroundColor = 'green'

let tbody = document.querySelector('tbody');
console.log(tbody);

let tbodyFirstChild = tbody.firstElementChild;
console.log(tbodyFirstChild);

tbodyFirstChild.style.background = 'lightblue';

tbody1 = tbodyFirstChild.children;

console.log(tbody1);

Array.from(tbody1).forEach((element) => {
    element.style.backgroundColor = 'red';
});




// Найдите последнюю строку таблицы и сделайте текст в ней жирным. Селектор: document.querySelector('tbody') Метод: .lastElementChild.style.fontWeight = 'bold'

let ab1 = document.querySelector('tbody');

let ab2 = ab1.lastElementChild.style.fontWeight = 'bold';



// Выберите строку с id="3-row" и покрасьте текст во всех её ячейках в красный цвет. Селектор: document.getElementById('3-row') Метод: .children.forEach(cell => cell.style.color = 'red')

let td1 = document.getElementById('row-3');

let td2 = td1.children;

Array.from(td2).forEach((cell) => {
    cell.style.color ='red';
});

// Найдите ячейку с текстом "closest()" и покрасьте фон её родительской строки в желтый цвет. Селектор: document.querySelector('td:contains("closest()")') Метод: .parentElement.style.backgroundColor = 'yellow'

// let ty1 = document.querySelector('td:contains("closest()")');
// ty1.parentElement.style.backgroundColor = 'yellow';

// let = document.querySelectorAll("td");
// console.log("Все ячейки", allTDs);)

// let clostestTd = Array.from(allTD).find((td) =>
//     td.textContent.includes("closest()")
// );

// clostestTd.parentElement.style.backgroundColor = 'yellow';

// const targetCells = document.querySelectorAll('td:contains("closest()")');

// targetCells.forEach(cell => {
//   cell.parentElement.style.backgroundColor = 'yellow';
// });

// Выберите все чётные строки таблицы и установите для них светло-серый фон. Селектор: document.querySelectorAll('tbody tr:nth-child(even)') Метод: .forEach(row => row.style.backgroundColor = 'lightgray')

// Найдите первую ячейку в строке "nextElementSibling" и покрасьте следующую за ней ячейку в зелёный цвет. Селектор: document.querySelector('td:contains("nextElementSibling")') Метод: .nextElementSibling.style.backgroundColor = 'green'

// Выберите последнюю ячейку в предпоследней строке и покрасьте предыдущую ячейку в оранжевый цвет. Селектор: document.querySelectorAll('tbody tr') Метод: [length-2].lastElementChild.previousElementSibling.style.backgroundColor = 'orange'

// ** Найдите строку, содержащую "hasChildNodes()", и если у неё есть дочерние элементы, покрасьте их все в фиолетовый цвет. Селектор: document.querySelector('tr:contains("hasChildNodes()")') Метод: if (el.hasChildNodes()) Array.from(el.children).forEach(child => child.style.color = 'purple')


// ** Выберите первую ячейку первой строки и, двигаясь вниз по диагонали, покрасьте каждую следующую ячейку в синий цвет. Начальный селектор: document.querySelector('tbody tr:first-child td:first-child') Метод: Цикл с .nextElementSibling и .parentElement.nextElementSibling

// Найдите ячейку с текстом "querySelectorAll()" и, используя метод closest(), покрасьте границу всей таблицы в красный цвет. Селектор: document.querySelector('td:contains("querySelectorAll()")') Метод: .closest('table').style.border = '2px solid red'

{/* <form>  <div class="mb-3">    <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">    <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>  </div>  <div class="mb-3">    <label for="exampleInputPassword1" class="form-label">Пароль</label>    <input type="password" class="form-control" id="exampleInputPassword1">  </div>  <div class="mb-3 form-check">    <input type="checkbox" class="form-check-input" id="exampleCheck1">    <label class="form-check-label" for="exampleCheck1">Проверить меня</label>  </div>  <button type="submit" class="btn btn-primary">Отправить</button></form> */}

