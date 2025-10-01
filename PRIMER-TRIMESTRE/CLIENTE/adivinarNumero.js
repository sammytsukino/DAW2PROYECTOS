function adivinarNumero(intentosUsuario) {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentosRealizados = 0;
    let i = 0;
    console.log("Intenta adivinar el número (entre 1 y 10)");

    do { 
        if (i >= intentosUsuario.length) break;
        const intento = intentosUsuario[i]
        intentosRealizados++;

        if (intento < numeroSecreto) {
        console.log("Intento " + intentosRealizados + " : Demasiado bajo")
        } else if (intento > numeroSecreto) {
            console.log("Intento " + intentosRealizados + " : Demasiado alto")
        } else {
            console.log("Correcto, has adivinado el número en " + intentosRealizados + " intentos.")
            return;
        }
        i++;
    } while (i < intentosUsuario.length);
    
    console.log("No has adivinado el numero. Era: " + numeroSecreto);
}


const intentosUsuario = [3, 8, 9, 1];
adivinarNumero(intentosUsuario);