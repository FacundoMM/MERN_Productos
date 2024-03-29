const Producto = require("../model/productos.model");

module.exports.findAllProducto = (req, res) => {
    Producto.find()
        .then(allDaProducto => res.json({ Productos: allDaProducto }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findOneSingleProducto = (req, res) => {
    Producto.findOne({ _id: req.params.id })
        .then(oneSingleProductos => res.json({ Productos: oneSingleProductos }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewProductos = (req, res) => {
    Producto.create(req.body)
        .then(newlyCreatedProductos => res.json({ Productos: newlyCreatedProductos }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingProductos = (req, res) => {
    Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProductos => res.json({ Productos: updatedProductos }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.deleteAnExistingProductos = (req, res) => {
    Producto.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}