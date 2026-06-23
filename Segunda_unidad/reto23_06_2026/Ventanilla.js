
//Cola (Queue)
class Ventanilla {
    constructor() {
        this.clientes = []; //Arreglo
    }

    // Agregar cliente
    llegar(nombre) {
        this.clientes.push(nombre);
        console.log(`Llegó el cliente: ${nombre}`);
    }

    // Atender cliente 
    atender() {
        if (this.clientes.length === 0) {
            console.log("No hay clientes en espera.");
            return;
        }
        const atendido = this.clientes.shift();
        console.log(`Atendiendo a: ${atendido}`);
    }

    // Mostrar espera
    mostrarEspera() {
        console.log("Clientes en fila:", this.clientes);
    }
}

//Ejecución
const banco = new Ventanilla();

banco.llegar("Rober");
banco.llegar("Maria");
banco.llegar("Juan");

banco.mostrarEspera();

banco.atender(); // Atender
banco.mostrarEspera(); // fila