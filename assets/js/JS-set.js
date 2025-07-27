// ------------JS Set-----------

// 1. Створіть колекцію Set із початковими значеннями 1, 2, 3
const set1 = new Set([1, 2, 3]);

// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4
console.log(set1.has(3)); //True
console.log(set1.has(4)); //False

// Додайте ще кілька елементів
set1.add(5).add(6).add(7);

let suma = 0;
// За допомогою циклу for-of переберіть колекцію та виведіть у консоль
for (const key of set1) {
    console.log('key :>> ', key);
    // Знайдіть суму цих значень
    suma += key;
}
console.log('suma :>> ', suma);

// Видаліть елемент 2
set1.delete(2);

// Очистіть усю колекцію.
set1.clear();

// 2. З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const arr = [1, 6, 9, 4, 9, 1, 5, 6];
const set2 = new Set(arr)
console.log('set2 :>> ', set2);

// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const set3 = [...new Set([...arr1, ...arr2])];
console.log('ser3 :>> ', set3);


// 3
const messages = [
    { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

const user = [...new Set(messages.map(u => u.name))];
console.log('user :>> ', user);

const userMap = new Map();