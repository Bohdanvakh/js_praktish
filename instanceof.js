class First {}
class Second extends First {}

const obj = new Second;

console.log(obj instanceof First); // expect true
console.log(obj instanceof Second); // expect true

const obj2 = new First;

console.log(obj2 instanceof First); // expect true
console.log(obj2 instanceof Second); // expect false

const text = 'Lorem ipsum dolor';

console.log(text instanceof String); // false because string primitive is not a String

const text2 = new String('Lorem ipsum dolor');

console.log(text2 instanceof String); // true
