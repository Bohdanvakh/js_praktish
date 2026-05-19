// yield працює тільки всередині генераторів (function*)
// він ставить функцію на паузу і повертає значення назовні
// в той час як звичайна функція виконує все і одразу

function* myOwn() {
    yield console.log('Lorem');
    yield console.log('ipsum');
}

const myFunc = myOwn();

myFunc.next(); // first returns 'Lorem'
myFunc.next(); // then returns ipsum

// infinity counter example

function* infinityCounter() {
    let i = 0;
    while (true) { // infinity sycle but it will not break because of yield.
        yield i++; // it will stop here each time we call next()
    }
}

const counter = infinityCounter();

console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // 4 ...

// how it works with for of?

function* colors() {
    yield 'white';
    yield 'blue';
    yield 'green';
}

for (const i of colors()) {
    console.log(i);
}
// it returns next output

// white
// blue
// green

// example with providing value in the yield
function* dialog() {
    const name = yield 'Hi. What is your name?';
    const age = yield `Hi ${name}. How old are you?`;
    yield `So you are ${age} years old. Nice)`;
}

const gen = dialog();

console.log(gen.next().value);
console.log(gen.next('Bohdan').value);
console.log(gen.next(24).value);

// example with trafficLights

function* trafficLight() {
    while (true) {
        yield '🔴';
        yield '🟡';
        yield '🟢';
    }
}

const lights = trafficLight();

setInterval(() => {
    // console.log(lights.next().value);
}, 3000)

// alternative
const newLights = ["🔴", "🟡", "🟢"];
let index = 0;

setInterval(() => {
    console.log(newLights[index]);
    index = (index + 1) % newLights.length;
}, 2000);