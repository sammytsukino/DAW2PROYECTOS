# Teoría de RegEx en JavaScript

## ¿Qué son las Expresiones Regulares?

Las expresiones regulares (RegEx) son patrones que se utilizan para buscar, validar y manipular texto. En JavaScript, son objetos que permiten trabajar con cadenas de forma muy potente.

---

## Creación de RegEx

Hay dos formas de crear expresiones regulares en JavaScript:

```javascript
// 1. Notación literal (más común)
const regex1 = /patrón/flags;

// 2. Constructor RegExp
const regex2 = new RegExp('patrón', 'flags');
```

---

## Flags (Banderas)

| Flag | Nombre | Descripción |
|------|--------|-------------|
| `g` | Global | Busca todas las coincidencias |
| `i` | Case insensitive | Ignora mayúsculas/minúsculas |
| `m` | Multiline | ^ y $ funcionan en cada línea |
| `s` | Dotall | El punto (.) incluye saltos de línea |
| `u` | Unicode | Habilita soporte completo Unicode |
| `y` | Sticky | Busca desde la posición exacta |

---

## Caracteres Especiales

### Caracteres Básicos

| Carácter | Descripción |
|----------|-------------|
| `.` | Cualquier carácter excepto salto de línea |
| `\d` | Dígito (0-9) |
| `\D` | No dígito |
| `\w` | Carácter alfanumérico (a-z, A-Z, 0-9, _) |
| `\W` | No alfanumérico |
| `\s` | Espacio en blanco (espacio, tab, salto de línea) |
| `\S` | No espacio en blanco |

### Anclas

| Carácter | Descripción |
|----------|-------------|
| `^` | Inicio de la cadena |
| `$` | Fin de la cadena |
| `\b` | Límite de palabra |
| `\B` | No límite de palabra |

### Cuantificadores

| Cuantificador | Descripción |
|---------------|-------------|
| `*` | 0 o más veces |
| `+` | 1 o más veces |
| `?` | 0 o 1 vez (opcional) |
| `{n}` | Exactamente n veces |
| `{n,}` | n o más veces |
| `{n,m}` | Entre n y m veces |

### Grupos y Conjuntos

| Expresión | Descripción |
|-----------|-------------|
| `[abc]` | Cualquiera de a, b o c |
| `[^abc]` | Cualquier carácter excepto a, b o c |
| `[a-z]` | Rango de a a z |
| `(abc)` | Grupo de captura |
| `(?:abc)` | Grupo sin captura |
| `\|` | OR lógico |

---

## Métodos de JavaScript

### Métodos de String

#### `test()` - Verifica si hay coincidencia (retorna boolean)

```javascript
const regex = /hola/i;
regex.test("Hola mundo"); // true
```

#### `match()` - Retorna array con coincidencias

```javascript
"2024-11-04".match(/\d+/g); // ["2024", "11", "04"]
```

#### `search()` - Retorna índice de la primera coincidencia

```javascript
"Hola mundo".search(/mundo/); // 5
```

#### `replace()` - Reemplaza coincidencias

```javascript
"Hola mundo".replace(/mundo/, "JavaScript"); // "Hola JavaScript"
```

#### `split()` - Divide string usando regex

```javascript
"a,b;c d".split(/[,;\s]/); // ["a", "b", "c", "d"]
```

### Métodos de RegExp

#### `exec()` - Busca coincidencia y retorna información detallada

```javascript
const regex = /(\w+)@(\w+)/;
const resultado = regex.exec("email@dominio.com");
// resultado[0]: coincidencia completa
// resultado[1], resultado[2]: grupos capturados
```

---

## Ejemplos Prácticos

### Validar Email

```javascript
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

validarEmail("usuario@ejemplo.com"); // true
```

### Extraer Números

```javascript
const texto = "Tengo 5 manzanas y 3 naranjas";
const numeros = texto.match(/\d+/g);
console.log(numeros); // ["5", "3"]
```

### Reemplazar con Callback

```javascript
const texto = "tengo 2 perros y 3 gatos";
const resultado = texto.replace(/\d+/g, (match) => {
  return parseInt(match) * 2;
});
console.log(resultado); // "tengo 4 perros y 6 gatos"
```

### Grupos de Captura

```javascript
const fecha = "2024-11-04";
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const [, año, mes, dia] = fecha.match(regex);
console.log(`Año: ${año}, Mes: ${mes}, Día: ${dia}`);
// Año: 2024, Mes: 11, Día: 04
```

---

## Recursos 

- [MDN Web Docs - RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Regex101](https://regex101.com/) - Probador y depurador de regex en línea
- [RegExr](https://regexr.com/) - Herramienta de aprendizaje y testing

## Juegos 

1. **Regex Crossword** ([regexcrossword.com](https://regexcrossword.com)) - Crucigramas donde resuelves puzzles usando expresiones regulares. Muy adictivo y educativo.

2. **Regex Golf** ([alf.nu/RegexGolf](https://alf.nu/RegexGolf)) - Desafíos donde debes escribir la regex más corta posible para coincidir con ciertos patrones.

3. **RegexOne** ([regexone.com](https://regexone.com)) - Tutorial interactivo con ejercicios progresivos desde nivel principiante.

4. **HackerRank Regex Challenges** ([hackerrank.com/domains/regex](https://www.hackerrank.com/domains/regex)) - Desafíos de programación que involucran regex con diferentes niveles de dificultad.

5. **Regex Riddles** ([regexriddler.com/] (https://regexriddler.com/)) - Acertijos donde debes resolver problemas específicos con regex.








