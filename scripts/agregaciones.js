use borojoDB;

// 1. Productos más vendidos
db.ventas.aggregate([
  { $unwind: "$productos" },
  { $group: {
      _id: "$productos.productoId",
      totalVendidas: { $sum: "$productos.cantidad" }
  }},
  { $sort: { totalVendidas: -1 } }
]);

// 2. Clientes agrupados por cantidad de compras
db.clientes.aggregate([
  { $project: {
      nombre: 1,
      cantidadCompras: { $size: "$compras" }
  }},
  { $sort: { cantidadCompras: -1 } }
]);

// 3. Total de ventas por mes
db.ventas.aggregate([
  { $group: {
      _id: { $month: "$fecha" },
      totalMensual: { $sum: "$total" }
  }},
  { $sort: { _id: 1 } }
]);

// 4. Promedio de precios por categoría
db.productos.aggregate([
  { $group: {
      _id: "$categoria",
      promedioPrecio: { $avg: "$precio" }
  }},
  { $sort: { promedioPrecio: -1 } }
]);

// 5. Top 3 productos con mayor stock
db.productos.find().sort({ stock: -1 }).limit(3);