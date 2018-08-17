// Tipos de Datos

// Boolean
var Data = true;
  //Si el Data es false, imprimiria "Los Booleanos apestan"

if (Data) {
  console.log("Los Booleanos son chidos!");
} else {
  console.log("Los Booleanos apestan!");
}
// null
var n = null;
console.log(n * 32);

// undefined
var a;
console.log(a * 32);

// Number
var num = 6;
var ber = 5;
console.log(num + ber);

// String
var Nombre = "Oswaldo";
var Apellido = "Sanchez";
var Estado = "Veracruz";
console.log("Hola, soy " + Nombre + " " + Apellido + " y soy de " + Estado);

// Symbol
var Sym1 = Symbol("foo");
var Sym2 = Symbol("foo");
console.log(Sym1 === Sym2);
console.log(String(Sym1));

// Object
var MyCar = new Object();
MyCar.marca = "Nissan";
MyCar.modelo = "March";
MyCar.anio = 2012;
console.log(MyCar.modelo);
