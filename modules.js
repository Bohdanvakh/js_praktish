const { people, ages } = require('./people');

console.log(people);
console.log(ages);

const os = require('os');

// console.log(os);

const fs = require('fs');

fs.readFile('./docs/test.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
});

console.log('last line');

// fs.writeFile('./docs.test2.txt', 'Hello World from test2', () => {
//     console.log('file was written');
// });

fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});