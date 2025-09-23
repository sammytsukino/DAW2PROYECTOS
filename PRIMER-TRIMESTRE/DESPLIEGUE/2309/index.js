// Importar express
const express = require('express');
const app = express();

// Definir el puerto
const PORT = 8080;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});