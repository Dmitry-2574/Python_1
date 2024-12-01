
// 1 пункт задания

let pokyPki = prompt("Введите список продуктов для покупки, через пробел ")
let ulResult = document.querySelector("#result")
let ulResult2 = document.querySelector("#result2")

// 2 пункт задания

let mas_pokyPki=pokyPki.split("-")
console.log(mas_pokyPki)

// 3 пункт задания

alert(`Список покупок состоит из: ${mas_pokyPki.length} продуктов`)
ulResult.innerHTML += `<li>${pokyPki}</li>`
let numProduct = parseInt(prompt(`Выберите номер продукта: от 1 до ${mas_pokyPki.length} `))
console.log(numProduct)


// 4 пункт задания

alert(`Выбранный вами продукт: ${mas_pokyPki[numProduct-1]}`)
let newProduct = prompt("На какой продукт хотите поменять? ")
console.log(newProduct)
// if (newProduct !==" "){
//     mas_pokyPki[numProduct-1] = newProduct
// }
mas_pokyPki.splice(numProduct-1, 1, newProduct)
console.log(mas_pokyPki)

// 5 пункт задания

mas_pokyPki.join(", ")
console.log(mas_pokyPki)
alert(`Обновленный список продуктов для покупки: ${mas_pokyPki}`)
ulResult2.innerHTML += `<li>${mas_pokyPki}</li>`
