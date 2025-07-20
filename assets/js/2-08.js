// ------------JS Замикання------------

// function customCounter1(a) {
//     let i = 0;
//     return function () {
//         debugger
//         i += a;
//         return i;
//     }
// }

// const myCounter = customCounter1(5);
// const result1 = myCounter(); // => 5
// const result2 = myCounter(); // => 10
// const result3 = myCounter(); // => 15

// console.log('result1 :>> ', result1);
// console.log('result2 :>> ', result2);
// console.log('result3 :>> ', result3);



function initialValue(a, b) {
    let sum = a;
    return function () {
        debugger
        sum += b;
        return sum;
    }
}

const myCounter = customCounter2 (1, 5);
const result1 = myCounter(); // => 6
const result2 = myCounter(); // => 11
const result3 = myCounter(); // => 16
console.log('result1 :>> ', result1);
console.log('result2 :>> ', result2);
console.log('result3 :>> ', result3);