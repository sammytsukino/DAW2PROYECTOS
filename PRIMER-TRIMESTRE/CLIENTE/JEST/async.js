/* console.log("primero")
setTimeout(()=> {console.log("segundo")}, 1000)

console.log("tercero") */

// callback: paso una función que se ejecuta cuando termina la operación

/* function hacerAlgo(callback) {
    setTimeout(() => {
        console.log("está listo")
    }, 5000)
}

hacerAlgo((msg) => console.log(msg)) */

// promesas: representan un resultado futuro de una operación 

function hacerAlgo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("listo"), 5000)
    })
}

hacerAlgo().then((msg) => console.log(msg));

// async/await: sintaxis moderna para trabajar las promesas

async function run() {
    const msg = await hacerAlgo();
    console.log(msg)
}

run();


// pedir datos a un servidor

async function getUser() {
    const response = await fetch('https://api.pokemon.com/users')
    const data = await response.json();
    console.log(data)
}

getUser();
console.log("Esto se ejecuta mientras esperamos a la API")

fetch(url, opciones)
    .then(response => response.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))

