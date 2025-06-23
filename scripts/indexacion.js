use borojoDB;

// 1. Crear índice en el campo "nombre" de productos
db.productos.createIndex({ nombre: 1 });

// 2. Crear índice compuesto sobre "categoria" y "precio"
db.productos.createIndex({ categoria: 1, precio: 1 });

// 3. Crear índice en el campo "email" de clientes
db.clientes.createIndex({ email: 1 });

// 4. Usar explain() para mostrar si el índice "nombre" está siendo utilizado
db.productos.find({ nombre: /^Boro/ }).explain("executionStats");