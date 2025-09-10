//------------JS Обробка помилок----------

// 1. Для рекурсивної функції піднесення числа до степеня
function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("Аргументи повинні бути числами!!!!!");
  }
  if (!Number.isInteger(exponent)) {
    throw new RangeError("Показник степеня повинен бути цілим числом");
  }
  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}

try {
  console.log(pow(2, 3));
  console.log(pow("3", 5));
} catch (err) {
  console.log("err :>> ", err);
}

// 2. *Реалізувати функцію для валідації імейлу
// function pochta(email) {
//     if(!email.includes('@') || !email.includes('.com')){
//         throw new RangeError('Email має містити символ @ або .com');
//     }
//     return email;
// }
// try {
//     const user = pochta('vlad@gmail.com');
//     console.log('user :>> ', user);
// }catch (err) {
//     console.log(err);
// }
