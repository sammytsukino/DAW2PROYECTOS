console.log("\nEjercicio 6: Bucle while (potencia)");
// Escribe una función llamada 'calcularPotencia' que use un bucle while para calcular
// la potencia de un número. La función debe tomar dos parámetros: la base y el exponente.

function calcularPotencia(base, exponente) {
    let resultado = 1;
    let i = 0;



    while (i < exponente) {
    resultado *= base;
    i++;
    }
     return resultado;
}

/*     while (i < 5) {
        console.log("Número: " + i);
        i++;
    } */

console.log(calcularPotencia(2, 3));  // Debería mostrar: 8
console.log(calcularPotencia(5, 2));  // Debería mostrar: 25