// Funciones

// Una funcion es un procedimiento repetitivo dentro del codigo, se emplean para tareas o calculos.

// Una funcion se compone por la palabra clave FUNCTION seguida de su nombre CUADRADO, dentro de un parentesis se incluye un argumento que sera el que pase por la funcion. Dentro de los corchetes se usa el retorno que tendra dicha funcion, en este caso es un numero al cuadrado, el cual se calcula multiplicado por si mismo el numero ingresado.

function cuadrado(numero) {
  return numero * numero;
}

console.log(cuadrado(6));

////////////////////////////////////////////////////////////////////////////////

var variable1 = "Sombreros";

function compras() {
  console.log(variable1);
  // De esta forma, la funcion tomaria la variable1 como parte de la funcion, ya que se considera una variable global.

  // OBTENDRIAMOS SOMBREROS
}

////////////////////////////////////////////////////////////////////////////////

var variable1 = "Sombreros";

function compras() {
  var variable1 = "Jeans";
  console.log(variable1);
  // De esta forma, la funcion tomaria la variable1 que se encuentra DENTRO de la funcion, ya que es local y le da prioridad, incluso pueden llevar el mismo nombre y la funcion hara la diferenciacion.

  // OBTENDRIAMOS JEANS
}

////////////////////////////////////////////////////////////////////////////////

var variable1 = "Sombreros";

function compras() {
  var variable1 = "Jeans";
  console.log(variable1);
}

compras();
console.log(variable1);
// Ahora, si hacemos un log de la variable1 FUERA de la funcion, se obtendra el valor que tenga la variable global, ya que la que tiene la funcion solo es accesible si estamos dentro de la misma.

// OBTENDRIAMOS SOMBREROS

////////////////////////////////////////////////////////////////////////////////

// Cuando una funcion se encuentra dentro de otra funcion, primero se ejecutara la que esta adentro y con ese resultado, se calculara la funcion principal.

function sumaCuadrados(a, b) {
  function cuadrados(x) {
    return x * x;
  }
  return sumaCuadrados(a) + sumaCuadrados(b);
}

a = sumaCuadrados (2, 3); // El resultado en este caso seria 13, ya que primero calcura el cuadrado de los dos valores y despues hara la suma.
b = sumaCuadrados (3, 4); // El resultado seria 25
c = sumaCuadrados (4, 5); // El resultado seria 41
