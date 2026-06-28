// ===============================================
// COLA CIRCULAR - VENTANILLA DE UN BANCO
// ===============================================

class Ventanilla {

    constructor(capacidad) {

        this.capacidad = capacidad;
        this.clientes = new Array(capacidad);

        this.inicio = 0;
        this.fin = 0;
        this.cantidad = 0;
    }

    // Verificar si está vacía
    estaVacia() {
        return this.cantidad === 0;
    }

    // Verificar si está llena
    estaLlena() {
        return this.cantidad === this.capacidad;
    }

    // Agregar un cliente
    llegar(nombre) {

        if (this.estaLlena()) {
            console.log("\n❌ La cola está llena.");
            return;
        }

        this.clientes[this.fin] = nombre;

        console.log("✅ Llegó:", nombre);

        this.fin = (this.fin + 1) % this.capacidad;

        this.cantidad++;
    }

    // Atender cliente
    atender() {

        if (this.estaVacia()) {
            console.log("\n⚠ No existen clientes.");
            return;
        }

        let cliente = this.clientes[this.inicio];

        console.log("\n🏦 Atendiendo a:", cliente);

        this.clientes[this.inicio] = null;

        this.inicio = (this.inicio + 1) % this.capacidad;

        this.cantidad--;
    }

    // Mostrar la fila
    mostrarFila() {

        if (this.estaVacia()) {
            console.log("\nNo hay clientes.");
            return;
        }

        console.log("\n========= FILA =========");

        let posicion = this.inicio;

        for (let i = 0; i < this.cantidad; i++) {

            console.log((i + 1) + ". " + this.clientes[posicion]);

            posicion = (posicion + 1) % this.capacidad;
        }
    }

    // Mostrar el arreglo interno
    mostrarMemoria() {

        console.log("\n========= MEMORIA =========");

        for (let i = 0; i < this.capacidad; i++) {

            if (this.clientes[i] === undefined || this.clientes[i] === null) {
                console.log("[" + i + "] Vacío");
            } else {
                console.log("[" + i + "] " + this.clientes[i]);
            }
        }

        console.log("\nInicio :", this.inicio);
        console.log("Fin     :", this.fin);
        console.log("Cantidad:", this.cantidad);
    }

}

module.exports = Ventanilla;