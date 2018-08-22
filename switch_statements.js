// Switch Statements


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
}

console.log(day); // Se imprimiria el dia en el que se ejecuta

//////////////////////////////////////////

var animalito = "Jirafa";
switch (animalito) {
  case "vaca":
  case "jirafa":
  case "perro":
  case "gatos":
    console.log("Este animalito entraria al arca de Noe");
    break;
  case "cuchara":
    console.log("Una cuchara no entraria al arca de Noe");
    break;
  case "dinosaurio":
    default:
    console.log("Este animal no entraria al arca de Noe");
    break;
}
