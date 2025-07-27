// ---------------JS Спадкування------------

class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        this._dimensions = dimensions;
        this._brand = brand;
        this._model = model;
        this._manufactureDate = manufactureDate;
    }
    getFullInfo() {
        return `[Габарити - ${this._dimensions}], [Марка - ${this._brand}], [Модель - ${this._model}], [Дата виробництва - ${this._manufactureDate}]`;
    }
    //  getAge() - повертає кількість років із дня виробництва, return за допомою ШІ)
    get getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._manufactureDate;
    }
}
const car = new Vehicle('2T', 'Audi', 'A8', 2020);
console.log('car :>> ', car.getAge);

class PassengerTransport extends Vehicle{
    constructor(passengerLimit, passengerCount, dimensions, brand, model, manufactureDate) {
        super(dimensions, brand, model, manufactureDate);
        this._passengerLimit = passengerLimit;
        this._passengerCount = passengerCount;
    }
    addPassenger() {
        
    }
}