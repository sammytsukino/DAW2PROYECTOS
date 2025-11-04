/**
 * Ejercicio 7. 
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

let example1 = "solo hay minusculas"
let example2 = "SOLO HAY MAYUSCULAS"
let example3 = "Hay mayusculas y minusculas"

function hasUpperOrLower(param) {
    if (param == param.toUpperCase()) {
        return ("La cadena solo tiene mayúsculas")
    } else if (param == param.toLowerCase()) {
        return ("La cadena solo tiene mayúsculas")
    } else {
        return ("La cadena tiene ambas")
    }
};

console.log(hasUpperOrLower(example1))
console.log(hasUpperOrLower(example2))
console.log(hasUpperOrLower(example3))



