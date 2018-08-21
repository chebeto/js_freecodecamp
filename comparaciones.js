// Operadores de comparacion & If...Else

var miVariable = true;

if (miVariable) {
  console.log("Free Code Camp is amazing!");
}

// Como la variable se declara true, la condicion se realiza y por tanto se imprime "Free Code Camp is amazing!"

var miVariable2 = false;

if (miVariable) {
  console.log("Free Code Camp is amazing!");
}

// Como la variable se declara falsa, la condicion NO se realiza y por tanto no se imprime nada.

var miVariable3 = false;

if (miVariable) {
  console.log("Free Code Camp is amazing!");
  else {
    console.log("Free Code Camp sucks!");
  }
}

// Como la variable se declara falsa, la condicion IF no se realiza, por lo que se imprime la condicion ELSE obteniendo "Free Code Camp sucks!"


////////////////////////////////////////////////////////////////////////////////

// Comparadores: > < <= >= == !=

var edad = 18;

if (edad >= 18) {
  console.log("Eres un adulto"); // Si la edad es mayor o igual a 18 se imprime
  else if (edad < 2){
    console.log("Eres un bebé"); // Si la edad es menor a 2 años se imprime
  else if (edad < 18) {
    console.log("Eres un menor de edad"); // Si la edad es menor a 18 se imprime
  }
  }
}

 // Igual a
if (edad == 18) {
  console.log("Tienes 18");
}

// Diferente a
if (edad != 18) {
  console.log("Tu no tienes 18");
}
