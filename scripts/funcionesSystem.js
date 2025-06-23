// 1. calcularDescuento(precio, porcentaje)
db.system.js.insertOne({
  _id: "calcularDescuento",
  value: function(precio, porcentaje) {
    return precio - (precio * (porcentaje / 100));
  }
});

// 2. clienteActivo(idCliente)
db.system.js.insertOne({
  _id: "clienteActivo",
  value: function(idCliente) {
    const cliente = db.clientes.findOne({ _id: idCliente });
    return cliente && cliente.compras.length > 3;
  }
});

// 3. verificarStock(productoId, cantidadDeseada)
db.system.js.insertOne({
  _id: "verificarStock",
  value: function(productoId, cantidadDeseada) {
    const producto = db.productos.findOne({ _id: productoId });
    return producto && producto.stock >= cantidadDeseada;
  }
});

// Cargar las funciones en la sesión actual:
db.loadServerScripts();

// ✅ Ejemplos de uso en consola:
print(calcularDescuento(10000, 20)); // → 8000

print(clienteActivo(1)); // → true o false

print(verificarStock(3, 10)); // → true o false