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

// Вивести список повних імен користувачів.
User.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`;
}

// Отримати масив користувачів, які не підписані (not subscribed)
User.prototype.getIsSubscribed = function() {
    return this.isSubscribed;
}

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
User.prototype.getAgeName = function() {
    if(this.isMale !== true) {
        if (this.age >= 6 && this.age <= 18){
            return `${this.firstName} ${this.lastName}`;
        }
    }
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

const getName = users.map(user => user.getFullName());
console.table(getName);


const subscribedUsers = users.filter(user => user.getIsSubscribed());
console.table(subscribedUsers);


const getAgeNames = users.filter(user => user.getAgeName());
console.table(getAgeNames);
