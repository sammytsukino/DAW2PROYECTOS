/**
 * Ejercicio 6. 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 */

//Declaración de dos variables con valores distintos

/**
 * Función que comprueba y devuelve una cadena que te dice si un número es par o impar
 * @param {number} param 
 * @returns {string}
 */
let evenNumber = 12;
let oddNumber = 15;

function isEven(param) {
    if (param % 2 === 0) {
        return (" Es un número par")
    } else {
        return (" Es un numero impar")
    }
}

console.log(evenNumber + isEven(evenNumber))
console.log(oddNumber + isEven(oddNumber))


