// =====================================================
// Tarea del dia martes 17/06/2026
// =====================================================

// 
let edad1 = 18;


if (edad1 >= 18) {
    // Si la condición es verdadera, mostramos este mensaje
    console.log("Eres mayor de edad");
}


// 
let edad2 = 16;

// 
if (edad2 >= 18) {
    // Si es verdadera
    console.log("Eres mayor de edad");
} else {
    // Si es falsa
    console.log("Eres menor de edad");
}



let nota = 85;


if (nota >= 90) {

    console.log("Excelente");

} else if (nota >= 70) {

    
    console.log("Aprobado");

} else {

    console.log("Reprobado");
}

let edad3 = 20;

let mensaje = (edad3 >= 18) ? "Mayor de edad" : "Menor de edad";

console.log(mensaje);


//
let dia = 3;


switch (dia) {

    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    default:
        console.log("Día no válido");
}




function imprimir(texto) {
    console.log(texto);
}


imprimir("Hola desde JavaScript");


imprimir("Estoy aprendiendo condicionales");