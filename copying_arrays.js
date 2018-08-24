// Copying Arrays

var original = [true, true, undefined, false, null];

// Slice
var copia1 = original.slice(0);
// De esta forma se copia el contenido del arreglo ORIGINAL

// Spread operator
var copia2 = [...original];
// De esta forma se copia el contenido del arreglo ORIGINAL

console.log(copia1, copia2);
// Se obtiene el mismo resultado para las dos copias

// DEEP copying
