/**
 * Ejercicio: Invertir Cadena
 * @param {string} str
 */
function invertirCadena(str) {
    
    if (str === "") return "";

    
    return invertirCadena(str.substr(1)) + str.charAt(0);
}

console.log("Invertir 'Adios':", invertirCadena("Adios"));



