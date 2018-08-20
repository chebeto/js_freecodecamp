<!--20 String Methods-->

var cadenaUno = "freeCodeCamp es la mejor pagina para aprender programación "
var cadenaDos = "Frontend y Backend"

// charAt()
// Selecciona la tercera casilla de la variable elegida,  en este caso imprimiria la segunda E de free
console.log(cadenaUno.charAt(3));

// charCodeAt()
// Imprime el unicode del caracter que se haya elegido de la variable (114 = r)
console.log(cadenaUno.charCodeAt(1));

// concat()
// Concatena dos cadenas e imprime el resultado; En este caso "freeCodeCamp es la mejor pagina para aprender programacion Frontend y Backend"
console.log(cadenaUno.concat(cadenaDos));

// endsWith()
// Devuelve un resultado booleano sobre la ultima palabra de la cadena elegida
// En este caso, el resultado seria TRUE; si la palabra no es la misma entonces seria FALSE
console.log(cadenaUno.endsWith(programacion));

// fromCharCode()
// Al contrario de charCodeAt, en este caso se imprime el caracter asignado al unicode que se introduce
console.log(String.fromCharCode(114));

// Includes()
// Devuelve un resultado booleano sobre si la variable elegida incluye o no la palabra; en este caso el resultado seria TRUE
console.log(cadenaDos.includes(Backend));

// indexOf()
// Muestra la casilla en la que se ubica la primera letra; en este caso sería 5 ya que inicia a contar F=O R=1 O=2 N=3 T=4 E=5
console.log(cadenaDos.indexOf(end));

// lastIndexOf()
// Hace lo mismo que el metodo anterior solo que busca la palabra final y muestra la casilla en la que se ubica. Aqui sería 17 ya que es el END de la segunda palabra Backend.
console.log(cadenaDos.lastIndexOf(end));

// match()
// Busca todas las coincidencias en la variable elegida; en este caso serian dos veces ya que una es Frontend y la otra de Backend
console.log(cadenaDos.match(/end/));

// repeat()
// Repite las veces que se le indique el contenido de la variable elegida; en este caso serian 3 veces
console.log(cadenaUno.repeat(3));

// replace()
// Busca las coincidencias y las reemplaza con la segunda cadena // En este caso reemplazaria Frontend y Backend por FrontEND y BackEND
console.log(cadenaDos.replace(/end/g, "END");

// search()
// Muestra la casilla en la que se ubica la primera letra; en este caso sería 5 ya que inicia a contar F=O R=1 O=2 N=3 T=4 E=5
console.log(cadenaDos.search("end"));

// slice()
// Corta una palabra desde la letra en la que se le indique a la segunda y muestra el contenido; Aqui imprimiria ON de Frontend
console.log(cadenaDos.slice(2, 4));

// split()
// Divive el texto de la variable en un array seleccionando el criterio que se elija. // En este caso dividiria la oracion por los espacios, quedando de la siguiente forma ["freeCodeCamp", "es", "la", "mejor", "pagina", "para", "aprender", "programacion"]
console.log(cadenaUno.split(" ");

// startsWith()
// Devuelve un booleano sobre si la variable cumple o no con la palabra que se condiciona; en este caso seria TRUE
console.log(cadenaUno.startsWith("free"));

// substr()
// En este caso, es parecido a Slice pero en este caso, el segundo valor determina el numero de caracteres que se contaran, no en cual termina. En este caso imprimiria ONTE de Frontend.
console.log(cadenaDos.substr(2, 4));

// substring()
// Similar a slice()
console.log(cadenaDos.substring(2,4));


// toLowerCase()
// Pasa todo el texto a minisculas
console.log(cadenaUno.toLowerCase());

// toUpperCase()
// Pasa todo el texto a mayusculas
console.log(cadenaUno.toUpperCase());


// trim()
// Remueve todos los espacios del inicio y del final de la variable
var cadenaTres = "          Texto con espacios          "
console.log(cadenaTres.trim());
