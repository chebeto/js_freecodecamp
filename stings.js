<!--Strings-->

var myName = "Chebs";

var sentence = "Él dice \"Hola!\"";

/*
Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f formfeed
*/

var birthday = "12 de Noviembre"

var intro = "Mi nombre es " + myName + " y soy mi fecha de nacimiento es el " + birthday;

myName += ' es mi nombre.';

<!--Strings: [bracket notation]-->

var firstName = "Oswaldo"

console.log(firstName[1]); // Imprimiria la letra O

console.log(firstName[3]); // Imprimiria la letra W

console.log(firstName[firstName.length - 2]);
