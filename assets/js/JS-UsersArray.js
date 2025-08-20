//-----------JS Users array---------

function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const users = [];
for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5
    );
    users.push(user);
}
console.table(users);

// Вивести список повних імен користувачів.
Array.prototype.getFullName = function () {
    return this.map(user => `${user.firstName}, ${user.lastName}`);
}
console.table(users.getFullName());

// Отримати масив користувачів, які не підписані (not subscribed)
const notsubscribed = users.filter(user => !user.isSubscribed);
console.table(notsubscribed);

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const isMaleSchool = users
    .filter(user => !user.isMale && user.age >= 6 && user.age <= 18)
    .map(user => `${user.firstName}, ${user.lastName}`);
console.table(isMaleSchool);


// Змінити email користувачу з id 2
// const foundIndex = users.findIndex(user => user.id === 2);
// users[foundIndex] = 'newemail@gmail.com';

// Видалити з масиву користувача з email  useremail5@gmail.com
const filteredUsers = users.filter(user => user.email !== 'useremail0@gmail.com');
console.table(filteredUsers);

// * Знайти середній вік користувачів
const sumAge = users.reduce((sum, user) => sum + user.age, 0);
const avgSum = sumAge / users.length;
console.table(avgSum);

// * Впорядкувати користувачів за віком
function compareNumeric(a, b) {
    if (a.age > b.age) return 1;
    if(a.age === b.age) return 0;
    if (a.age < b.age) return -1;
}
console.table(users.sort(compareNumeric));