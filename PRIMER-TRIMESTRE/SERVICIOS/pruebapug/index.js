const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, rest) => {
    rest.render("index", {"nombre" : req.params.nombre});
})

app.get("/bucle", (req,res) => {
    res.render("bucle", {"usuarios": [
        {
            "nombre" : "Pepito",
            "edad": 20
        },
        {
            "nombre" : "Juanita",
            "edad": 30
        }
    ]})
})


app.listen(3030, () => {
    console.log("Servidor arrancado");
})

app.get("/condicional", (req,res) => {
    res.render("condicional", {productos: ["leche", "huevos", "pan"], title: "Prueba de condicionales"})
})

app.get("/form", (req,res) => {
    res.render("form", {title:"Formulario de contacto"})
})

app.post("/processform", (req, res) => {
    formulario=req.body;
    nombre = formulario.nombre;
    mensaje = formulario.mensaje;
    res.send(`Recibido: ${nombre}, ${mensaje}`)
})