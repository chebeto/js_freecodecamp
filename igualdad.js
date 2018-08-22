// Igualdad Abstracta vs Igualdad Estricta

// Cuando se realiza una comparacion entre dos objetos con (==) se realiza una comparacion abstracta lo que significa que se pueden comparar dos elementos de diferentes tipos pero en igualdad de valores, mientras que con (===) se realiza una comparacion estricta, es decir, todos las caracteristicas de los elementos a comparar deben ser iguales.

console.log(3 == "3"); // Se obtendria una declaracion TRUE, ya que aunque un elemento sea un int y el otro una cadena, ambos son iguales a 3.
console.log(3 === "3"); // Se obtendria un FALSE, ya que aunque los dos elementos valen 3, uno es una cadena y el otro un entero por lo que no son exactamente iguales.
