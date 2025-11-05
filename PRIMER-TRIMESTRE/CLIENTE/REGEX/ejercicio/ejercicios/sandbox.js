function censurarPalabras(texto, palabrasProhibidas) {
  let resultado = texto;
  palabrasProhibidas.forEach(palabra => {
    const escaped = palabra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');
    resultado = resultado.replace(regex, "*".repeat(palabra.length));
  });
  return resultado;
}

console.log(censurarPalabras("esto es malísimo", ["malísimo"]));