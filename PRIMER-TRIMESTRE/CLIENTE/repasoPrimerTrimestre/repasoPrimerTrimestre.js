// Ejercicio 1. Crea una función (analizarArray) que reciba un array de números y devuelva un objeto con {media, max, min}
// Valores de prueba: [4, 8, 15, 16, 23, 42]
// Salida: { media: 18, max: 42, min: 4}

const { js } = require("three/tsl");

const numeros = [4, 8, 15, 16, 23, 42];

function analizarArray(array) {
    const media = array.reduce((acum, num) => acum + num, 0) / array.length; //Reduce acumula valores de un array. array.reduce((acum, num) => acum + num, 0) Acumulador empieza en 0 y le vamos sumando al acumulador cada elemento del array (num)
    const max = Math.max(...array); 
    const min = Math.min(...array);//Usamos ... para coger todos los valores del array

    return {media, max, min}; //Devuelve un objeto directamente
}

console.log(analizarArray(numeros))


// Ejercicio 2. Escribe una función (contarVocales) que reciba una string y cuente las vocales.
// Valores de prueba: "JavaScript es divertido"
// Salida: 8


const prueba = "JavaScript es divertido";

function contarVocales(texto) {
    const vocales = "aeiou";
    let contador = 0;

    for (let char of texto) { //let For...of itera sobre todos los elementos de un algo convirtiéndolo en un array. Texto pasa a ser trocitos de char.
        if (vocales.includes(char)) { //Si las vocales incluyen char (en este caso, las vocales), suma el contador.
            contador++
        }
    }
    return contador;
}

console.log(contarVocales(prueba))



// Ejercicio 3. Haz una función (esPrimo) para determina si un número es primo
// Valores de prueba: 29
// Salida: 29 es primo


function esPrimo(numero) {
    if (numero <= 1) return false; //Si es 1 o 0 es false, no es primo

    for (let i = 2; i < Math.sqrt(numero); i++) { //Desde 2 hasta su raíz cuadrada busco si el numero tiene divisores con if numero % i === 0. Si tiene, no es primo. 
        if (numero % i === 0) return false;
    }

    return true; //Si no tiene divisores, es primo
}

const numero = 29;

if (esPrimo(numero)) {
    console.log(numero + " es primo")
} else {
    console.log(numero + " no es primo")
}




// Ejercicio 4. Dado un número de 3 dígitos, escribe una función (invertirNumero) para invertir sus cifras
// Valores de prueba: 123
// Salida: 321

function invertirNumero(numero) {
    const numeroString = String(numero);
    const numeroDividido = numeroString.split("");
    const numeroInvertido = numeroDividido.reverse();
    const numeroUnido = numeroInvertido.join("");

    return Number(numeroUnido)
}


console.log(invertirNumero(345))

function invertirNumeroCorto(numero) {
    const numeroInvertido = String(numero).split("").reverse().join("");
    return Number(numeroInvertido)
}

console.log(invertirNumeroCorto(954))



// Ejercicio 5. Crea una función (longitudes) que reciba un array de strings y devuelva un array con la longitud de cada string
// Valores de prueba: ["Hola", "JavaScript", "GPT"]
// Salida: [4, 10, 3]

function longitudes(array) {
    return array.map(str => str.length) //Con map recorremos el array elemento por elemento y devuelve otro array nuevo con la info pedida. En este caso, mapeamos el array (lo dividimos en strs) a la que le sacamos el length. Y ya.
}

console.log(longitudes(["Hola", "JavaScript", "GPT"]))


// Ejercicio 6. Haz una función (modificarX) que demuestre el scope de variables globales y locales
// Valores de prueba: x = 10 (global), dentro de la función x = 20
// Salida:
// Dentro de la función: 20
// Fuera de la función: 10

let x = 10;

function modificarX() {
    let x = 20;
    console.log("Dentro de la función: " + x);
}

modificarX();
console.log("Fuera de la función:" + x)


// Tu código aquí

// Ejercicio 7. Escribe una función (convertirANumero) que convierta un string a número y devuelva un error si no es posible
// Valores de prueba: "123", "abc"
// Salida: 123, Error: No es un número válido

function convertirANumero(string) {
    const numero = Number(string); //Casteo el string a Number

    if (isNaN(numero)) throw new Error("El número no es válido") // Si el numero es NotANumber lanzo error
    return numero;
}

try {
    console.log(convertirANumero("123")); //Intento convertir
    console.log(convertirANumero("abc"));
} catch (error) {
    console.log("Error: " + error.message) //Capturo el mensaje de error 
}

// Tu código aquí

// Ejercicio 8. Crea una función (dividirArray) que divida los elementos de un array entre un divisor y capture divisiones por cero
// Valores de prueba: [10, 20, 30], divisor = 0
// Salida: Error: División por cero

const divisor = 0;
const valoresPrueba = [10, 20, 30];

function dividirArray(array, divisor) {
    if (divisor != 0) return array.map(numero => numero / divisor) //Simple, creo un función que si no se cumple X, se genere un map de numeros y en cada numero quiero que se divida por el divisor
    else return "El divisor no puede ser 0";
}

console.log(dividirArray(valoresPrueba, divisor))


// Tu código aquí

// Ejercicio 9. Haz una función (generarAleatorios) que genere 5 números aleatorios entre 1 y 100 y los ordene de menor a mayor
// Valores de prueba: N/A
// Salida: [3, 14, 22, 57, 91] (ejemplo)

function generarAleatorios() {
    const numeros = [] //Creo un array vacío de numeros para ir guardando los aleatorios
    for(i= 0; i<5; i++) { //Para la condición que nos han dado (5 valores)
        const aleatorio = Math.floor(Math.random() * 100) + 1; // Creo un numero aleatorio con Math.floor(Math.random() * 100 (porque queremos 100) + 1) porque es así la forma de generar
        numeros.push(aleatorio); //Pusheo al array vacío de numeros lo que vaya creando (hasta 5)
    }

    numeros.sort(); // Ya que tenemos el array relleno, lo ordenamos con sort. Si lo quiero más correcto es numeros.sort((a,b) => a-b)
    return numeros;
}

console.log(generarAleatorios())

// Tu código aquí

// Ejercicio 10. Crea una función (raicesCuadradas) que reciba un array de números y devuelva un array con la raíz cuadrada de cada número
// Valores de prueba: [4, 16, 25, 36]
// Salida: [2, 4, 5, 6]

const valoresRaiz = [4, 16, 25, 36]

function raicesCuadradas(array) {
    return array.map(numero => numero / Math.sqrt(numero));
}

console.log(raicesCuadradas(valoresRaiz))

// Tu código aquí

// Ejercicio 11. Escribe una función (calcularEdad) que reciba una fecha de nacimiento y devuelva la edad actual
// Valores de prueba: "2000-05-15"
// Salida: 25

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}

console.log(calcularEdad("1993-08-06"))

// Tu código aquí

// Ejercicio 12. Crea una función (diaSemana) que reciba una fecha y devuelva el día de la semana correspondiente
// Valores de prueba: "2025-11-20"
// Salida: Jueves

function diaSemana(fecha) {
    const fechaObjeto = new Date(fecha);
    const dia = fechaObjeto.getDay();

    switch (dia) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday"
    }
}


console.log(diaSemana("2025-11-20"))

// Ejercicio 13. Haz una función (palabraMasLarga) que reciba un string y devuelva la palabra más larga
// Valores de prueba: "El conocimiento es poder"
// Salida: conocimiento

function palabraMasLarga(frase) {
    const palabras = frase.split(" "); //Divido la frase en palabras
    let masLarga = ""; // Inicializo la variable donde voy a meter la palabra más larga y tener algo donde comparar

    for (let palabra of palabras) { //Con for..let...of creo un array con los elementos del string. En este caso, palabra de palabras. 
        if (palabra.length > masLarga.length) {
            masLarga = palabra; //Cada vez que encontramos una palabra más larga que la anterior, la colocamos en masLarga. Al principio masLarga es 0, luego va palabra por palabra (for let palabra of palabras) y la va almacenando
        }
    }
    return masLarga; // Devuelve la masLarga
}

console.log(palabraMasLarga("El conocimiento es poder"))

// Tu código aquí

// Ejercicio 14. Crea una función (dosDecimales) que reciba un número y lo devuelva con 2 cifras decimales
// Valores de prueba: 12.3456
// Salida: 12.35

function dosDecimales(numero) {
    return numero.toFixed(2);
}

console.log(dosDecimales(12.345))

// Ejercicio 15. Escribe una función (filtrarPares) que reciba un array de números y devuelva solo los números pares
// Valores de prueba: [1,2,3,4,5,6]
// Salida: [2,4,6]

function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0); // Con filter saco del array lo que cumpla una condición. A diferencia de map, que lo que hace es transformar el array por elemento, filter saca los que cumplan la condición en este caso que sea divisible por 2.
}

console.log(filtrarPares([1,2,3,4,5,6]));

// Ejercicio 16. Crea una función (sumaArray) que reciba un array de números y devuelva la suma de sus elementos
// Valores de prueba: [5,10,15]
// Salida: 30

function sumaArray(array) {
    return array.reduce((acum, numero) => acum + numero, 0 )
}
console.log(sumaArray([5,10,15]))

// Tu código aquí

// Ejercicio 17. Haz una función (ordenarPorEdad) que reciba un array de objetos {nombre, edad} y lo ordene por edad ascendente
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Luis", edad:20}, {nombre:"Ana", edad:25}]

const personas = [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]

function ordenarPorEdad(array) {
    return array.sort(personas.edad)
}

console.log(ordenarPorEdad(personas))

// Tu código aquí

// Ejercicio 18. Crea una función (filtrarEdad) que reciba un array de objetos {nombre, edad} y devuelva solo los mayores de 22
// Valores de prueba: [{nombre:"Ana", edad:25}, {nombre:"Luis", edad:20}]
// Salida: [{nombre:"Ana", edad:25}]

function filtrarEdad(array) {
    return array.filter(persona => persona.edad > 22);
}

console.log(filtrarEdad(personas))

// Tu código aquí

// Ejercicio 19. Escribe una función (esJSONValido) que reciba un string y determine si es un JSON válido
// Valores de prueba: '{"nombre":"Ana"}', '{"nombre":Ana}'
// Salida: Válido, Inválido



function esJSONValido(objeto) {
    try {
        JSON.parse(objeto);
        return "Válido"
    } catch (error) {
        return "Inválido"
    }
}

console.log(esJSONValido('{"nombre": "Ana"}'))
console.log(esJSONValido('{"nombre":Ana}'))


// Tu código aquí

// Ejercicio 20. Crea una función (arrayUnicoOrdenado) que reciba un array de números, elimine duplicados, los ordene descendente y devuelva un JSON
// Valores de prueba: [4, 2, 7, 4, 9, 2]
// Salida: {"resultado":[9,7,4,2]}

const pruebaArray = [4, 2, 7, 4, 9, 2];

function arrayUnicoOrdenado(array) {
    const sinDuplicados = [...new Set(array)] //Con [...new Set(array)] creo un array nuevo de "tipo" Set, que son valores sin repetir. 
    const arrayOrdenado = sinDuplicados.sort((a,b) => b - a) //Lo ordeno

    return JSON.stringify({resultado: arrayOrdenado}) //Con JSON.stringify ({resultado: x}) creo un objeto con esos parámetros
}

console.log(arrayUnicoOrdenado(pruebaArray))

// Ejercicio 21. Escribe una función (contarPalabras) que reciba un array de strings y devuelva un objeto con la cantidad de ocurrencias de cada palabra
// Valores de prueba: ["JavaScript","es","JavaScript","divertido"]
// Salida: {JavaScript:2, es:1, divertido:1}

// Tu código aquí

function contarPalabras(array) {
    const contador = {} //Creo el contador donde voy a ir almacenando los resultados

    for (let palabra of array) { //Para cada palabra (elemento) dentro del array =>
        if (contador[palabra]) contador[palabra]++ //Si ya existe la palabra dentro de contador, sumamos 1
        else contador[palabra] = 1 //Si no se repite, se queda en 1
    } 

    return contador;
}

console.log(contarPalabras(["JavaScript","es","JavaScript","divertido"]))

// Ejercicio 22. Crea una función (edadesDesdeFechas) que reciba un array de fechas y devuelva un array con las edades correspondientes
// Valores de prueba: ["2000-01-01", "2010-06-15"]
// Salida: [25, 15]

function edadesDesdeFechas(array) { //Aquí me interesa usar un map para crear un array con las transformaciones individuales correspondientes
    const hoy = new Date(); //Creo una constante hoy con objeto date
    return array.map(fecha => { //Uso un map en el que cada fecha =>
        const fechaDate = new Date(fecha) //Va a crear por cada elemento un objeto Date
        let edad = hoy.getFullYear() - fechaDate.getFullYear(); //Creo una variable edad que es hoy.getFullYear() - fechaDate.getFullYear()
        return edad; //Devuelvo edad
    })
}
console.log(edadesDesdeFechas(["2000-01-01", "2010-06-15"]))

// Tu código aquí

// Ejercicio 23. Haz una función (juegoAdivinanza) que genere un número aleatorio y permita adivinar hasta acertar, devolviendo número de intentos
// Valores de prueba: Número generado: 7, secuencia de intentos: 3,5,7
// Salida: ¡Correcto! Número de intentos: 3

// Tu código aquí

// Ejercicio 24. Crea una función (invertirPalabras) que reciba un string y devuelva otro con las palabras en orden inverso
// Valores de prueba: "JavaScript es divertido"
// Salida: "divertido es JavaScript"

// Tu código aquí

function invertirPalabras(string) {
    return string.split(" ").reverse().join(" ");
    
}

console.log(invertirPalabras("JavaScript es divertido"))

// Ejercicio 25. Haz una función (analizarCalificaciones) que reciba un array de objetos {nombre, cal} y devuelva el promedio y el nombre con mayor calificación
// Valores de prueba: [{nombre:"Ana", cal:8}, {nombre:"Luis", cal:10}, {nombre:"Eva", cal:6}]
// Salida: { promedio: 8, nombreMax: "Luis" }


function analizarCalificaciones(array) {
        const calificaciones = array.map(obj => obj.cal); //Con map creo un array nuevo con sólo las calificaciones. Digo que cada objeto del array va a pasar a ser solo objeto.cal
        const promedio = calificaciones.reduce((acum, numero) => acum + num, 0) / array.length //Aquí creo con reduce una constante promedio, que creo con calificaciones y a la que le divido la longitud del array
        const maximo = Math.max(...calificaciones)// Creo una constante maximo que me ayudará a encontrar a la persona con la máxima nota. Hago un math.max de calificaciones spreadeadas (todos los valores del array)
        const nombreMax = array.find(obj => obj.cal === maximo).nombre;// Nuevo: uso find para encontrar cosas que se cumplan dentro de un array. En este caso, quiero buscar el nombre de la persona cuya nota máxima sea igual a máximo. Entonces array.find(obj => calificacion = maximo).nombre (porque quiero el nombre)

        return {promedio, nombreMax} //Devuelvo con el formato que me han pedido
    }

    console.log(analizarCalificaciones([{nombre:"Ana", cal:8}, {nombre:"Luis", cal:10}, {nombre:"Eva", cal:6}]))
// Tu código aquí

// Ejercicio 26. Crea una función (fibonacci) que genere un array con los primeros 10 números de Fibonacci
// Valores de prueba: N/A
// Salida: [0,1,1,2,3,5,8,13,21,34]

function fibonacci() {
  const serie = [0, 1]; // los dos primeros números

  while (serie.length < 10) {                // hasta tener 10 números
    serie.push(serie[serie.length - 1] + serie[serie.length - 2]); // sumamos los dos últimos
  }

  return serie;
}

console.log(fibonacci()); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Tu código aquí

// Ejercicio 27. Crea una función (agregarAlFinal) que reciba un array y un valor, y agregue el valor al final.
// Valores de prueba: [1,2,3], 4
// Salida: [1,2,3,4]

function agregarAlFinal(array, valor) {
    array.push(valor);
    return array;
}

console.log(agregarAlFinal([1,2,3], 4))

// Ejercicio 28. Crea una función (filtrarStrings) que reciba un array de strings y devuelva solo los que tienen más de 5 caracteres
// Valores de prueba: ["Hola", "JavaScript", "GPT", "Asistente"]
// Salida: ["JavaScript", "Asistente"]

// Tu código aquí

function filtrarStrings(array) {
    return array.filter(string => string.length > 5)
}

console.log(filtrarStrings(["Hola", "JavaScript", "GPT", "Asistente"]))

// Ejercicio 29. Haz una función (ordenarYFiltrar) que reciba un array de números y un valor mínimo, devuelva solo los números mayores al valor y ordenados descendente
// Valores de prueba: [4,7,1,9,2], minValor = 5
// Salida: [9,7]


function ordenarYFiltrar(array, valor) {
    const numerosMayores = array.filter(numero => numero > valor);
    const arrayOrdenado = numerosMayores.sort((a,b) => b-a);
    return arrayOrdenado;
}

console.log(ordenarYFiltrar([4,7,1,9,2], 5))

// Tu código aquí

// Ejercicio 30. Crea una función (aplicarDescuento) que reciba un array de objetos {producto, precio} y aplique 10% de descuento a precios mayores a 100
// Valores de prueba: [{producto:"Laptop", precio:1200}, {producto:"Mouse", precio:50}]
// Salida: [{producto:"Laptop", precio:1080}, {producto:"Mouse", precio:50}]

function aplicarDescuento(array) {
  return array.map(obj => { //Hago un map con una condición
    if (obj.precio > 100) { //Si el obj.precio es mayor que 100
      obj.precio = obj.precio * 0.9; // Modifico el precio y ahora obj.precio es igual obj.precio * 0.9
    }
    return obj; //Devuelvo obj, que devolverá el original si no cumple la condición y si la cumple, devolverá el obj modificado
  });
}

console.log(aplicarDescuento([{producto:"Laptop", precio:1200}, {producto:"Mouse", precio:50}]))


// Tu código aquí

// Ejercicio 31. Crea una función (eliminarUltimo) que reciba un array y elimine el último elemento.
// Valores de prueba: [1,2,3]
// Salida: [1,2]

function eliminarUltimo(array) {
    array.pop();
    return array;
}

console.log(eliminarUltimo([1,2,3]))

// Tu código aquí

// Ejercicio 32. Haz una función (parOImpar) que determine si un número es par o impar usando operador ternario
// Valores de prueba: 7, 8
// Salida: Impar, Par

// Tu código aquí

// Ejercicio 33. Crea una función (entre10y20) que determine si un número está entre 10 y 20 inclusive
// Valores de prueba: 15, 25
// Salida: true, false

// Tu código aquí

// Ejercicio 34. Crea una función (agregarAlInicio) que reciba un array y un valor, y agregue el valor al inicio.
// Valores de prueba: [2,3,4], 1
// Salida: [1,2,3,4]

// Tu código aquí

// Ejercicio 35. Crea una función (procesarString) que reciba un string, verifique si empieza con "Hola" y termina con "!" y lo repita 3 veces
// Valores de prueba: "Hola mundo!"
// Salida: true, "Hola mundo!Hola mundo!Hola mundo!"

// Tu código aquí

// Ejercicio 36. Crea una función (duplicarArray) que reciba un array de números y devuelva un array con el doble de cada número.
// Valores de prueba: [1,2,3]
// Salida: [2,4,6]

// Tu código aquí

// Ejercicio 37. Crea una función (mayoresDeEdad) que reciba un array de edades y devuelva solo las mayores de 18 usando filter.
// Valores de prueba: [12,19,23,15]
// Salida: [19,23]

// Tu código aquí

// Ejercicio 38. Crea una función (verificarArray) que reciba un array de números y devuelva {algunNegativo, todosPositivos} usando some y every
// Valores de prueba: [1,2,-3,4]
// Salida: {algunNegativo:true, todosPositivos:false}

// Tu código aquí

// Ejercicio 39. Crea una función (primerMayor10) que reciba un array de números y devuelva el primer número mayor que 10 usando find
// Valores de prueba: [3,7,12,8]
// Salida: 12

// Tu código aquí

// Ejercicio 40. Crea una función (convertirBooleano) que reciba un valor y lo convierta a booleano mostrando también su tipo
// Valores de prueba: 0, "hola"
// Salida: {valorBooleano:false, tipo:'boolean'}, {valorBooleano:true, tipo:'boolean'}

// Tu código aquí

// Ejercicio 41. Crea una función (esEntero) que determine si un número es entero usando Number.isInteger
// Valores de prueba: 5, 3.14
// Salida: true, false

// Tu código aquí

// Ejercicio 42. Crea una función (diasHastaFinDeAno) que reciba un objeto Date y devuelva la cantidad de días hasta fin de año
// Valores de prueba: new Date("2025-11-20")
// Salida: 41

// Tu código aquí

// Ejercicio 43. Crea una función (validarPositivo) que lance un error si el número es negativo
// Valores de prueba: -5
// Salida: "Número negativo no permitido"

// Tu código aquí

// Ejercicio 44. Crea una función (filtrarUsuarios) que reciba un array de objetos {nombre, edad} y devuelva solo los mayores de 18
// Valores de prueba: [{nombre:"Ana", edad:25},{nombre:"Luis", edad:17}]
// Salida: [{nombre:"Ana", edad:25}]

// Tu código aquí

// Ejercicio 45. Crea una función (nombresMayusculas) que reciba un array de objetos {nombre} y devuelva un array de nombres en mayúsculas
// Valores de prueba: [{nombre:"Ana"},{nombre:"Luis"}]
// Salida: ["ANA","LUIS"]

// Tu código aquí

// Ejercicio 46. Crea una función (cuadradosPares) que reciba un array de números y devuelva un array con el cuadrado de los números pares
// Valores de prueba: [1,2,3,4]
// Salida: [4,16]

// Tu código aquí

// Ejercicio 47. Crea una función (contieneValor) que reciba un array y un valor, y determine si el array contiene ese valor usando includes
// Valores de prueba: [1,2,3], 2; [1,2,3], 5
// Salida: true, false

// Tu código aquí

// Ejercicio 48. Crea una función (eliminarElementoIndice) que reciba un array y un índice, y elimine el elemento en ese índice.
// Valores de prueba: [1,2,3,4], 2
// Salida: [1,2,4]

// Tu código aquí

// Ejercicio 49. Crea una función (repetirTexto) que reciba un string y un número N, y devuelva el string repetido N veces
// Valores de prueba: "Hola",3
// Salida: "HolaHolaHola"

// Tu código aquí

// Ejercicio 50. Crea una función (copiarArray) que reciba un array y devuelva una copia.
// Valores de prueba: [1,2,3]
// Salida: [1,2,3]

// Tu código aquí