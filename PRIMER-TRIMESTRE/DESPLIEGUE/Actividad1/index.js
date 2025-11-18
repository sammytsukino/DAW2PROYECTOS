const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', './views');

// Base de datos simulada
let characters = [
    { id: 1, name: 'Cloud Strife', job: 'Soldier', weapon: 'Buster sword', level: 25 },
    { id: 2, name: 'Tifa Lockhart', job: 'Fighter', weapon: 'Leather gloves', level: 22 },
    { id: 3, name: 'Aerith Gainsborough', job: 'Mage', weapon: 'Magic staff', level: 20 }
];

// GET - Devuelve todos los personajes
app.get('/characters', (req, res) => {
    res.send(characters);
});

// GET - Devuelve un personaje por ID
app.get('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let encontrado = null;
    
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            encontrado = characters[i];
        }
    }
    
    if (!encontrado) {
        res.sendStatus(404);
    } else {
        res.send(encontrado);
    }
});

// POST - Crea un nuevo personaje
app.post('/characters', (req, res) => {
    const newCharacter = req.body;
    
    // Validar que el cuerpo no esté vacío
    if (!newCharacter || Object.keys(newCharacter).length === 0) {
        res.sendStatus(400);
        return;
    }
    
    // Validar que el nivel esté entre 1 y 99
    if (newCharacter.level < 1 || newCharacter.level > 99) {
        res.status(400).send("Level must be between 1 and 99");
        return;
    }
    
    // Validar que el ID no esté repetido
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === newCharacter.id) {
            res.sendStatus(400);
            return;
        }
    }
    
    // Validar que el nombre no esté repetido
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].name === newCharacter.name) {
            res.sendStatus(400);
            return;
        }
    }
    
    // Agregar el personaje
    characters.push(newCharacter);
    res.status(201).send(newCharacter);
});

// PUT - Actualiza un personaje
app.put('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCharacter = req.body;
    
    // Validar que el cuerpo no esté vacío
    if (!updatedCharacter || Object.keys(updatedCharacter).length === 0) {
        res.sendStatus(400);
        return;
    }
    
    // Buscar si el personaje existe
    let encontrado = false;
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            encontrado = true;
        }
    }
    
    // Validar que el personaje existe
    if (!encontrado) {
        res.status(404).send("Character does not exist");
        return;
    }
    
    // Validar que el nivel esté entre 1 y 99
    if (updatedCharacter.level < 1 || updatedCharacter.level > 99) {
        res.status(400).send("Level must be between 1 and 99");
        return;
    }
    
    // Validar que el ID no esté repetido 
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === updatedCharacter.id && updatedCharacter.id !== id) {
            res.sendStatus(400);
            return;
        }
    }
    
    // Validar que el nombre no esté repetido 
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].name === updatedCharacter.name && characters[i].id !== id) {
            res.sendStatus(400);
            return;
        }
    }
    
    // Actualizar el personaje
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            characters[i] = updatedCharacter;
        }
    }
    res.sendStatus(204);
});

// DELETE - Elimina un personaje
app.delete('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let encontrado = false;
    
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            encontrado = true;
        }
    }
    
    // Validar que el personaje existe
    if (!encontrado) {
        res.status(404).send("Character does not exist");
        return;
    }
    
    // Eliminar el personaje
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            characters.splice(i, 1);
        }
    }
    res.sendStatus(204);
});


//RUTAS DE PUG

// GET /index - Página de bienvenida
app.get('/index', (req, res) => {
    res.render('index');
});

// GET /list - Lista de personajes
app.get('/list', (req, res) => {
    res.render('list', { characters: characters });
});

// GET /new - Formulario para nuevo personaje
app.get('/new', (req, res) => {
    res.render('new');
});

// POST /create - Procesar el formulario
app.post('/create', (req, res) => {
    const newCharacter = {
        id: parseInt(req.body.id),
        name: req.body.name,
        job: req.body.job,
        weapon: req.body.weapon,
        level: parseInt(req.body.level)
    };
    characters.push(newCharacter);
    res.redirect('/list');
});



app.listen(8080, () => {
    console.log('Servidor arrancado');
});