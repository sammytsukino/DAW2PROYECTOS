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

