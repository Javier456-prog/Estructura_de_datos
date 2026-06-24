function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de prueba
console.log("Fibonacci de 5 es:", fibonacci(5));

