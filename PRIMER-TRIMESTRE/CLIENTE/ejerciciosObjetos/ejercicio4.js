// Ejercicio: Uso del método find en JavaScript

// 1. Crea un array de objetos que representen libros. Cada libro debe tener propiedades como título, autor, año y género

const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        genero: "Distopía"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        año: 1943,
        genero: "Fábula"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        genero: "Romance"
    },
    {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        año: 1981,
        genero: "Novela"
    }
]; 

// 2. Crea una función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)


function encontrarLibro(titulo) {
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase())
}

const libro1 = encontrarLibro("Orgullo y prejuicio")
console.log("Libro encontrado por título: ", libro1)

// 3. Crea una función para encontrar el primer libro de un autor específico

function encontrarPorAutor(autor) {
    return libros.find(libro => libro.autor.toLowerCase() === autor.toLowerCase())
}

const libro2 = encontrarPorAutor("Gabriel García Márquez")
console.log(console.log("Libro encontrado por autor: ", libro2))

// 4. Crea una función para encontrar un libro que cumpla múltiples criterios (por ejemplo, autor y año)

function encontrarPorCriterio (criterios) {
    return libros.find(libro => {
        return Object.keys(criterios).every(key => libro[key] === criterios[key]);
    })
}

const libro3 = encontrarPorCriterio({autor: "Jane Austen", titulo: "Orgullo y prejuicio"})
console.log("Libro encontrado: ", libro3)

// 5. Intenta buscar un libro que no exista y muestra el resultado

const libro4 = encontrarPorCriterio({autor: "Jane Pili", titulo: "Orgullo y antonia"})
console.log("Libro encontrado: ", libro4)
