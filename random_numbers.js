
// Random Numbers & ParseInt

Math.random(); // Imprime un numero entre 0 y 1 sin llegar al entero

console.log(Math.random());

console.log(Math.floor(Math.random()*20)); // Math.floor redondea hacia abajo el resultado

function randomRange (min, max) {
    return  Math.floor (Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(1,9));

// ParseInt

parseInt("007"); // Convierte a entero el texto, el cual imprimira "7"

console.log(parseInt("007"));
