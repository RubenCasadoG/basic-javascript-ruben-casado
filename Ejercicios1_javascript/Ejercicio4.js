const scanner = require("prompt-sync")({sigint: true})

let wordInput  =  scanner("[+] Introduce un texto: ")
let cadena = "";
let palabra


while (wordInput != "cancelar") {
    if (String(wordInput)) {
        palabra = String(wordInput)
        cadena = (cadena + palabra+ "-" )
    } else {
        scanner("[+] Introduce un texto: ")
    }
    wordInput  =  scanner("[+] Introduce un texto: ")
} 


console.log("[+] La concatenación del texto es " + cadena);


