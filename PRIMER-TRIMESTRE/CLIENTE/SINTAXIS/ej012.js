/**
 * Ejercicio 012. 
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir cual es el mayor (No se debe utilizar la función Math.max)
 * Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir el menor de tres números (No se debe utilizar la función Math.min)
 * Debes crear una función que simule un juego en el que un número es elegido al azar
 * entre 1 y 100, y la función debe intentar adivinar ese número. La función debe
 * hacer esto de la manera más eficiente posible, utilizando la menor cantidad
 * de intentos.
 * Elaborar una función que reciba un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
 * Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos
 */



// Función para encontrar el mayor de 3 números

function mayorDeTres(a,b,c) {
    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    return mayor;
}


function menorDeTres(a,b,c) {
    let menor = a;
    if (b < menor) menor = b;
    if (c < menor) menor = c;
    return menor;
}

function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentoMin = 1;
    let intentoMax = 100;
    let intentos = 0;
    let numeroAdivinado;

    while (true) {
        intentos++;
        numeroAdivinado = Math.floor((intentoMin + intentoMax) / 2);

        if (intento === numeroSecreto) {
            console.log(`Adivinado. El número era ${numeroSecreto}. Lo has hecho en ${intentos}`);
            break;
        } else if (numeroAdivinado > numeroSecreto) {
            intentoMin= numeroAdivinado + 1;
        } else {
            intentoMax= numeroAdivinado - 1;
        }
    }
}

function multiploDeTres(n) {
    if (n < 100 || n > 200) {
        return "El número debe estar entre 100 y 200"
    }

    return n % 3 === 0 ? `${n} es múltiplo de 3` : `${n} no es múltiplo de 3`
}

function esSumaDeOtros (a,b,c) {
    return a===b+c || b=== a+c || c === a+b
}

