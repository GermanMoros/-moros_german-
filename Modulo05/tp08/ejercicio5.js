const fs = require('fs');
const rawdata = fs.readFileSync('./departamentos.json');
var empleado = JSON.parse(rawdata);

function getEmpleado (arreglo) {
    for (let i = 0; i <arreglo['Departamentos']['Tecnologia'].length; i++)
        console.log(arreglo['Tecnologia'][i]['Nombre']+' '+ arreglo['Tecnologia'] [i] ['Puesto']);
 }

getEmpleado(empleado);
