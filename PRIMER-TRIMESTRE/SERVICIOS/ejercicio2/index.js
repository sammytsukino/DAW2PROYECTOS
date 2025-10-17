const express = require("express")
const app = express()

app.use(express.json())

let estudiantes = {
    "Luis": [7.8, 5, 9.3],
    "José": [5.6, 8, 2.5],
    "Laura": [8.2, 7.9, 9.4]
}


app.get("/estudiantes/:nombre/notas", (req, res) => {
    const nombre = req.params.nombre;
    const notas = estudiantes[nombre];
    if (!estudiantes.hasOwnProperty(nombre)) {
        res.status(404).send("Estudiante no encontrado")
    } else {
        res.json(notas)
    }
});

app.post("/estudiantes", (req,res) => {
    const est = req.body;
    if (Object.keys(est) in estudiantes) {
        res.status(400).send("El estudiante ya está en la lista")
    } else {
        simulacion = {
            ...simulacion,
            ...est
        }
        res.send("Estudiante añadido")
    }
})

/* app.post("/estudiantes/:nombre/notas", (req, res) => {
    const nombre = req.params.nombre;
    const nota = req.body.nota;
    estudiantes[nombre].push(nota);
    res.send(`Nota añadida: ${nota}`)
})
 */

app.post("/estudiantes/:nombre/notas"), (req,res) => {
    const nombre = req.params.nombre;
    const nota = Object.values(req.body)[0];
    estudiantes[nombre].push(nota);
    res.send("Nota añadida")
}

app.delete("/estudiantes/:nombre", (req,res) => {
    const nombre = req.params.nombre;
    delete estudiantes[nombre];
    res.send("Estudiante eliminado");
})





/* app.post("/nuevoEstudiante", (req, res) => {
    const nuevoEstudiante = req.body;
    const nombres = Object.keys(nuevoEstudiante);

    for (const nombre of nombres) {
        if (estudiantes[nombre]) {
            return res.status(400).json({ error: `Estudiante '${nombre}' ya existe` });
        }
    }

    estudiantes = { ...estudiantes, ...nuevoEstudiante };
    res.status(201).json({ message: "Estudiante añadido", estudiante: nuevoEstudiante });
});
 */
//Este OK


app.listen(8080, () => {
    console.log("Servidor arrancado");
})