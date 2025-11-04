/**
 * Ejercicio 9. 
 * María llega a su entrevista de trabajo para el rol de 
 * Desarrollador Junior y se le pide que resuelva este problema: 
 * Dada una lista de números [-1, 3, 4, 2, 6], escribe una función 
 * en javascript para calcular el número más pequeño. 
 * (No se debe utilizar la función Math.min)
 */

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

const numbers = [3, 5, 7, 1, 6]

console.log(findMin(numbers))