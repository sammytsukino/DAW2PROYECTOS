/**
 * Ejercicio 010. 
 * Escribir una función que permita saber si un número 
 * se repite dentro de un arreglo.
 * Casos de prueba:
 * Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
 * Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
 * Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]
 */

function checkRepeated(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1 ; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
                return "Hay números repetidos"
            }
        }
    }
    return "No hay números repetidos"
}

arr = [1,2,1,3]


//Tengo que recorrer el array dos veces porque lo estoy comparando con sí mismo. Por eso el segundo índice es j = i + 1. Porque no quiero comparar i consigo misma. 