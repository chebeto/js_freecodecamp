// Objects in JS

var myCar = new Object();
myCar.marca = "Nissan";
myCar.modelo = "March";
myCar.color;

console.log(myCar.marca);
console.log(myCar.modelo);
console.log(myCar.color);

// Objects PARTE 2
// Usar objetos como diccionario de busqueda
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  5:"V"
};
console.log(alpha[2]);

// Remover propiedades de un objeto
let trastes = {
  platos: 8,
  tazas: 10,
  tenedores: 28,
  tazones: 4
};
delete trastes.tazones;
console.log(trastes);

// Prueba de objetos para propiedades
console.log(trastes.hasOwnProperty("platos")); // True
console.log(trastes.hasOwnProperty("tazones")); // False, ya que se borro antes
