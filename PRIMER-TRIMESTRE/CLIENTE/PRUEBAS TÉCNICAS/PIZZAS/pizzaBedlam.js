const PIZZAS = {
    MARGHERITA: { nombre: "Margherita", precio: 9.30 },
    PROSCIUTTO: { nombre: "Prosciutto", precio: 12.00 },
    PROSCIUTTO_E_FUNGHI: { nombre: "Prosciutto e Funghi", precio: 12.50 },
    QUATTRO_STAGIONI: { nombre: "4 Stagioni", precio: 12.50 }
}

const EXTRAS = {
    JAMON_DULCE: { nombre: "Jamón dulce", precio: 0.90 },
    EXTRA_QUESO: { nombre: "Extra Queso", precio: 0.90 },
    TOMATE: { nombre: "Tomate Natural", precio: 0.90 },
    CHAMPINONES: { nombre: "Champiñones", precio: 0.90 },
    ALCACHOFAS: { nombre: "Alcachofas", precio: 0.90 },
    ATUN: { nombre: "Atún", precio: 0.90 },

    OLIVAS: { nombre: "Olivas", precio: 1.20 },
    ALCAPARRAS: { nombre: "Alcaparras", precio: 1.20 },
    JAMON_SERRANO: { nombre: "Jamón Serrano", precio: 1.20 },
    POLLO: { nombre: "Pollo", precio: 1.20 },

    ANCHOAS: { nombre: "Anchoas", precio: 2.20 },
    SALMON: { nombre: "Salmón", precio: 2.20 },
    TERNERA: { nombre: "Ternera picada", precio: 2.20 },

    SALSA_BARBACOA: { nombre: "Salsa Barbacoa", precio: 1.00 },
    SALSA_PICANTE: { nombre: "Salsa Picante", precio: 0.90 },

    BORDE_QUESO: { nombre: "Borde relleno de queso", precio: 1.20 }
}

class Pizza {
    constructor(tipoPizza) {
        this.nombre = tipoPizza.nombre;
        this.precioBase = tipoPizza.precio;
        this.extras = [];
    }

    agregarExtra(extra) {
        this.extras.push(extra)
        return this;
    }

    calcularPrecio() {
        return this.precioBase + this.extras.reduce((sum,e) => sum + e.precio, 0);
    }

    generarTicket() {
        let ticket = `${this.nombre.toUpperCase()} ${this.precioBase.toFixed(2)}€\n`;

        this.extras.forEach(extra => {
            ticket += `+ ${extra.nombre.toUpperCase()} ${extra.precio.toFixed(2)}€\n`; 
        });

        ticket += "-".repeat(30) + "\n";
        ticket += `TOTAL ${this.calcularPrecio().toFixed(2)}€`

        return ticket;
    }
}




const pizza1 = new Pizza(PIZZAS.PROSCIUTTO);
console.log("Prosciutto simple");
console.log(pizza1.generarTicket());
console.log();


const pizza2 = new Pizza(PIZZAS.PROSCIUTTO)
.agregarExtra(EXTRAS.CHAMPINONES)
.agregarExtra(EXTRAS.SALSA_PICANTE);
console.log("\nProsciutto con Champiñones y Salsa picante");
console.log(pizza2.generarTicket());
console.log();

const pizza3 = new Pizza(PIZZAS.PROSCIUTTO_E_FUNGHI)
.agregarExtra(EXTRAS.EXTRA_QUESO)
.agregarExtra(EXTRAS.ANCHOAS);
console.log("\nProsciutto e Funghi con extra de queso y anchoas");
console.log(pizza3.generarTicket());
console.log();

const pizza4 = new Pizza(PIZZAS.QUATTRO_STAGIONI)
.agregarExtra(EXTRAS.SALMON)
.agregarExtra(EXTRAS.TERNERA);
console.log("\n4 Stagioni con salmón y ternera");
console.log(pizza4.generarTicket());