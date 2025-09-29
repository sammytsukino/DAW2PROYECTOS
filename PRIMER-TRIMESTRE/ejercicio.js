import fs from "fs";
import os from "os";

let decision = 0;

function imprimirDatos() {

    fs.writeFile("memoria.txt", os.totalmem().toString(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Todo ha salido bien");
        }
    })
};



function leerDatos() {

    fs.readFile("memoria.txt", "utf-8", (err, datos) => {
        if (err) console.log(err)
        else console.log(datos)
    })
}




if (decision == 0) imprimirDatos();
else leerDatos();

