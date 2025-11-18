# API Final Fantasy VII Remake

Aplicación en **Node.js + Express** para gestionar personajes de *Final Fantasy VII Remake*. Incluye **API REST** y **vistas Pug**.  
La aplicación usa un array en memoria como base de datos y funciona en el **puerto 8080**.

---

## 📌 Funcionalidad

La API permite:

- Listar todos los personajes.
- Consultar un personaje por su identificador.
- Crear, actualizar y borrar personajes con validaciones:

  - Cuerpo vacío → **400**
  - Identificador o nombre repetido → **400**
  - Nivel fuera de 1–99 → **400** con mensaje: *"Level must be between 1 and 99"*
  - Identificador inexistente en PUT/DELETE → **404** con *"Character does not exist"*

Vistas Pug:

- `/index` → mensaje de bienvenida  
- `/list` → lista de personajes o *"There are no characters"*  
- `/new` → formulario para crear un personaje  

---

## 🧪 Probar la API en Postman

Colección publicada con todos los endpoints y tests:  
**https://www.postman.com/sammytsukino-5889249/workspace/actividad1/collection/48709244-d1dc443d-ce04-4f01-8f01-62fe00cd1927?action=share&creator=48709244**

### Pasos:

1. Importar la colección en Postman.  
2. Iniciar la aplicación en `http://localhost:8080`.  
3. Ejecutar la colección completa.  
4. La colección restaura los datos al final, permitiendo repetir las pruebas sin errores.

---
