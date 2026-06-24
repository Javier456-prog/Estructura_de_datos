/**
 * Ejercicio: Buscar elemento en arreglo
 * @param {Array} arr, target, index
 */
function buscarRecursivo(arr, target, index = 0) {
    
    if (index >= arr.length) return -1;
    if (arr[index] === target) return index;

    
    return buscarRecursivo(arr, target, index + 1);
}

const miArreglo = [10, 20, 30, 40, 50];
const resultado = buscarRecursivo(miArreglo, 30);
console.log("El índice encontrado es:", resultado);

