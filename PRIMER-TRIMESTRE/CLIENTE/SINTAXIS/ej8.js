/**
 * Ejercicio 8. 
 * Escribir una función que tome un arreglo de números y 
 * devuelva el número mayor de la lista. 
 * (No se debe utilizar la función Math.max) 
 * Ejemplo del arreglo : [3, 5, 7, 1, 6]
 */

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

const numbers = [3, 5, 7, 1, 6]

console.log(findMax(numbers))