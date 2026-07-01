class Inserccion {

    constructor() {
        this.adjacencyList = new Map();
    }

    
    agregarNodo(nodo) {
        if (!this.adjacencyList.has(nodo)) {
            this.adjacencyList.set(nodo, []);
        }
    }

    
    agregarArista(origen, destino) {

        this.agregarNodo(origen);
        this.agregarNodo(destino);
        this.adjacencyList.get(origen).push(destino);
        this.adjacencyList.get(destino).push(origen); // qu
    }
}
