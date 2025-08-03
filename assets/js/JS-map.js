// ----------JS Map--------

const map1 = new Map();
map1.set(1, 'first').set(2, 'second').set(3, 'third');

// Отримайте кількість елементів
console.log('Кількість елементів :>> ', map1.size);

// Додати та видалити елемент
map1.set(4, 'fourth');
map1.delete(4);

// Здійсніть пошук за ключом
console.log('Пошук за ключом :>> ', map1.get(3));

// Перевірити, чи є в мапі числівник для числа 2
console.log(map1.has(2));

// Отримайте список ключів та значень окремо
const mapKeys = [...map1.keys()];
const mapValue = [...map1.values()];
console.log('mapKeys :>> ', mapKeys);
console.log('mapValue :>> ', mapValue);



const m1 = new Map();
m1.set('1', 'first').set('3', 'third');
const text = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';


const mapText = function (text) {
    const result = text.split(' ');
    console.log('result :>> ', result);
    const arr1 = result.map(function(item){
        if(m1.has(item)) {
            return m1.get(item)
        } else {
            return item;
        }
    });
    return arr1.join(' ');
}
console.log(mapText(text));