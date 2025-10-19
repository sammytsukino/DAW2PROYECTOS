// Ejercicio: Manejo de objetos en JavaScript

// 1. Crea un objeto que represente a un estudiante, con propiedades como nombre, edad, carrera, materias y calificaciones

const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Física", "Programación"],
    calificaciones: {
        matematicas: 90,
        fisica: 85,
        programacion: 95
    }
};

// 2. Accede y muestra algunas propiedades del objeto

console.log("nombre:", estudiante.nombre)
console.log("edad:", estudiante.edad)
console.log("materias:", estudiante.materias)


// 3. Modifica una propiedad del objeto

estudiante.edad = 25;
console.log(estudiante)

// 4. Añade una nueva propiedad al objeto

estudiante.email = "juan@holi.com";
console.log(estudiante)

// 5. Recorre todas las propiedades del objeto usando un bucle for...in

for (let propiedad in estudiante) {
    console.log(propiedad + ".", estudiante[propiedad])
}

// 6. Crea un método dentro del objeto que realice alguna acción (por ejemplo, presentar al estudiante)

estudiante.presentar = function() {
    console.log("Hola, soy", estudiante.nombre)
}

// 7. Llama al método que creaste

estudiante.presentar()

// 8. Crea un array de objetos, donde cada objeto represente a un estudiante diferente

const estudiantes = [
    {
        nombre: "Juan",
        edad: "24",
        mail: "ay@lorelo.com"
    },
    {
        nombre: "Sammy",
        edad: "24",
        mail: "ay@lorelo.com"
    },
    {
        nombre: "Antonias",
        edad: "24",
        mail: "ay@lorelo.com"
    }
]

// 9. Recorre el array de objetos e imprime información de cada estudiante

estudiantes.forEach(estudiante => {
    console.log("nombre: ", estudiante.nombre + " edad: ", estudiante.edad)
})

// 10. Busca un estudiante por su nombre dentro del array y muestra la información si lo encuentras

const nombreBuscado = "Antonia"
const nombreEncontrado = estudiantes.find(estudiante => estudiante.nombre === nombreBuscado)

if (nombreEncontrado) {
    console.log("Estudiante encontrado:", nombreEncontrado)
} else {
    console.log("No existe ", nombreBuscado)
}

