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
    for(let i = 0; i < arg.length; i++) {
        if(arg[i] % 2 === 0) {
            num.push(arg[i])
        }
    }
    return num;
}
const elIndex = arraysFu(5, 8, 3, 6, -3, 1, -8, 10);
console.log('elIdex :>> ', elIndex);


// 5 Знайти добуток елементів масиву.
const masDobutok = function() {
    let sum = 1; // Акумулятор
    for(let i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}
const dobutokResult = masDobutok(1, 2, 3, 4, 5, 6, 7);
console.log('dobutokResult :>> ', dobutokResult);