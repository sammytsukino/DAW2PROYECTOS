function pedirContraseña(intentos) {
    let i = 0; //Inicio la i como si estuviera en un for, pero fuera, porque estamos en un while
    let encontrado = false; //Con esto controlamos si se ha encontrado la contraseña
    do { //Haz...
        console.log(`Intento número ${i+1}: ${intentos[i]}`) //La impresión de Intento Número i+1 (1, porque i es 0) y lo que haya dentro del array de intentos en esa posición. En este caso, la primera "contraseña"
        if (intentos[i] === "admin") encontrado = true; // Si la contraseña en la posición de i es igual a admin, pon encontrado en true
        i++;//Si en la primera vuelta no ha encontrado sumamos 1 a i para que siga dando vueltecitas
    } while (!encontrado && i<intentos.length); //El programita va a funcionar mientras encontrado esté en false Y la i sea menor que la longitud de los intentos. Si sólo hay 3 "intentos", no tiene sentido que el programa siga adivinando eternamente, porque no tiene lugar al que ir.
    console.log("Contraseña correcta")// Finalmente, imprimo un mensajito de Contraseña encontrada si se ha encontrado
}

const intentos = ['1234', 'qwerty', 'admin'];
pedirContraseña(intentos);