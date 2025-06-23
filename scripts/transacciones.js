use borojoDB;

// Simulación de venta
session = db.getMongo().startSession();
session.startTransaction();
try {
  const ventasColl = session.getDatabase("borojoDB").ventas;
  const productosColl = session.getDatabase("borojoDB").productos;

  productosColl.updateOne({ _id: 1 }, { $inc: { stock: -2 } });

  ventasColl.insertOne({
    clienteId: 1,
    productos: [{ productoId: 1, cantidad: 2 }],
    fecha: new Date(),
    total: 10000
  });

  session.commitTransaction();
  print("Venta completada con éxito.");
} catch (e) {
  print("Error:", e);
  session.abortTransaction();
}
session.endSession();

// Entrada de inventario
session = db.getMongo().startSession();
session.startTransaction();
try {
  const inventario = session.getDatabase("borojoDB").inventario;
  const productos = session.getDatabase("borojoDB").productos;

  inventario.insertOne({
    productoId: 5,
    lote: "L011",
    cantidad: 50,
    entrada: new Date()
  });

  productos.updateOne({ _id: 5 }, { $inc: { stock: 50 } });

  session.commitTransaction();
  print("Inventario actualizado.");
} catch (e) {
  print("Error:", e);
  session.abortTransaction();
}
session.endSession();

// Devolución
session = db.getMongo().startSession();
session.startTransaction();
try {
  const ventas = session.getDatabase("borojoDB").ventas;
  const productos = session.getDatabase("borojoDB").productos;

  productos.updateOne({ _id: 6 }, { $inc: { stock: 1 } });

  ventas.deleteOne({
    clienteId: 5,
    "productos.productoId": 6
  });

  session.commitTransaction();
  print("Devolución completada.");
} catch (e) {
  print("Error:", e);
  session.abortTransaction();
}
session.endSession();