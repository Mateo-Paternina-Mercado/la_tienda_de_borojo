use borojoDB;

// 1. Eliminar el cliente con el correo "juan@email.com"
db.clientes.deleteOne({ email: "juan@email.com" });

// 2. Eliminar productos con stock menor a 5
db.productos.deleteMany({ stock: { $lt: 5 } });