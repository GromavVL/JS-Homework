// ---------------JS Спадкування------------

class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        this._dimensions = dimensions;
        this._brand = brand;
        this._model = model;
        this._manufactureDate = manufactureDate;
    }
    getFullInfo() {
        return ` [Марка - ${this._brand}], [Модель - ${this._model}], [Габарити - ${this._dimensions}], [Вік виробництва - ${this._manufactureDate}]`;
    }
    //  getAge() - повертає кількість років із дня виробництва
    get getAge() {
        return new Date().getFullYear() - this._manufactureDate;
    }
}
const car = new Vehicle('2T', 'Audi', 'A8', 2020);
console.log('car :>> ', car.getFullInfo());

class PassengerTransport extends Vehicle {
    constructor(passengerLimit, passengerCount, brand, model, manufactureDate) {
        super(brand, model, manufactureDate);
        this._passengerLimit = passengerLimit;
        this._passengerCount = passengerCount;
    }
    addPassenger() {
        if (this._passengerCount < this._passengerLimit) {
            this._passengerCount++;
            return true;
        } else {
            return false;
        }
    }
    getFullInfo() {
        return `[Марка - ${this._brand}], [Модель - ${this._model}], [Кількість місць - ${this._passengerLimit}], [Вік виробництва - ${this._manufactureDate}]`;
    }
}
const car2 = new PassengerTransport(5, 3, '2T', 'Mercedes', 'GT63', 2019);
console.log('car2 :>> ', car2.getFullInfo());

class FreightTransport extends Vehicle {
    constructor(capacity, brand, model, manufactureDate) {
        super(brand, model, manufactureDate);
        this._capacity = capacity;
    }
    getFullInfo() {
        return ` [Марка - ${this._brand}], [Модель - ${this._model}], [Вік виробництва - ${this._manufactureDate}], [Вантажопідйомність - ${this._capacity}]`;
    }
    checkLoadingPossibility(weight) {
        return weight <= this._capacity;
    }
}
const car3 = new FreightTransport(2000, 'Dodge', 'RAM 1500', 2021);
console.log('car3 :>> ', car3.getFullInfo());