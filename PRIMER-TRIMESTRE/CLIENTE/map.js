const numeros = [1, 2, 3, 4, 5];
const palabras = ['JavaScript', 'es', 'genial'];
const personas = [
  { nombre: 'Ana', edad: 28 },
  { nombre: 'Juan', edad: 32 },
  { nombre: 'María', edad: 25 }
];


console.log("\nEjercicio 4: map básico");
// Utiliza map para crear un nuevo array con cada número del array 'numeros' elevado al cuadrado.

const numerosAlCuadrado = numeros.map(num => num ** 2)
console.log(numerosAlCuadrado);