use borojoDB;

// 1. calcularDescuento(precio, porcentaje)
db.system.js.save({
  _id: "calcularDescuento",
  value: function(precio, porcentaje) {
    return precio - (precio * (porcentaje / 100));
  }
});

// 2. clienteActivo(idCliente)
db.system.js.save({
  _id: "clienteActivo",
  value: function(idCliente) {
    const cliente = db.clientes.findOne({ _id: idCliente });
    return cliente && cliente.compras.length > 3;
  }
});

// 3. verificarStock(productoId, cantidadDeseada)
db.system.js.save({
  _id: "verificarStock",
  value: function(productoId, cantidadDeseada) {
    const producto = db.productos.findOne({ _id: productoId });
    return producto && producto.stock >= cantidadDeseada;
  }
});

// Para ejecutar luego:
db.loadServerScripts();