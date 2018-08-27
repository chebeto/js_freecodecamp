// Array Iteration: 8 metodos para interactuar con un arreglo

// forEach
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index);
});

// Map
const three = [1, 2, 3];  // se declaran los 3 registros del arreglo
const doubled = three.map(function (item) { // se declara Doubled y se inserta la interaccion
  return item * 2; // se regresa el arreglo Three multiplicado por dos
});
console.log(doubled); // se imprime

// Filter
// Realiza un filtrado en base a la condicion que se indique en la funcion
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPar = numeros.filter(function (item) {
  return item % 2 === 0; // Solo se regresa si el residuo de la division entre 2 es igual a 0
})
console.log(numPar);

// Reduce
// Reduce al arreglo a una sola unidad
const suma = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log(suma);

// Some
// Realiza la busqueda en el arreglo de algunos de los elementos del mismo mediante un criterio pero sin especificar, solo devuelve TRUE o FALSE
const hasNegativeNumbers = [1, 2, 3, -1, -2, 4, 5].some(function (item) {
  return item <0;
});
console.log(hasNegativeNumbers);

// Every
// Lo mismo que Some pero al reves, todos los elementos del arreglo deberan de cumplir con la funcion para devolver TRUE, si no, sera FALSE
const allPositiveNumber = [1, 2, -3, 4, 5].every(function (item) {
  return item >0;
})
console.log(allPositiveNumber);

// Find
// Realiza una busqueda en todo el arreglo de un criterio y devolvera solamente ese elementos
const objetos = [{id: "a"}, {id: "b"}, {id: "c"}, {id: "d"}];
const found = objetos.find(function (item) {
  return item.id === "b";
});
console.log(found);

// Find Index
// Hace lo mismo que Find solo que en lugar de regresar el valor del elemento, sera el indice en el que se encuentra dicho elemento. En este caso, sera 1
const objetos2 = [{id: "a"}, {id: "b"}, {id: "c"}, {id: "d"}];
const foundIndex = objetos.findIndex(function (item) {
  return item.id === "b";
});
console.log(foundIndex);
