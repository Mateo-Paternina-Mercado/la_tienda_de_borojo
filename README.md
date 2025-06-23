
# 🛒 La Tienda del Borojó

**La Tienda del Borojó** es un proyecto académico con MongoDB que simula una tienda especializada en productos derivados del borojó. Contiene una base de datos con múltiples colecciones que permiten realizar operaciones CRUD, consultas avanzadas, funciones definidas por el usuario, transacciones e indexación.

---

## 📌 Descripción del Proyecto

La tienda gestiona productos, clientes, proveedores, ventas e inventario. Cada colección tiene relaciones claras que permiten simular un entorno de comercio electrónico donde es posible:

- Registrar ventas
- Consultar productos por tags o categoría
- Aplicar descuentos
- Verificar stock
- Realizar limpieza de inventario
- Ejecutar transacciones y más

---

## 🧪 Instrucciones para Ejecutar

1. Abre tu terminal:
   ```bash
   mongosh
   ```

2. Cambia a la base de datos:
   ```js
   use borojoDB;
   ```

3. Ejecuta el script que necesites:
   ```js
   load("scripts/inserciones.js");
   load("scripts/lecturas.js");
   // y así sucesivamente...
   ```

---

## 📂 Estructura del Repositorio

```
la-tienda-del-borojo/
├── datos/                 // JSON base de datos
├── scripts/               // Scripts por tema
├── capturas/              // Evidencias visuales
└── README.md              // Este archivo
```

---

## 📋 Ejercicios Desarrollados

### 🟢 Inserciones – `inserciones.js`

- Insertar un nuevo producto: “Chocolatina de borojó”
- Insertar un nuevo cliente: “Mario Mendoza”

### 🔵 Lecturas – `lecturas.js`

- Productos con stock mayor a 20
- Clientes sin compras

### 🟡 Actualizaciones – `actualizaciones.js`

- Aumentar stock de “Borojó deshidratado”
- Añadir el tag `"bajo azúcar"` a productos `"Bebida"`

### 🔴 Eliminaciones – `eliminaciones.js`

- Eliminar cliente por email: `juan@email.com`
- Eliminar productos con stock menor a 5

### 🟣 Expresiones Regulares – `expresionesRegulares.js`

- Buscar productos que empiecen por “Boro”
- Buscar productos que contengan “con”
- Buscar clientes con letra “z” en su nombre

### 🟠 Consultas con Arrays – `arrays.js`

- Clientes con preferencia `"natural"`
- Productos con tags `"natural"` y `"orgánico"` (`$all`)
- Productos con más de un tag (`$size`)

### 🔶 Agregaciones – `agregaciones.js`

- Productos más vendidos
- Clientes agrupados por cantidad de compras
- Total de ventas por mes
- Promedio de precio por categoría
- Top 3 productos con mayor stock

### 🔷 Funciones – `funcionesSystem.js`

- `calcularDescuento(precio, porcentaje)`
- `clienteActivo(idCliente)`
- `verificarStock(productoId, cantidadDeseada)`

### ⚙️ Transacciones – `transacciones.js`

1. Simulación de venta:
   - Descuento de stock
   - Registro de venta

2. Entrada de inventario:
   - Registro en `inventario`
   - Aumento de stock

3. Devolución:
   - Aumento de stock
   - Eliminación de venta

### 🧠 Indexación – `indexacion.js`

- Índice en campo `nombre` de `productos`
- Índice compuesto `categoria + precio`
- Índice en `email` de `clientes`
- Consulta con `explain()` para ver uso del índice

---

## 🖼️ Capturas de Pantalla

Las evidencias de cada script están organizadas en la carpeta `/capturas`, y nombradas según:

- `lectura1.png`
- `actualizacion2.png`
- `agregacion5.png`
- etc.

---

## 👨‍💻 Autor

Mateo Paternina  
Campuslands – 2025  
Sincelejo, Sucre, Colombia
