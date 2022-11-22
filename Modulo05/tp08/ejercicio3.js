'use strict';
const fs = require('fs');
fs.readFile('personas.json', (err, data) => {
if (err) throw err;
//console.log(JSON.stringify(data));
console.log(data);
//console.log(JSON.parse(data));
});

// console.log(JSON.stringify(data)); En este devuelve todos los datos del buffer sin conversion
// console.log(data); Devuelve los datos sin conversion de buffer
