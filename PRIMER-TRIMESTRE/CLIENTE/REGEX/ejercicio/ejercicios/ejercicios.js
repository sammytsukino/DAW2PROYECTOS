// Ejercicio 1: Validar si un string contiene solo números
function soloNumeros(texto) {
  // Implementar usando RegEx
  // Ejemplo: soloNumeros("12345") => true
  // Ejemplo: soloNumeros("123a45") => false
}

// Ejercicio 2: Contar cuántas vocales hay en un texto
function contarVocales(texto) {
  // Implementar usando RegEx con flag 'g' e 'i'
  // Ejemplo: contarVocales("Hola Mundo") => 4
}

// Ejercicio 3: Verificar si un string empieza con mayúscula
function empiezaConMayuscula(texto) {
  // Implementar usando RegEx
  // Ejemplo: empiezaConMayuscula("Hola") => true
  // Ejemplo: empiezaConMayuscula("hola") => false
}

// Ejercicio 4: Extraer todos los números de un texto
function extraerNumeros(texto) {
  // Implementar usando match()
  // Ejemplo: extraerNumeros("Tengo 2 gatos y 3 perros") => ["2", "3"]
}

// Ejercicio 5: Reemplazar espacios por guiones
function espaciosAGuiones(texto) {
  // Implementar usando replace()
  // Ejemplo: espaciosAGuiones("hola mundo") => "hola-mundo"
}

// Ejercicio 6: Validar formato de email básico
function validarEmail(email) {
  // Validar formato usuario@dominio.com
  // Ejemplo: validarEmail("juan@gmail.com") => true
  // Ejemplo: validarEmail("juan@gmail") => false
}

// Ejercicio 7: Validar formato de teléfono español
function validarTelefonoES(telefono) {
  // Validar formato: 9 dígitos o +34 seguido de 9 dígitos
  // Ejemplo: validarTelefonoES("612345678") => true
  // Ejemplo: validarTelefonoES("+34612345678") => true
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
}

// Ejercicio 10: Censurar palabras prohibidas
function censurarPalabras(texto, palabrasProhibidas) {
  // Reemplazar palabras prohibidas por asteriscos
  // Ejemplo: censurarPalabras("esto es malo", ["malo"]) 
  // => "esto es ****"
}

// Ejercicio 11: Extraer URLs de un texto
function extraerURLs(texto) {
  // Extraer todas las URLs (http:// o https://)
  // Ejemplo: extraerURLs("Visita https://google.com y http://github.com")
  // => ["https://google.com", "http://github.com"]
}

// Ejercicio 12: Validar formato de fecha DD/MM/YYYY
function validarFecha(fecha) {
  // Validar formato DD/MM/YYYY
  // Ejemplo: validarFecha("25/12/2024") => true
  // Ejemplo: validarFecha("2024-12-25") => false
}

// Ejercicio 13: Validar formato de tarjeta de crédito
function validarTarjeta(numero) {
  // Validar 16 dígitos, opcionalmente separados por espacios o guiones
  // Ejemplo: validarTarjeta("1234-5678-9012-3456") => true
  // Ejemplo: validarTarjeta("1234 5678 9012 3456") => true
}

// Ejercicio 14: Extraer nombres de usuario de menciones
function extraerMenciones(texto) {
  // Extraer @usuario (letras, números, guiones bajos)
  // Ejemplo: extraerMenciones("Hola @juan_23 y @maria") 
  // => ["juan_23", "maria"]
}

// Ejercicio 15: Convertir texto a camelCase
function toCamelCase(texto) {
  // Convertir "hola mundo feliz" a "holaMundoFeliz"
  // Pista: usar replace con función callback
}

// Ejercicio 16: Validar código postal español
function validarCodigoPostal(cp) {
  // 5 dígitos, primeros dos entre 01 y 52
  // Ejemplo: validarCodigoPostal("28001") => true
  // Ejemplo: validarCodigoPostal("99999") => false
}

// Ejercicio 17: Extraer información de HTML
function extraerTextoHTML(html) {
  // Eliminar todas las etiquetas HTML
  // Ejemplo: extraerTextoHTML("<p>Hola <b>mundo</b></p>") => "Hola mundo"
}

// Ejercicio 18: Validar formato de hora HH:MM
function validarHora(hora) {
  // Validar formato 00:00 a 23:59
  // Ejemplo: validarHora("14:30") => true
  // Ejemplo: validarHora("25:00") => false
}

// Ejercicio 19: Extraer parámetros de URL
function extraerParametrosURL(url) {
  // Extraer pares clave=valor de una URL
  // Ejemplo: extraerParametrosURL("http://example.com?id=123&nombre=Juan")
  // => { id: "123", nombre: "Juan" }
}

// Ejercicio 20: Validar NIF/NIE español
function validarNIF(nif) {
  // Validar formato: 8 dígitos + letra o letra + 7 dígitos + letra
  // Ejemplo: validarNIF("12345678Z") => true
  // Ejemplo: validarNIF("X1234567L") => true (NIE)
}