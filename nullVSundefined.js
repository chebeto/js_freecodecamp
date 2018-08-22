// Null VS Undefined

var test
console.log(test); // Se obtendria UNDEFINED en la consola, ya que no se definio ningun valor

test = null
console.log(test); // Se obtendria NULL en la consola, ya que se especifico

console.log(typeof null); // Se obtendria OBJECT
console.log(typeof undefined); // Se obtendria UNDEFINED
console.log(null === undefined); // Se obtendria FALSE
