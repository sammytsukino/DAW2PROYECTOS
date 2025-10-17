const express = require("express");
const app = express();

app.use(express.json())

let simulacion = {
    "Juan": ["Pokémon", "Resident Evil", "Zelda"],
    "Alba": ["Animal Crossing", "Mario", "Silent Hill"],
    "Pepe": ["Final Fantasy", "Goat Simulator"]
}

app.get("/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send(simulacion[nombre]);
})

app.post("/nuevaPersona", (req,res) => {
    const nuevaPersona = req.body;
    simulacion = {
        ...simulacion, ...nuevaPersona
    };
    res.send(`Persona añadida: ${JSON.stringify(nuevaPersona)} `);
})

app.post("/:nombre/nuevoJuego", (req, res) => {
    const nombre = req.params.nombre;
    const juego = req.body.juego;
    simulacion[nombre].push(juego)
    res.send(`Juego añadido: ${juego} `);
})

app.delete("/:nombre/:juego", (req, res) => {
    const nombre = req.params.nombre;
    const juego = req.params.juego;
    //const posicion = simulacion[nombre].indexOf(juego);
    //simulacion[nombre].splice(posicion, 1);
    simulacion[nombre] = simulacion[nombre].filter(j => j != juego);
    res.send(`Juego borrado: ${juego} `);
})

app.delete("/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    delete simulacion[nombre];
    res.send(`Persona borrada: ${nombre} `);
})

app.listen(8080, () => {
    console.log("Servidor arrancado");
})