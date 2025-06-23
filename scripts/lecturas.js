use borojoDB;

// 1. Productos con stock mayor a 20 unidades
db.productos.find({ stock: { $gt: 20 } });

// 2. Clientes que no han comprado aún ningún producto
db.clientes.find({ compras: { $size: 0 } });