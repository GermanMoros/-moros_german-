function distingueLetras (argumentos) {
  
  if (argumentos === argumentos.toLowerCase()) {
    console.log('La palabra esta compuesta de minusculas');
  }
  
  else if (argumentos === argumentos.toUpperCase()) {
    console.log('la esta compuesta de mayusculas');
  } else {
    var x = 0;
    var y = 0;
    
    
    for (var i = 0; i < argumentos.length; i++) {
      var charCode = argumentos[i].charCodeAt();
      
     
      if (charCode >= 65 && charCode <= 90) {
        x++;
      }
    
      else if (charCode >= 97 && charCode <= 122) {
        y++;
      }
    }
    console.log(`la palabra esta compuesta de ${x} mayusculas y ${y} minusculas`)
  }

}

distingueLetras('ejercicio del silicon')
distingueLetras('EjerciciO dEl SiliCON')
distingueLetras('EJERCICIO DEL SILICON')
