
// 1) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (наприклад, від 16 до 64)

// function isWorkingAgePerson(age) {
//     if (age >= 16 && age <= 64){
//         return true;
//     } else {
//         return false;
//     }
// }

// const people = isWorkingAgePerson(19);
// console.log('people :>> ', people);


// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку)

// function checkMultiplicity(a, b) {
//     if(b === 0) {
//         return false;
//     }
//     return a % b === 0;
// }

// console.log(checkMultiplicity(25, 5)); // true
// console.log(checkMultiplicity(15, 5)); // true
// console.log(checkMultiplicity(15, 3)); // true 
// console.log(checkMultiplicity(15, 4)); // false



// 3) Перевірка можливості існування трикутника.

// function triangle(a, b, c) {
//     if(a + b > c) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(triangle(3, 3, 5));



// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла)

// function triangleArea(a, b, c) {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return null;
//     }
//     const p = (a + b + c) / 2;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
// }
// console.log(triangleArea(3, 3, 5));



// 5) *Реалізувати функцію, яка приймає число і повертає булеве значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

function num(a) {
    if (a < 2) {
        return false;
    } else if (a === 2) {
        return true;
    }
    
    let i = 2;
    const limit = Math.sqrt(a);
    while(i <= limit) {
        if(a % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(num(4));
console.log(num(5));