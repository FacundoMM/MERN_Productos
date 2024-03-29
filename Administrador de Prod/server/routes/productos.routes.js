const ProductoController = require("../controller/productos.controller");

module.exports = app => {
    app.get("/api/Producto/", ProductoController.findAllProducto);
    app.post("/api/Producto/new", ProductoController.createNewProductos);
    app.get("/api/Producto/:id", ProductoController.findOneSingleProducto);
    app.put("/api/Producto/update/:id", ProductoController.updateExistingProductos);
    app.delete("/api/Producto/delete/:id", ProductoController.deleteAnExistingProductos);
};