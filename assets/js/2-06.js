// ------------JS Масиви----------

const arrays = [5, 8, 3, 6, -3, 1, -8, 10];
console.log('arrays :>> ', arrays);

// 1 Видалити останній і початковий елемент з масиву
arrays.pop();
arrays.shift();
console.log(arrays);

// додати елемент до початку і кінця
arrays.unshift(3);
arrays.push(15);
console.log(arrays);

// 3 Зробити копію масиву
const arrays2 = [...arrays];
// або
// const arrays3 = Array.from(arrays);
console.log('arrays2 :>> ', arrays2);


// 4 Вивести елементи з парними індексами.
function arraysFu(...arg) {
    let num = [];
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] % 2 === 0) {
            num.push(arg[i])
        }
    }
    return num;
}
const elIndex = arraysFu(5, 8, 3, 6, -3, 1, -8, 10);
console.log('elIdex :>> ', elIndex);


// 5 Знайти добуток елементів масиву.
const masDobutok = function () {
    let sum = 1; // Акумулятор
    for (let i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}
const dobutokResult = masDobutok(1, 2, 3, 4, 5, 6, 7);
console.log('dobutokResult :>> ', dobutokResult);



// 6 *Задано масив з описом телефонів з полями id, brand, model, color, price, RAM
const phones = [
    {
        id: 1,
        brand: "Apple",
        model: "iPhone 14 Pro",
        color: "Silver",
        price: 1200,
        RAM: 6
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S23 Ultra",
        color: "Black",
        price: 1100,
        RAM: 12
    },
    {
        id: 3,
        brand: "Xiaomi",
        model: "Redmi Note 12",
        color: "Blue",
        price: 300,
        RAM: 8
    },
    {
        id: 4,
        brand: "Google",
        model: "Pixel 7",
        color: "White",
        price: 600,
        RAM: 4
    },
    {
        id: 5,
        brand: "OnePlus",
        model: "10 Pro",
        color: "Green",
        price: 900,
        RAM: 12
    },
    {
        id: 6,
        brand: "Sony",
        model: "Xperia 5 IV",
        color: "Black",
        price: 950,
        RAM: 8
    },
    {
        id: 7,
        brand: "Samsung",
        model: "Galaxy A54",
        color: "White",
        price: 500,
        RAM: 8
    }
];

// Цей момент я зробив за домогою ШІ :)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("cart-phone");
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        const card = cards[i];
        card.getElementsByClassName("id")[0].textContent = `ID: ${phone.id}`;
        card.getElementsByClassName("brand")[0].textContent = `Brand: ${phone.brand}`;
        card.getElementsByClassName("model")[0].textContent = `Model: ${phone.model}`;
        card.getElementsByClassName("color")[0].textContent = `Color: ${phone.color}`;
        card.getElementsByClassName("price")[0].textContent = `Price: $${phone.price}`;
        card.getElementsByClassName("RAM")[0].textContent = `RAM: ${phone.RAM} GB`;
    }
});


