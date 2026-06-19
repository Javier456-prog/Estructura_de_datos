class Player {
    constructor(nombre, colorSombrero) {
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    saltar() { }
    correr() { }

    saludar() {
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }
}

// Creación de instancias
let player1 = new Player('MARIO', 'ROJO');
let player2 = new Player('LUIGI', 'VERDE');

// Mostrar los objetos
console.log(player1);
console.log(player2);

// Llamar al método saludar
console.log(player1.saludar());
console.log(player2.saludar());
