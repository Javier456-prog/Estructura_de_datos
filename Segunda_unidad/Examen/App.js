const Ventanilla = require("./Examen_unidad2");

// Crear una cola circular con capacidad para 5 clientes
const banco = new Ventanilla(5);

console.log("\n======================================");
console.log("      INICIO DE LA SIMULACIÓN");
console.log("======================================");

// =========================
// Llegada de clientes
// =========================

banco.llegar("Rober");
banco.llegar("María");
banco.llegar("Juan");
banco.llegar("Pedro");
banco.llegar("Ana");

// Mostrar estado inicial
banco.mostrarFila();
banco.mostrarMemoria();

// =========================
// Atender dos clientes
// =========================

console.log("\n======================================");
console.log("      ATENCIÓN DE CLIENTES");
console.log("======================================");

banco.atender();
banco.atender();

banco.mostrarFila();
banco.mostrarMemoria();

// =========================
// Llegan nuevos clientes
// Aquí se reutiliza la memoria
// =========================

console.log("\n======================================");
console.log("    REUTILIZACIÓN DE LA MEMORIA");
console.log("======================================");

banco.llegar("Carlos");
banco.llegar("Luis");

banco.mostrarFila();
banco.mostrarMemoria();

// =========================
// Atender nuevamente
// =========================

console.log("\n======================================");
console.log("      MÁS ATENCIONES");
console.log("======================================");

banco.atender();
banco.atender();

banco.mostrarFila();
banco.mostrarMemoria();

// =========================
// Llegan nuevos clientes
// =========================

console.log("\n======================================");
console.log("     NUEVOS CLIENTES");
console.log("======================================");

banco.llegar("Andrea");
banco.llegar("Diego");

banco.mostrarFila();
banco.mostrarMemoria();

// =========================
// Vaciar la cola
// =========================

console.log("\n======================================");
console.log("       VACIANDO LA COLA");
console.log("======================================");

banco.atender();
banco.atender();
banco.atender();
banco.atender();
banco.atender();

banco.mostrarFila();
banco.mostrarMemoria();

console.log("\n======================================");
console.log("    FIN DE LA SIMULACIÓN");
console.log("======================================");