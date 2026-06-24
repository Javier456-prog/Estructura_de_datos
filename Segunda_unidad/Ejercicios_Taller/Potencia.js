/**
 * Ejercicio: Exponenciación Binaria 
 * @param {number} base
 * @param {number} exp
 */
function potenciaRapida(base, exp) {
    
    if (exp === 0) return 1;

    
    let temp = potenciaRapida(base, Math.floor(exp / 2));

    
    if (exp % 2 === 0) {
        return temp * temp;
    } 
    // Si es impar, multiplicamos por la base adicional
    else {
        return base * temp * temp;
    }
}

console.log("Resultado de 3^5 (usando potencia rápida):", potenciaRapida(3, 5));
