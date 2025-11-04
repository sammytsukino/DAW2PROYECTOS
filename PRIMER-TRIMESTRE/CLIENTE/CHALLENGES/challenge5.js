/* En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2. */


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus


/* function decode(mensaje) {
    while (mensaje.includes('(')) { //Mientras haya un paréntesis, hago:
        let indiceCierre = mensaje.indexOf(')') //Busco el índice del último paréntesis (izquierda a derecha)
        console.log(indiceCierre)
        let indiceApertura = mensaje.lastIndexOf('(', indiceCierre) //Busco el índice del paréntesis que abre al paréntesis de cierre que he encontrado. Tomo el string desde el inicio hasta el límite (indiceCierre) y desde ahí, de derecha a izquierda, encuentro la primera última ocurrencia de '('
        console.log(indiceApertura)

        let textoInvertido = mensaje.substring(indiceApertura+1, indiceCierre)//Una vez tengo ambos índices, hago un substring y extraigo desde indiceApertura + 1 (porque no quiero el paréntesis) y hasta indiceCierre (porque substring no incluye el último índice)
        console.log(textoInvertido)
        let inverso = textoInvertido.split('').reverse().join('');//Una vez tengo el texto extraído, lo divido en carácteres con split(''), lo invierto con reverse() y lo vuelvo a unir con join('')
        console.log(inverso)

        mensaje = mensaje.substring(0, indiceApertura) + inverso + mensaje.substring(indiceCierre + 1)// Ahora hago que mensaje sea la construcción nueva, que en este caso es substring de mensaje desde 0 hasta indiceApertura + inverso + subtring desde indiceCierre + 1 hasta el final.
    }
    return mensaje;
}


console.log(c) // santaclaus

function decode(cadena) {
    let cadenaNueva = [""];

    for(let letra of cadena) {
        if(letra !== '(' && letra !== ')'){
            cadenaNueva[cadenaNueva.length - 1] += letra;
        } else if (letra === '('){
            cadenaNueva.push('');
        } else if (letra === ')'){
            let contenido = cadenaNueva.pop();
            let reverse = contenido.split('').reverse().join('');
            cadenaNueva[cadenaNueva.length - 1] += reverse;
        }
    }
    return cadenaNueva[0];
} */


function decode(message) {
    while (message.includes('(')) {
        message = message.replace(/\(({^()}*)\)/g, (match, content) => {
        return content.split('').reverse().join('');
        })
    }
    
    return message;
}

let texto = "hola mundo"
let nuevo = texto.replace("mundo", "amiga")
console.log(nuevo)