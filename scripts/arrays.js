use borojoDB;

// 1. Buscar clientes que tengan "natural" en sus preferencias
db.clientes.find({ preferencias: "natural" });

// 2. Encontrar productos que tengan los tags "natural" y "orgánico"
db.productos.find({ tags: { $all: ["natural", "orgánico"] } });

// 3. Listar productos que tienen más de un tag
db.productos.aggregate([
  { $project: { nombre: 1, cantidadTags: { $size: "$tags" } } },
  { $match: { cantidadTags: { $gt: 1 } } }
]);