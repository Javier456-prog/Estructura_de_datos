class Grafo {
    constructor() {
        this.lista = new Map();
    }
    
    agregarArista(a, b) {
        if (!this.lista.has(a)) this.lista.set(a, []);
        if (!this.lista.has(b)) this.lista.set(b, []);
        this.lista.get(a).push(b);
        this.lista.get(b).push(a);
    }

    buscar(nodo) {
        return this.lista.has(nodo) ? "Existe" : "No existe";
    }
}
