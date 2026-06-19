
const catalogo = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 45 },
    { id: 4, nombre: "Monitor", precio: 150 }
];


let carrito = [];



function agregarAlCarrito(idProducto, cantidad = 1) {
    // Buscamos si el producto existe en el catálogo
    const productoEnCatalogo = catalogo.find(p => p.id === idProducto);
    
    if (!productoEnCatalogo) {
        console.log("¡Error! Producto no encontrado en el catálogo.");
        return;
    }

    // Verificacion
    const productoEnCarrito = carrito.find(p => p.id === idProducto);

    if (productoEnCarrito) {
        // Aumento
        productoEnCarrito.cantidad += cantidad;
        console.log(`+ ${cantidad} ${productoEnCatalogo.nombre}(s) añadido(s) al carrito.`);
    } else {
        // Agregar
        carrito.push({
            id: productoEnCatalogo.id,
            nombre: productoEnCatalogo.nombre,
            precio: productoEnCatalogo.precio,
            cantidad: cantidad
        });
        console.log(`¡Producto agregado al carrito: ${productoEnCatalogo.nombre}!`);
    }
}

// B. Eliminar una unidad
function eliminarDelCarrito(idProducto) {
    const index = carrito.findIndex(p => p.id === idProducto);

    if (index !== -1) {
        if (carrito[index].cantidad > 1) {
          
            carrito[index].cantidad -= 1;
            console.log(`Se redujo la cantidad de ${carrito[index].nombre}.`);
        } else {
            
            console.log(`Producto eliminado del carrito: ${carrito[index].nombre}.`);
            carrito.splice(index, 1);
        }
    } else {
        console.log("El producto no se encuentra en el carrito.");
    }
}

// Total general a pagar
function calcularTotal() {
    let totalGeneral = 0;
    
    console.log("\n--- DETALLE DE TU ORDEN ---");
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        totalGeneral += subtotal;
        console.log(`${producto.nombre} x${producto.cantidad} = $${subtotal}`);
    });
    console.log("---------------------------");
    console.log(`TOTAL A PAGAR: $${totalGeneral}\n`);
    
    return totalGeneral;
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    console.log("El carrito se ha vaciado por completo.");
}



// Agregar productos
agregarAlCarrito(1); 
agregarAlCarrito(1); 
agregarAlCarrito(2); 
agregarAlCarrito(3); 


calcularTotal();


eliminarDelCarrito(2);


eliminarDelCarrito(1);


calcularTotal();


vaciarCarrito();