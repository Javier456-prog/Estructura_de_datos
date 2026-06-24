/**
 * Factorial optimizado con Recursividad de Cola
 * @param {number} n - El número a calcular.
 * @param {number} acumulador - El valor acumulado (inicializado en 1).
 */
function factorialCola(n, acumulador = 1) {
    
    if (n <= 1) {
        return acumulador;
    }
    
    
    return factorialCola(n - 1, n * acumulador);
}


console.log("Factorial de 5 es:", factorialCola(5)); // Resultado: 120