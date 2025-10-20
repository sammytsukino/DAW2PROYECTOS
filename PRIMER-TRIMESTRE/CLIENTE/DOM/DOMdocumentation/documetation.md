
# 🏛️ DOM y JavaScript

El **DOM** (**Document Object Model**) es la interfaz que permite a los programas (principalmente JavaScript) acceder y manipular el contenido, la estructura y los estilos de un documento HTML. Representa la página web como una estructura de árbol, donde cada parte del documento es un **nodo**.


## 🌳 1. Estructura y Componentes del DOM

* **Modelo de Árbol:** El DOM organiza el documento jerárquicamente, partiendo del objeto global **`document`**.
* **Nodos (Nodes):** Cada componente de la página es un nodo:
    * **Nodo Elemento:** Representa una etiqueta HTML (ej: `<div>`, `<p>`).
    * **Nodo Texto:** El contenido textual dentro de un elemento.
    * **Nodo Atributo:** Los atributos de las etiquetas (ej: `id`, `class`).


## 🔍 2. Acceso y Selección de Elementos

Para interactuar con la página, primero hay que "seleccionar" el nodo deseado.

| Método JS | Descripción |
| :--- | :--- |
| **`document.getElementById('id')`** | Selecciona el elemento único por su atributo `id`. (Más rápido) |
| **`document.querySelector('selector')`** | Selecciona el **primer** elemento que coincide con un selector CSS (ej: `div > p`, `#caja`). |
| **`document.querySelectorAll('selector')`** | Selecciona **todos** los elementos que coinciden con el selector, retornando una **NodeList**. |

## 📝 3. Manipulación de Contenido

Permite cambiar o leer el contenido de los nodos.

| Propiedad | Función | Uso Principal |
| :--- | :--- | :--- |
| **`element.textContent`** | Obtiene o establece el **texto plano** de un elemento. | Modificar texto de manera segura. |
| **`element.innerHTML`** | Obtiene o establece el **contenido HTML** de un elemento. | Insertar etiquetas y estructura (ej: `<p><strong>negrita</strong></p>`). |
| **`element.value`** | Obtiene o establece el valor de elementos de **formulario** (`<input>`, `<textarea>`, etc.). | Leer datos ingresados por el usuario. |

## 🎨 4. Manipulación de Estilos y Clases

Es la forma de cambiar la apariencia visual de los elementos.

| Técnica | Descripción |
| :--- | :--- |
| **Estilos Directos** | Se accede y modifica la propiedad **`element.style.propiedadCSS`** (ej: `element.style.color = 'red'`). |
| **`element.classList.add('clase')`** | Añade una clase CSS definida previamente al elemento. |
| **`element.classList.remove('clase')`** | Elimina una clase CSS del elemento. |
| **`element.classList.toggle('clase')`** | **Alterna** la clase: si está presente, la quita; si no, la añade. Ideal para *estados on/off*. |

## ✨ 5. Creación y Estructura del DOM

Permite añadir nuevos elementos a la página o eliminar los existentes.

| Método | Función |
| :--- | :--- |
| **`document.createElement('tag')`** | Crea un nuevo nodo de elemento en **memoria** (aún no visible en la página). |
| **`parent.appendChild(child)`** | Inserta el nodo `child` como el **último hijo** dentro del nodo `parent`. |
| **`element.remove()`** | Elimina el elemento del DOM de manera directa. |
| **`formElement.reset()`** | Resetea los valores de todos los campos de un formulario a sus valores iniciales. |

## 🖱️ 6. Manejo de Eventos

Los eventos son la clave de la interactividad. Permiten ejecutar código JS cuando ocurre algo (un clic, una tecla, etc.).

| Concepto | Función |
| :--- | :--- |
| **`element.addEventListener('evento', funcion)`** | Asocia una función (*handler*) a un elemento que se ejecutará cuando ocurra el `evento` (ej: `'click'`, `'change'`). |
| **`event.target`** | Dentro de la función *handler*, esta propiedad referencia al **elemento específico** que disparó el evento. |
| **Delegación de Eventos** | Consiste en colocar el *listener* en un elemento padre para gestionar los eventos de muchos elementos hijos. Útil en tablas o listas generadas dinámicamente. |