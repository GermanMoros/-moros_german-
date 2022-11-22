'use strict';
let jsonData = require('./personas.json');

//En este caso devuelve todo el texto en formato JSON pero como si fuera una cadena de texto
console.log(JSON.stringify(jsonData));


// En este caso devuelve un error de sintaxis
console.log(JSON.parse(jsonData));
