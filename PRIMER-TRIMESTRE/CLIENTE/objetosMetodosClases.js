/* Ejercicio 1: Acceso a Propiedades con Notación de Puntos y Corchetes
Crea un objeto llamado person con propiedades como name, age y city. 
Luego, accede a estas propiedades utilizando tanto 
la notación de puntos como la notación de corchetes. */

const person = {
    name: 'Ana',
    age: 37,
    city: 'Sevilla'
}

console.log(person.name)
console.log(person['age'])


/* Ejercicio 2: Recorriendo Propiedades con for...in
Define un objeto car con las propiedades brand, model y year. 
Asigna valores a estas propiedades y luego muestra 
la información completa del coche en la consola. */

const car = {
    brand: "Toyota",
    model: "A24",
    year: 2021
}

for (let feature in car) {
    console.log(`${feature}: ${car[feature]}`);
}


/* Ejercicio 3: Creación de Objeto con Notación Literal
Utiliza la notación literal de objeto para crear un objeto llamado 
book con propiedades como title, author y year. 
Imprime el objeto en la consola. */


const book = {
    title: "The great Gatsby",
    autor: "F. Scott Maripili",
    year: 1925
}

console.log(book);


/* Ejercicio 4: Creación de Constructor de Objetos
Crea un constructor de objetos llamado Product que 
tenga propiedades como name, price y quantity. 
Luego, crea dos instancias de Product con diferentes 
valores y muestra sus detalles. */


function Product(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
}

const product1 = new Product("Sammy", 2020, 100)
const product2 = new Product("Móvil", 500, 2)

console.log(product1)
console.log(product2)

/* Ejercicio 5: Definiendo una Clase y Métodos
Crea una clase llamada Rectangle que tenga propiedades width y 
height. Define un método dentro de la clase que 
calcule el área del rectángulo. Crea una instancia de la clase 
y muestra el área en la consola. */

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }
}

export default Rectangle;

const rectangle = new Rectangle(5,10);

console.log('Area: ', rectangle.calculateArea());

/* Ejercicio 6: Herencia de Clases
Extiende la clase Rectangle para crear una clase 
Square que también tenga un método para calcular el área, pero en este caso, 
el lado es el mismo para todas las direcciones. 
Crea una instancia de Square y muestra su área. */

/* Hecho aparte */


/* Ejercicio 7: Métodos Getters
Modifica la clase Product creada anteriormente para 
incluir un método getter llamado totalPrice que calcule el precio 
total (precio * cantidad). Luego, crea una 
instancia de Product y muestra su precio total. */

/* Ejercicio 8: Métodos Setters
Agrega un método setter a la clase Product que permita 
modificar la cantidad del producto. 
Luego, utiliza el setter para cambiar la cantidad de una instancia 
y muestra el precio total actualizado. */



/* Ejercicio 9: Uso de "this" en Clases:
Crea una clase Person con propiedades name y age. 
Agrega un método introduce que muestre un mensaje como 
"Hola, soy [nombre] y tengo [edad] años". 
Crea una instancia de Person y llama al método introduce. */

/* Ejercicio 10: Herencia con "this" en Clases:
Extiende la clase Person para crear una clase Student. 
Agrega una propiedad adicional grade y sobrescribe el método 
introduce para incluir también 
el grado del estudiante. Crea una instancia 
de Student y llama al método introduce. */