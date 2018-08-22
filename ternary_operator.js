// Ternary Operator

// condicion ? expresion1 : expresion2

var edad = 19
if (edad >= 18) {
  console.log("Eres un adulto");
} else {
  console.log("Eres un menor");
}

// El codigo arriba se puede reducir de la siguiente forma usando un operador ternario:

console.log((edad >= 18) ? "Eres un adulto" : "Eres un menor");

// Un ternario dentro de otro ternario

var check1 = false,
    check2 = false,
    acceso = check1 ? "Acceso Denegado" : check2 ? "Acceso Denegado" : "Acceso Concedido";

console.log(acceso); // Obtendriamos ACCESO CONCEDIDO ya que el check1 es falso, por tal motivo pasa al check2 y como esta declarado en falso, se obtiene la segunda expresion del check2
