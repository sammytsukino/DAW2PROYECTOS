//Escribir funcion que capture la división de 0


function dividir(a,b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir entre 0")
        }

        return a/b;

    } catch (error) {
        console.log(error.message)
    }
}

let resultado = dividir(10,2)

dividir(10, 2);

console.log(dividir(10,2))

console.log(resultado)

