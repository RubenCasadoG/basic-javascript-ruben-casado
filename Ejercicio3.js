const scanner = require("prompt-sync")({sigint: true})

let numInput = scanner("[+] Introduce números -> ") 
let numero
let suma = 0



while (numInput != "cancelar") {
    if (Number(numInput)) {
        numero = Number(numInput)
        suma = (suma + numero)
    } else {
        console.log("[!] No entiendo...")
    }
    numInput = scanner("[+] Introduce números -> ") 
}
console.log("[+] La suma de los números introducidos es " + suma)


    


