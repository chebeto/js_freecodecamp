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
