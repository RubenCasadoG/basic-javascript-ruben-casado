const ejercicio2 = require("prompt-sync")({sigint: true})

const nota = ejercicio2(" [+] Dime la nota -> ");

switch (nota) {
    case "0":
    case "1":
    case "2":
        console.log("Es muy deficiente")
        break;
    case "3":
    case "4":
        console.log("Es insuficiente");
        break;
    case "5":
    case "6":
        console.log("Es un suficiente");
        break;
    case "7":
    case "8":
        console.log("Es un notable");
        break;
    case "9":
    case "10":
        console.log("Es un sobresaliente");
        break;
    default:
        console.log("Tu nota no es válida")
        break;
}