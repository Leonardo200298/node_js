const fs = require('node:fs')

console.log('Leyendo el primer archivo');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log('primer texto: ', text);


console.log('haciendo algo mientras lee los archivos');

console.log('Leyendo el segundo archivo');
const secondText = fs.readFile('./archivo2.txt', 'utf-8');
console.log('segundo texto: ', secondText);


