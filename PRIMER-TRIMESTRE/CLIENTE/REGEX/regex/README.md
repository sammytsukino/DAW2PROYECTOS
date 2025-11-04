Flags (banderas)

g global: buscar todas las coincidencias
i case insensitive: ignora mayúsculas y minúsculas
m multilinea: ^ y $ funcionan en cada línea
s dotAll: el punto(.) incluye saltos de línea
u unicode: habilita soporte completo Unicode
y sticky: buscar desde la posición exacta


Caracteres especiales:

Básicos:

. = cualquier carácter excepto salto de línea
/d = dígito (0-9)
/D = no digito
/w = carácter alfanumérico (a-Z, A-Z, 0-9)
/W = no alfanumérico
/s = espacio en blanco (espacio, tab, salto de línea)
/S = no espacio en blanco 

Anclas

^ inicio de la cadena
$ fin de la cadena
/b límite de palabra
/B no límite de palabra

Cuantificadores
* 0 o más veces
+ 1 o más veces
? 0 o 1 vez (opcional)
{n} exactamente n veces
{n,} n o más veces
{n,m} entre n y m

grupos y conjuntos
[abc] cualquier de a, b o c
[^abc] cualquir carácter excepto a,b,c

[a-z] rango de a-z
(abc) grupo de captura
(?:abc) grupo sin captura
| OR lógico



Métodos de String
test() verificar si hay coincidencia 
const regex = /hola/i;

regex.test("Hola mundo"); --> True


match() retorna array con coincidencias

"2025-11-04".match(/d+/g) // ["2025", "11", "04"]


search() retorna indice de la primera coincidencia

"hola mundo".search(/mundo/) --> 5

replace
split

Métodos de Regex
exec() busca coincidencia y retorna información detallada

const regex = /(\w+)@(\w+)/;
const resultado = regex.exec("email@sammy.com")

// resultado[0]: coincidencia completa
resultado[1], resultado[2]: (email) y (sammy)