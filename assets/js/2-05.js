//------------JS Об'єкти-----------

const customer = {
    name: "Vladislav",
    surname: "Ilin",
    email: "vlad086367@gmail.com",
    password: "vl83he7ej",
    phone: "0989093542",
    address: {
        city: "Zaporizhzhia",
        street: "Hor'kivske shose",
        house: 32,
        flat: 58,
    },
};

// методи:

// виведення адреси
console.log(`Address: ${customer.address.city}, 
    ${customer.address.street},
    ${customer.address.house},
    ${customer.address.flat}`);

// зміна номера телефону
customer.phone = '4378353637';
console.log('customer :>> ', customer);

// Додати об'єкту властивість isMale
customer.isMale = true;

// Видалити у об'єкта властивість адреса
// delete customer.address;

// Зробити копії об'єкту customer двома різними способами
const customer2 = { ...customer };
const customer3 = Object.assign({}, customer);

// * Реалізувати картку з відомостями про customer
const userscart = document.querySelector('.cart')
const content = `<p><span>Name: </span> ${customer.name}</p>
            <p><span>Surname: </span> ${customer.surname}</p>
            <p><span>Email: </span> ${customer.email}</p>
            <p><span>Password: </span>${customer.password}</p>
            <p><span>Phone: </span>${customer.phone}</p>
            <p><span>Address: </span>${customer.address.city}, 
            ${customer.address.street}, ${customer.address.house}</p>`;
userscart.insertAdjacentHTML('beforeend', content);


// 2. Перебрати і вивести властивості об'єкту cat
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}
for (key in cat) {
    console.log('key :>> ', key);
}


// 3. Створити функцію-конструктор для створення об'єктів
function Book(auvtor, nazva, year_publication, price) {
    this.auvtor = auvtor;
    this.nazva = nazva;
    this.year_publication = year_publication;
    this.price = price;
}