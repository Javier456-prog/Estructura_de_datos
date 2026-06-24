/**
 * Ejercicio: Suma de Dígitos
 * @param {number} n
 */
function sumaDigitos(n) {
     
    if (n < 10) return n;

    
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

// Complejidad O(log n). 
console.log("Suma de dígitos de 532 es:", sumaDigitos(532));

