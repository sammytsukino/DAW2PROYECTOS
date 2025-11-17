// Objeto global

/* let contador = 0;
setInterval(() => {
    contador++;
    console.log(contador)
}, 1000); */

// Usar alerta 3 segundos después de que pasen 2 segundos con setTimeOut()

/* setTimeout(() => {
    alert("tiempo terminado");
}, 3000);
 */
// Crea un objeto date con la fecha actual y muestra por consol:
// año
// mes (sumando 1)
// día del mes
// usando los métodos correspondientes

let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth()+1;
let dia = fecha.getDate();

console.log("Año:", año)
console.log("Mes:", mes)
console.log("Día:", dia)


//Crea una fecha y cámbiale el año a 2030

let miFecha = new Date("15 March 2025");
console.log("Fecha original", miFecha)
miFecha.setFullYear(2030);
console.log("Fecha modificada", miFecha)

// Crear numero con toFixed a 2

let numero = 13.567
let numeroConDecimales = numero.toFixed(2)
console.log(numeroConDecimales)
console.log("Valor", numeroConDecimales)
console.log("Tipo", typeof numeroConDecimales)

//Texto a int

let texto = "123abc"
let numeroEntero = Number.parseInt(texto)
console.log(numeroEntero, typeof numeroEntero)

// Numero aleatorio entre 1 y 10 usando math.random y math.floor()

let numeroAleatorio = Math.floor(Math.random() * 10) +1;
console.log(numeroAleatorio)

// Sacar de un array max y min

let numeros = [5,20,25,3];
let maximo = Math.max(...numeros);
console.log(maximo) 

//Repasar con bucle!!!!!

// Objeto booleano y verificar

let miBoolean = new Boolean(false);

if(miBoolean) {
    console.log("JavaScript lo considera TRUE")
} else  {
    console.log("Lo considera falso ")
}

console.log("Valor del objeto Boolean:", miBoolean.valueOf())

// Convierto el objeto JSOn usando JSON.stringify()

let persona = {
    nombre : "Sammy",
    edad: 32
}

let personaJSON = JSON.stringify(persona)
console.log(typeof personaJSON)
console.log(personaJSON)

// Convierte este JSON a un objeto JS usando JSON.parse()

let jsonString = "{\"producto\": \"ordenador\", \"precio\": 1}";

let producto = JSON.parse(jsonString)
console.log("Objeto JS:", producto, typeof producto)

