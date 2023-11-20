const ejercicio1 = require("prompt-sync")({sigint: true})

const nombre = ejercicio1("[+] Introduce tu nombre -> ")
const edad = ejercicio1("[+] Introduce tu edad -> ")

if (edad >= 18) {
    console.log("[+] " + nombre + " ya puede conducir")
} else {
    console.log("[+] " + nombre + " no puede conducir")
}

