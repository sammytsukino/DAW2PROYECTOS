# Ejercicios de CSS: Flexbox, Grid

## **Flexbox**

### Ejercicio 1: Alineación básica
Centrar elementos usando Flexbox


- Crea un contenedor con 3 cajas de 100x100px cada una.
- Usa Flexbox para:
  1. Centrar horizontalmente las cajas.  
  2. Centrar verticalmente las cajas

### Ejercicio 2: Distribución con espacio (Flexbox)
- Crea un contenedor con 4 botones.
- Distribúyelos usando diferentes valores de `justify-content`:  
  - `space-between`  
  - `space-around`  
  - `space-evenly`

### Ejercicio 3: Dirección de los elementos (Flexbox)
- Crea un contenedor con 5 cajas.
- Cambia la dirección de los elementos usando `flex-direction` a:  
  - `row`  
  - `row-reverse`  
  - `column`  
  - `column-reverse` 

### Ejercicio 4: Orden y crecimiento (Flexbox)
- Crea 3 cajas con diferente contenido.
- Cambia el orden visual usando `order`.
- Haz que una caja crezca más que las otras usando `flex-grow`.

## **Grid**

# Ejercicio 5: Grid básico
Crea un grid simple.
1. Crea un contenedor con 6 cajas.
2. Organízalas en 2 filas y 3 columnas usando `grid-template-columns` y `grid-template-rows`.

# Ejercicio 6: Span de elementos
Hacer que un elemento ocupe varias columnas o filas.
1. Crea un grid de 3x3.
2. Haz que la caja del centro ocupe 2 columnas.

# Ejercicio 7: Alineación y espacio
Practicar `justify-items` y `align-items`.
1. Crea un grid de 4x4.
2. Centra todos los elementos dentro de sus celdas.
3. Experimenta con los valores: `start`, `end`, `center`, `stretch`.

# Ejercicio 8: Grid avanzado con áreas
Usar `grid-template-areas`.

Crea un layout de página con las siguientes áreas:

- Header
- Sidebar
- Main content
- Footer

Asigna cada área usando `grid-area` y define el layout con `grid-template-areas`.

## **Z-Index y psocionamiento**

# Ejercicio 9: Elementos superpuestos

- Crea 3 cajas de **150x150px** que se superpongan parcialmente.  
- Asigna distintos valores de `z-index` para controlar cuál está encima de las otras.

# Ejercicio 10: Orden de capas con Flex/Grid

- Crea un contenedor con **4 cajas** distribuidas con **Flexbox** o **Grid**.  
- Haz que **la caja del medio aparezca siempre encima de las otras** usando `z-index`.

# Ejercicio 11: Overlay

- Crea un **fondo oscuro semi-transparente** (`opacity`) que cubra **toda la pantalla**.  
- Coloca un **cuadro de diálogo centrado encima**.  
- Usa `z-index` para asegurarte de que el diálogo esté encima del fondo.  

# Ejercicio 12: Tarjetas interactivas en capas

- Crea un contenedor con **3 tarjetas** (`card`) colocadas una encima de otra, con una ligera rotación y desplazamiento.  
- Usa `position: absolute` y distintos valores de `z-index` para simular **profundidad y superposición**.  
- Al pasar el cursor (`:hover`) sobre una tarjeta, haz que:
  - Se **eleve visualmente** (mayor `z-index`).
  - Aumente ligeramente su tamaño (`transform: scale(1.1)`).
  - Añade una sombra para darle efecto 3D (`box-shadow`).







