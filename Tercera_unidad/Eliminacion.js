class Grafo {
    constructor() {
        this.adjacencyList = new Map();
    }

    eliminarArista(origen, destino) {
        if (this.adjacencyList.has(origen)) {
            this.adjacencyList.set(origen, 
                this.adjacencyList.get(origen).filter(v => v !== destino)
            );
        }
        if (this.adjacencyList.has(destino)) {
            this.adjacencyList.set(destino, 
                this.adjacencyList.get(destino).filter(v => v !== origen)
            );
        }
    }

    eliminarNodo(nodo) {
        if (!this.adjacencyList.has(nodo)) return;
        
        // Eliminar todas las aristas que apuntan a este nodo
        for (let vecinos of this.adjacencyList.values()) {
            vecinos = vecinos.filter(v => v !== nodo);
        }
        

        this.adjacencyList.delete(nodo);
    }
}