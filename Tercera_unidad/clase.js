class MotorIndexacionBST {
    indexar(keyword, urlCache) {
        let actual = this.raiz;
        while (true) {
            if (keyword === actual.keyword) {
                actual.visitas++;
                return;
            } else if (keyword < actual.keyword) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo
            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return;
                }
            }
        }
    }
}