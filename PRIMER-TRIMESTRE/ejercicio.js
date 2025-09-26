import fs from "fs";
import os from "os";

let decision = 1;

function imprimirDatos() {
    if (decision === 0) {
        fs.writeFile("memoria.txt", os.totalmem().toString(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Todo ha salido bien");
            }
        });
    } else {
        console.log("No ha funcionado");
    }
}


function leerDatos() {
    if (decision == 1) {
        fs.readFile("memoria.txt", "utf-8", (err, datos) => {
            if (err) console.log(err)
            else console.log(datos)
        })
}
}




imprimirDatos();
leerDatos();

