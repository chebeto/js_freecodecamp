// JSON

var myJSON {
  "name": {
    "nombre": "oswaldo",
    "apellido": "sanchez"
  },
  "edad": 31;
  "habilidades":["cross", "games","read", "coding"],
  "casado": true,
  "superpoderes": null
}

// Stringigy Method
// Convierte a cadenas de texto todos los datos de un objeto
var stringified = JSON.stringify(myJSON);

// Parse Method
// Convierte a un objeto todos los elementos del JSON
var stringJSON = '{"name": "oswaldo","hijos":0,"state":"veracruz"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);
