/**
 * Ejercicio: Factorial
 * @param {number} n
 */
function factorial(n) {
    
    if (n <= 1) return 1;

    
    return n * factorial(n - 1);
}

console.log("Factorial de 4 es:", factorial(4));
