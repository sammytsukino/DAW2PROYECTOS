// Ejercicios: Funciones en JavaScript

// 1. Tipos de funciones
console.log("Ejercicio 1: Tipos de funciones");
// Crea una función declarativa llamada `multiplicar` que tome dos números como parámetros y devuelva su producto.
// Luego, crea una función de expresión llamada `dividir` que tome dos números como parámetros y devuelva el resultado de su división.

function multiplicar(a,b) {
    return a*b;
}

const dividir = function(a,b) {
    return a / b;
}

// Tu código aquí

console.log(multiplicar(4, 5)); // Debería mostrar: 20
console.log(dividir(20, 4));    // Debería mostrar: 5

// 2. Métodos
console.log("\nEjercicio 2: Métodos");
// Crea un objeto llamado `calculadora` con métodos para sumar, restar, multiplicar y dividir.
// Luego usa estos métodos para realizar algunas operaciones.

const calculadora = {
  sumar: function (a,b) {
    return a + b;
  },
  restar: function (a,b) {
    return a-b
  },
  multiplicar: function (a,b) {
    return a*b
  },
  dividir: function (a,b) {
    return a / b
  },
};

const calculadora2 = {
    sumar (a,b) {
        return a+b
    },
    restar (a,b) {
        return a-b
    },
    multiplicar(a,b) {
        return a*b
    },
    dividir(a,b) {
        return a/b
    }
};

console.log(calculadora.sumar(5, 3));      // Debería mostrar: 8
console.log(calculadora2.restar(10, 4));    // Debería mostrar: 6
console.log(calculadora.multiplicar(3, 3)); // Debería mostrar: 9
console.log(calculadora2.dividir(15, 3));    // Debería mostrar: 5

// 3. Parámetros por defecto
console.log("\nEjercicio 3: Parámetros por defecto");
// Crea una función llamada `saludar` que tome un nombre como parámetro y un idioma (con valor por defecto "es" para español).
// La función debe saludar en el idioma especificado.


function saludar(nombre, idioma = "es") {
    if(idioma === "es") {
        return `Hola, ${nombre}!`;
    } else if (idioma === "en") {
        return `Hello, ${nombre}`
    } else if (idioma === "fr") {
        return `Salut, ${nombre}`
    } else if (idioma === "aus") {
        return `Yo no hablo austríaco, loco`
    } else {
        `Aprende idiomas, ${nombre}`
    }
}


console.log(saludar("Ana"));        // Debería mostrar: "Hola, Ana!"
console.log(saludar("John", "en")); // Debería mostrar: "Hello, John!"
console.log(saludar("Marie", "fr")); // Debería mostrar: "Bonjour, Marie!"

// 4. Funciones que retornan valores
console.log("\nEjercicio 4: Funciones que retornan valores");
// Crea una función llamada `esPar` que tome un número como parámetro y retorne `true` si es par o `false` si es impar.

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));  // Debería mostrar: true
console.log(esPar(7));  // Debería mostrar: false



// 5. Arrow functions
console.log("\nEjercicio 5: Arrow functions");
// Convierte la siguiente función tradicional en una arrow function:

function doble(numero) {
  return numero * 2;
}

const dobleArrow = (numero) => numero * 2;


// Tu código aquí (crea una nueva función llamada dobleArrow)

console.log(dobleArrow(5));  // Debería mostrar: 10
console.log(dobleArrow(3));  // Debería mostrar: 6

// 6. Funciones como argumentos
console.log("\nEjercicio 6: Funciones como argumentos");
// Crea una función llamada `aplicarOperacion` que tome dos números y una función como parámetros,
// y devuelva el resultado de aplicar la función a los dos números.

function aplicarOperacion(a, b, operacion) {
    return operacion(a,b);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}


console.log(aplicarOperacion(5, 3, suma));   // Debería mostrar: 8
console.log(aplicarOperacion(10, 4, resta)); // Debería mostrar: 6

// 7. Cierre (Closure)
console.log("\nEjercicio 7: Cierre (Closure)");
// Crea una función llamada `contador` que retorne otra función.
// La función retornada debe incrementar un contador cada vez que es llamada y devolver el valor actual del contador.


function contador() {
    let count = 0;
    return function(){
        count ++
        return count
    };
}



const incrementar = contador();


console.log(incrementar()); // Debería mostrar: 1
console.log(incrementar()); // Debería mostrar: 2
console.log(incrementar()); // Debería mostrar: 3