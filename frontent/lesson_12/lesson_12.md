| Метод | Описание | Аргументы | Возвращаемое значение |
|-------|----------|-----------|------------------------|
| `push()` | Добавляет один или несколько элементов в конец массива | Элементы для добавления | Новая длина массива |
| `pop()` | Удаляет последний элемент из массива | - | Удаленный элемент |
| `unshift()` | Добавляет один или несколько элементов в начало массива | Элементы для добавления | Новая длина массива |
| `shift()` | Удаляет первый элемент из массива | - | Удаленный элемент |
| `indexOf()` | Возвращает первый индекс, по которому данный элемент найден в массиве | Искомый элемент, [начальный индекс] | Индекс элемента или -1 |
| `lastIndexOf()` | Возвращает последний индекс, по которому данный элемент найден в массиве | Искомый элемент, [начальный индекс] | Индекс элемента или -1 |
| `includes()` | Определяет, содержит ли массив определенный элемент | Искомый элемент, [начальный индекс] | `true` или `false` |
| `find()` | Возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию | Функция-колбэк | Найденный элемент или `undefined` |
| `findIndex()` | Возвращает индекс первого элемента в массиве, который удовлетворяет условию | Функция-колбэк | Индекс найденного элемента или -1 |
| `forEach()` | Выполняет указанную функцию один раз для каждого элемента в массиве | Функция-колбэк | `undefined` |
| `map()` | Создает новый массив с результатом вызова указанной функции для каждого элемента | Функция-колбэк | Новый массив |
| `filter()` | Создает новый массив со всеми элементами, прошедшими проверку | Функция-колбэк | Новый массив |
| `reduce()` | Применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению | Функция-колбэк, [начальное значение] | Результат свертки массива |
| `some()` | Проверяет, удовлетворяет ли хоть один элемент массива условию | Функция-колбэк | `true` или `false` |
| `every()` | Проверяет, удовлетворяют ли все элементы массива условию | Функция-колбэк | `true` или `false` |
| `slice()` | Возвращает новый массив, содержащий копию части исходного массива | [начало], [конец] | Новый массив |
| `splice()` | Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые | индекс, кол-во для удаления, [элементы для добавления] | Массив удаленных элементов |
| `concat()` | Возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями | Массивы и/или значения для объединения | Новый массив |
| `join()` | Объединяет все элементы массива в строку | [разделитель] | Строка |
| `sort()` | Сортирует элементы массива на месте и возвращает отсортированный массив | [функция сравнения] | Отсортированный массив |
| `reverse()` | Обращает порядок следования элементов массива на месте | - | Измененный массив |