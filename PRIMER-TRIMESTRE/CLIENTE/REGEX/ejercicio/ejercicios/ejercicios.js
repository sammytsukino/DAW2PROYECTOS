// Ejercicio 1: Validar si un string contiene solo números
function soloNumeros(texto) {
  // Implementar usando RegEx
  // Ejemplo: soloNumeros("12345") => true
  // Ejemplo: soloNumeros("123a45") => false
  return /^\d+$/.test(texto)
}

console.log(soloNumeros("12345"))  
console.log(soloNumeros("123a45"))  

// Ejercicio 2: Contar cuántas vocales hay en un texto
function contarVocales(texto) {
  // Implementar usando RegEx con flag 'g' e 'i'
  // Ejemplo: contarVocales("Hola Mundo") => 4
  const matches = texto.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(contarVocales("Hola Mundo"))

// Ejercicio 3: Verificar si un string empieza con mayúscula
function empiezaConMayuscula(texto) {
  // Implementar usando RegEx

  return /^[A-Z]/.test(texto)
empiezaConMayuscula("Hola")
empiezaConMayuscula("hola")
}

console.log(empiezaConMayuscula("Hola"))
console.log(empiezaConMayuscula("hola"))


// Ejercicio 4: Extraer todos los números de un texto
function extraerNumeros(texto) {
  // Implementar usando match()
return texto.match(/\d+/g) || [];
  // Ejemplo: extraerNumeros("Tengo 2 gatos y 3 perros") => ["2", "3"]
}
console.log(extraerNumeros("Tengo 2 gatos y 3 perros"))



// Ejercicio 5: Reemplazar espacios por guiones
function espaciosAGuiones(texto) {
  // Implementar usando replace()
  // Ejemplo: espaciosAGuiones("hola mundo") => "hola-mundo"
  return texto.replace(/\s+/g, "-")
}

console.log(espaciosAGuiones("hola mundo"))


// Ejercicio 6: Validar formato de email básico
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  // Validar formato usuario@dominio.com
  // Ejemplo: validarEmail("juan@gmail.com") => true
  // Ejemplo: validarEmail("juan@gmail") => false
}
console.log(validarEmail("juan@gmail.com"))



// Ejercicio 7: Validar formato de teléfono español
function validarTelefonoES(telefono) {
  // Validar formato: 9 dígitos o +34 seguido de 9 dígitos
  // Ejemplo: validarTelefonoES("612345678") => true
  // Ejemplo: validarTelefonoES("+34612345678") => true

  return /^(\+34)?[6-7]\d{8}$/
}



// Ejercicio 8: Extraer hashtags de un tweet
function extraerHashtags(tweet) {
  // Extraer todas las palabras que empiecen con #
  // Ejemplo: extraerHashtags("Me encanta #JavaScript y #coding") 
  // => ["#JavaScript", "#coding"]
}

// Ejercicio 9: Validar contraseña segura
function validarPassword(password) {
  // Al menos 8 caracteres, una mayúscula, una minúscula, un número
  // Ejemplo: validarPassword("Pass123word") => true
  // Ejemplo: validarPassword("password") => false

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
}

// Ejercicio 10: Censurar palabras prohibidas
function censurarPalabras(texto, palabrasProhibidas) {
  // Reemplazar palabras prohibidas por asteriscos
  // Ejemplo: censurarPalabras("esto es malo", ["malo"]) 
  // => "esto es ****"
  let resultado = texto;
  palabrasProhibidas.forEach(palabra => {
    const regex = new RegExp(palabra, 'gi');
    resultado = resultado.replace(regex, "*".repeat(palabra.length))
  })
  return resultado
}

console.log(censurarPalabras("esto es malísimo", ["malísimo"]))

// Ejercicio 11: Extraer URLs de un texto
function extraerURLs(texto) {
  // Extraer todas las URLs (http:// o https://)
  // Ejemplo: extraerURLs("Visita https://google.com y http://github.com")
  // => ["https://google.com", "http://github.com"]
  return texto.match(/https?:\/\/[^\s]+/g) || [];
}

console.log(extraerURLs("Visita https://google.com y http://github.com"))
// Ejercicio 12: Validar formato de fecha DD/MM/YYYY

function validarFecha(fecha) {
  // Validar formato DD/MM/YYYY
  // Ejemplo: validarFecha("25/12/2024") => true
  // Ejemplo: validarFecha("2024-12-25") => false
  return /^d{2}\/d{2}\/d{4}/

}

// Ejercicio 13: Validar formato de tarjeta de crédito
function validarTarjeta(numero) {
  // Validar 16 dígitos, opcionalmente separados por espacios o guiones
  // Ejemplo: validarTarjeta("1234-5678-9012-3456") => true
  // Ejemplo: validarTarjeta("1234 5678 9012 3456") => true
  return /^(\d{4}[\s-]?{3})$/
}

// Ejercicio 14: Extraer nombres de usuario de menciones
function extraerMenciones(texto) {
  // Extraer @usuario (letras, números, guiones bajos)
  // Ejemplo: extraerMenciones("Hola @juan_23 y @maria") 
  // => ["juan_23", "maria"]
  const matches = [...texto.matchAll(/@([A-Za-z0-9_]+)/g)];
  return matches.map(m => m[1]);
}

// Ejercicio 15: Convertir texto a camelCase
function toCamelCase(texto) {
  // Convertir "hola mundo feliz" a "holaMundoFeliz"
  // Pista: usar replace con función callback
  if (!texto) return '';
  return texto
    .trim()
    .split(/\s+/)
    .map((word, idx) => {
      if (idx === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Ejercicio 16: Validar código postal español
function validarCodigoPostal(cp) {
  // 5 dígitos, primeros dos entre 01 y 52
  // Ejemplo: validarCodigoPostal("28001") => true
  // Ejemplo: validarCodigoPostal("99999") => false
  return /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(cp);
}

// Ejercicio 17: Extraer información de HTML
function extraerTextoHTML(html) {
  // Eliminar todas las etiquetas HTML
  // Ejemplo: extraerTextoHTML("<p>Hola <b>mundo</b></p>") => "Hola mundo"
  if (!html) return '';
  // Quitar tags y normalizar espacios
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Ejercicio 18: Validar formato de hora HH:MM
function validarHora(hora) {
  // Validar formato 00:00 a 23:59
  // Ejemplo: validarHora("14:30") => true
  // Ejemplo: validarHora("25:00") => false
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(hora);
}

// Ejercicio 19: Extraer parámetros de URL
function extraerParametrosURL(url) {
  // Extraer pares clave=valor de una URL
  // Ejemplo: extraerParametrosURL("http://example.com?id=123&nombre=Juan")
  // => { id: "123", nombre: "Juan" }
  const resultado = {};
  if (!url || typeof url !== 'string') return resultado;
  const qIndex = url.indexOf('?');
  if (qIndex === -1) return resultado;
  let query = url.slice(qIndex + 1).split('#')[0];
  if (!query) return resultado;
  query.split('&').forEach(pair => {
    if (!pair) return;
    const [rawKey, rawVal] = pair.split('=');
    const key = decodeURIComponent(rawKey || '').trim();
    const val = rawVal === undefined ? '' : decodeURIComponent(rawVal);
    if (key) resultado[key] = val;
  });
  return resultado;
}

// Ejercicio 20: Validar NIF/NIE español
function validarNIF(nif) {
  // Validar formato: 8 dígitos + letra o letra + 7 dígitos + letra
  // Ejemplo: validarNIF("12345678Z") => true
  // Ejemplo: validarNIF("X1234567L") => true (NIE)
  if (!nif || typeof nif !== 'string') return false;
  const value = nif.toUpperCase().trim();
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

  // NIF: 8 digits + letter
  const nifMatch = value.match(/^(\d{8})([A-Z])$/);
  if (nifMatch) {
    const num = parseInt(nifMatch[1], 10);
    const letter = nifMatch[2];
    return letters[num % 23] === letter;
  }

  // NIE: leading letter (X,Y,Z) + 7 digits + letter
  const nieMatch = value.match(/^([XYZ])(\d{7})([A-Z])$/);
  if (nieMatch) {
    const prefix = nieMatch[1];
    const digits = nieMatch[2];
    const letter = nieMatch[3];
    const prefixNum = prefix === 'X' ? '0' : prefix === 'Y' ? '1' : '2';
    const num = parseInt(prefixNum + digits, 10);
    return letters[num % 23] === letter;
  }

  return false;
}

// --- Pruebas rápidas ---
console.log('Ej 14:', extraerMenciones("Hola @juan_23 y @maria"));
console.log('Ej 15:', toCamelCase('hola mundo feliz'));
console.log('Ej 16:', validarCodigoPostal('28001'), validarCodigoPostal('99999'));
console.log('Ej 17:', extraerTextoHTML('<p>Hola <b>mundo</b></p>'));
console.log('Ej 18:', validarHora('14:30'), validarHora('25:00'));
console.log('Ej 19:', extraerParametrosURL('http://example.com?id=123&nombre=Juan'));
console.log('Ej 20:', validarNIF('12345678Z'), validarNIF('X1234567L'));