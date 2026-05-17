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

class BaseTax {
    constructor(basePersent) {
        this.basePersent = basePersent;
    }

    totalTax() {
        return this.basePersent;
    }
}

class ImportTax extends BaseTax {
    constructor(additionalTaxPersent) {
        super(0.06); // 6%
        this.additionalTaxPersent = additionalTaxPersent;
    }

    totalTax() {
        return super.totalTax() + this.additionalTaxPersent;
    }
}

class CarImportTax extends ImportTax {
    constructor() {
        super(0.18); // additional tax for cars
    }
}

class FoodImportTax extends ImportTax {
    constructor() {
        super(0.05); // additional tax for food
    }
}

class DomesticTax extends BaseTax {
    constructor() {
        super(0.18); // 18%
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
const carImportTax = new CarImportTax();
const domesticTax = new DomesticTax();

console.log(car.getPriceAfterTaxes(carImportTax));
console.log(car.getPriceAfterTaxes(domesticTax));
