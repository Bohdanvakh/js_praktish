// Basic example how super works

class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    bark() {
        super.speak();
        console.log('Woof!');
    }
}

const dog = new Dog();
dog.bark();

console.log('-------------------------');
// Example 2: using super in constructors

class NewAnimal {
    constructor(name) {
        this.name = name + " test";
    }
}

class NewDog extends NewAnimal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const newDog = new NewDog('Jack', 'White dog');
console.log(newDog.name);
console.log(newDog.breed);

// Example 3: real case of using super
// in this case we have item and taxes that uses super to get basic persent of tax

class BasicImportTax {
    constructor(persent) {
        this.persent = 0.06;
    }
}

class CarTax extends BasicImportTax {
    constructor(persent, additionalTaxPersent) {
        super(persent);
        this.additionalTaxPersent = 0.18; // 15%
    }

    totalTax() {
        return this.persent + this.additionalTaxPersent; // 21%
    }
}

class FoodTax extends BasicImportTax {
    constructor(persent, additionalTaxPersent) {
        super(persent);
        this.additionalTaxPersent = 0.05; // 5%
    }

    totalTax() {
        return this.persent + this.additionalTaxPersent; // 9%
    }
}

class BasicDomesticTax {
    constructor(persent) {
        this.persent = 0.18; // 18%
    }

    totalTax() {
        return this.persent;
    }
}


class Item {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }

    getPriceAfterTaxes(tax) {
        const rate = tax.totalTax();
        return this.price + this.price * rate
    }
}

const car = new Item('domestic', 'car', 11000);
const carTax = new CarTax();
const domesticTax = new BasicDomesticTax();

console.log(car.getPriceAfterTaxes(carTax));
console.log(car.getPriceAfterTaxes(domesticTax));
