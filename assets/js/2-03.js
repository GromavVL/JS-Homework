
// 1. Вивести числа від 25 до 0 (порядок зменшення).

const min_element = 0;
let number = 25;

// while (number >= min_element) {
//     console.log('number :>> ', number);
//     number--;
// }


// do {
//     console.log('number :>> ', number);
//     number--
// } while (number >= min_element)

for (let number = 25; number >= min_element; number--) {
    console.log('number :>> ', number);
}