function formatearConMoneda(numero) {
    return numero.toFixed(2) + "  €";
}

//Numero a string SIEMPRE -> ponemos los decimales que queramos (2)


// 9. Utiliza map junto con la función de formateo para formatear un array de precios

const precios = [20, 50, 30];

const preciosFormateados = precios.map(precio => formatearConMoneda(precio));

console.log(preciosFormateados)