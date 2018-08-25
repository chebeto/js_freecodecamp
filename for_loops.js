// For loops

// Estructura basica:
// for ([inicializacion]; [condicion]; [expresion-final]){}

var myArray = []; // Se declara mi arreglo

for (var i = 0; i < 8; i++) {
// Se declara i=0, mientras i sea menor que 8 se ejecutara, se suma uno a i
  myArray.push(i);
// se introduce en el arreglo la variable i mientras sea menor que 8 en el arreglo
}

var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
