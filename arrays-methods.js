// 10 metodos comunes de array

var arr = ["a", "b", "c"];

arr.push("d");
// Sirve para insertar un nuevo registro en el array

console.log(arr); // se imprimira ["a", "b", "c", "d"]

console.log(arr.pop()); // se imprimira "d"
// Se utiliza para imprimir y retirar la ultima casilla del arreglo

console.log(arr); // se imprimira ["a", "b", "c"] ya que la "d" quedo fuera

var arr2 = ["e", "f", "g"];
console.log(arr.concat(arr2)); // se obtendra ["a", "b", "c", "e", "f","g"]
// Se utiliza para concatenar dos arreglos

console.log(arr.join("")); // De esta forma podemos obtener el contenido del arreglo unido de la siguiente forma ABC

console.log(arr.reverse()); // se imprime el arreglo al reves CBA

console.log(arr.shift()); // Elimina el primer articulo del arreglo

console.log(arr.unshift("p")); // Inserta un nuevo articulo en la primer casilla del arreglo y devuelve el arreglo completo

console.log(arr.slice(1,3)); // Imprime la seleccion del arreglo que se especifica en el metodo, por ejemplo, seleccionara solo la casilla 1 y 2, ya que la 3 no se incluye.

console.log(arr.sort(arr)); // Ordena el arreglo alfabeticamete

console.log(arr.splice(2,2, "NUEVO ELEMENTO DEL ARREGLO")); // En este caso, separa los elementos de
