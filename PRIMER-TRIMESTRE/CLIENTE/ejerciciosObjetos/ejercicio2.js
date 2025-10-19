// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Crea un array de números con varios valores

const numeros = [1, 2, 3, 4, 5];

// 2. Recorre el array con un bucle for e imprime cada elemento

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// 3. Recorre el array con forEach e imprime cada elemento

numeros.forEach(numero => {
    console.log(numero)
});

// 4. Calcula la suma de los números usando un bucle for
let sumaFor = 0;
for (let index = 0; index < numeros.length; index++) {
    sumaFor += numeros[index]
}

console.log(sumaFor)

// 5. Calcula la suma de los números usando forEach

let sumaForEach = 0;
numeros.forEach(num => {
    sumaForEach += num
})

console.log(sumaForEach)

// 6. Crea un nuevo array con los números pares usando un bucle for


let numerosParesFor = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosParesFor.push(numeros[i])
    }
}

console.log(numerosParesFor)

// 7. Crea un nuevo array con los números pares usando forEach

let numerosParesForEach = []
numeros.forEach(num => {
    if (num % 2 === 0) {
        numerosParesForEach.push(num)
    }
});

console.log(numerosParesForEach)
