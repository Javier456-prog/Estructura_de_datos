/**
 * Ejercicio: Inversión de Arreglo (In-Place)
 * @param {Array} arr 
 * @param {number} inicio 
 * @param {number} fin 
 */
function invertirArreglo(arr, inicio, fin) {
    
    if (inicio >= fin) return;

    
    let temp = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temp;


    invertirArreglo(arr, inicio + 1, fin - 1);
}


let miLista = [30, 60, 70, 80, 90];
invertirArreglo(miLista, 0, miLista.length - 1);

console.log("Arreglo invertido:", miLista);
console.assert(JSON.stringify(miLista) === JSON.stringify([90, 80, 70, 60, 30]));


