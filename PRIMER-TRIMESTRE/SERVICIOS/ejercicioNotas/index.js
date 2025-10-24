const express = require('express');
const app = express();

app.use(express.json())

simulacion = {
    "Luis": [7.8, 5, 9.3],
    "José": [5.6, 8, 2.5],
    "Laura": [8.2, 7.9, 9.4]
};

app.get("/estudiante/:nombre/notas", (req, res) => {
    const nombre = req.params.nombre;
    const notas = simulacion[nombre];
    if (!notas) { 
        res.sendStatus(404)
    }
    res.send(notas)
});

app.post("/estudiantes", (req,res) =>{
    const nombre = Object.keys(req.body)[0]
    const notas = simulacion[nombre];
    if (notas) { 
        res.sendStatus(400);
    }
    Object.assign(simulacion, req.body);
    res.send("Estudiante añadido")
});

app.post("/estudiantes/:nombre/notas", (req, rest) => {
    const nombre = req.params.nombre;
    simulacion[hombre].push(req.body.nota);
    res.send("Nota añadida")
});

app.delete("/estudiante/:nombre", (req,res) => {
    const nombre = req.params.nombre;
    delete simulacion[nombre];
    res.send("Estudiante eliminado");
});

app.get("/estudiantes/:nombre/media", (req,res) => {
    const nombre = req.params.nombre;
    const notas = simulacion[nombre];
    let suma = 0;
    for (let i = 0; i< notas.length; i++) {
        suma += notas[i];
    }
    const media = suma / notas.length;
    res.send({"media" : media});
})

/* app.get("/estudiantes/media", (req,res) => {
    const nombres = Object.keys(simulacion);
    let sumaTotal = 0;
    let totalNotas = 0;

    for (let i = 0; i < nombres.length; i++) {
        const notas = simulacion[nombres[i]];
        for (let j = 0; j < notas.length; j++) {
            sumaTotal += notas[j];
            totalNotas++;
        }
    }

    const media = totalNotas ? sumaTotal / totalNotas : 0;
    res.send({ "media": media });
})
 */

app.get("/estudiantes/media", (req, res) => {
    let totalNotas = 0;
    let numeroTotal = 0;
    const estudiantes = Object.keys(simulacion)

    for (let i = 0; i < estudiantes.length; i++) {
        const nombre = estudiantes[i];
        const notas = simulacion[nombre];
        for (let j = 0; j < notas.length; j++) {
            totalNotas += notas[j];
            numeroTotal ++;
        }
    }

    const media = totalNotas / numeroTotal;
    res.send({"media": media})
})

app.listen(3030, () => { console.log("El servidor funciona correctamente")})

