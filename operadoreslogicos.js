// Operadores logicos

// AND: &&    OR: ||

var numero = 8;

if (numero > 5 && numero < 10) {
  console.log("Estas dentro!"); // Se obtendria ESTAS DENTRO ya que el 8 es mayor que 5 y menor que 10.
}

if (numero > 5 || numero < 10) {
  console.log("Estas dentro"); // Como se cumplen las dos condiciones, se imprime ESTAS DENTRO ya que cumple con las dos
}