// Array Basic

var sandwich = ["crema de cacahuate", "mermelada", "pan"];

var equipos = [["Chicago", 23],["Red Sox", 34]];

console.log(sandwich[1]); // Se obtendria MERMELADA

sandwich[1] = "Platanos"; // De esta forma reemplazamos la mermelada por los platanos en el array.

console.log(sandwich); // Se obtendria CREMA DE CACAHUATE, PLATANOS Y PAN

console.log(equipos[1][0]); // De esta forma, se imprimira RED SOX ya que el primer corchete selecciona el array secundario dentro del primario y el segundo corchete selecciona la casilla.
