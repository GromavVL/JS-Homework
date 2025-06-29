
// 1. Задане значення isDay (true - зараз день, false - зараз ніч).

// const isDay = false;

// let color = null;
// if (isDay) {
//     color = "black";
// } else {
//     color = 'white';
// }

// if (isDay) {
//     document.writeln(`<p><span style="background-color: white; color:${color}">Світла тема</span></p>`);
// } else {
//     document.writeln(`<p><span style="background-color: black; color:${color}">Темна тема</span></p>`);
// }




// 2. Відомо, чи користувач онлайн (isOnline).

// const isOnline = false;

// let color = null;
// if (isOnline){
//     color = 'green';
// } else {
//     color = 'red';
// }

// if (isOnline) {
//     document.writeln(`<p>User is <span style="color:${color}">online</span></p>`);
// } else {
//     document.writeln(`<p>User in <spa style="color:${color}">offline</spa</p>`)
//     document.writeln(`<p>Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет</p>`)
// }


// 3. Користувач вводить суму покупки.

// const a = Number(prompt("Введіть сумму покупки"));
// let znyzhka = 0;


// if ( a > 800) {
//     znyzhka = 0.05;
// } else if (a > 500) {
//     znyzhka = 0.03;
// }
// const suma = a - (a * znyzhka);

// console.log('Сумма покупки: ', a);
// console.log('Сумма зі знижкою: ', suma);


// Завдання на switch..case

let date = prompt('Введіть номер тижня');

switch (date) {
    case '1':
        alert('Понеділок');
        break;
    case '2':
        alert('Вівторок');
        break;
    case '3':
        alert('Середа');
        break;
    case '4':
        alert('Четверг');
        break;
    case '5':
        alert('Пятниця');
        break;
    case '6':
        alert('Субота');
        break;
    case '7':
        alert('Неділля');
        break;
    default:
        alert('Було введено некоректний номер тижня!!!')
}