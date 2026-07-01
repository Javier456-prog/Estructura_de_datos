class MotorIndexacionBST {
    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz == null) {
            this.raiz = nuevoNodo;
            return;
        }
        
    }
}
