/*En el taller de Santa, los elfos tienen una lista de regalos que desean 
fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son 
caracteres. Tu tarea es escribir una función que, dada una lista de regalos 
y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts, materials) // [] */

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

function manufacture(gifts, materials) {
    return gifts.filter(regalo => 
        regalo.split('').every(letra => materials.includes(letra))
    );
}

console.log("Resultado:", manufacture(gifts1, materials1));
console.log("Resultado:", manufacture(gifts2, materials2));
console.log("Resultado:", manufacture(gifts3, materials3));

