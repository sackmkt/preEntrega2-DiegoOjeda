alert("Presupuestar Calefaccion"); 

const presupuesto = {

    productos: [],
    precios: []
};

function agregarProducto(){

    const producto = prompt("Ingrese el producto que desea agregar:");
    const precio = parseFloat(prompt("Ingrese el precio sin IVA: "));

    presupuesto.productos.push(producto);
    presupuesto.precios.push(precio);

    alert("Se agrego " + producto + " al precio de: $" + precio + " en el presupuesto");

}

function eliminarProducto(){
    const productoAEliminar = prompt("Ingrese el nombre del producto que desea eliminar:");
    const indice = presupuesto.productos.indexOf(productoAEliminar);
    
    if (indice === -1) {
        alert("No se encontró el producto en el presupuesto");
    } else {
        const productoEliminado = presupuesto.productos[indice];
        const precioEliminado = presupuesto.precios[indice];
        presupuesto.productos.splice(indice, 1);
        presupuesto.precios.splice(indice, 1);
        alert("Se eliminó "+ productoEliminado + " al precio de " + precioEliminado + " del presupuesto");
    }
}

function mostrarPresupuesto(){
    let presupuestoFinal = "Presupuesto:\n";
    let total = 0;

    for (let i = 0; i < presupuesto.productos.length; i++) {
        presupuestoFinal += `${i + 1}. ${presupuesto.productos[i]} - $${presupuesto.precios[i]}\n`;
    
        total += presupuesto.precios[i];
      }

      const recargo = total * 0.21;
      total += recargo;
    
      presupuestoFinal += `\nTotal (incluye recargo del 21%): $${total.toFixed(2)}`;
    
    
      alert(presupuestoFinal);
}



let agregarMas = true;
while (agregarMas) {
    const opcion = prompt("Ingrese la opción deseada:\n1. Agregar producto\n2. Eliminar producto\n3. Mostrar presupuesto");
    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            eliminarProducto();
            break;
        case "3":
            mostrarPresupuesto();
            break;
        default:
            alert("Opción inválida");
    }
    agregarMas = confirm("¿Desea realizar otra operación en el presupuesto?");
   
}

mostrarPresupuesto();

console.log(presupuesto.productos, presupuesto.precios);
