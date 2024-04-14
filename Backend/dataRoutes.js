const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

router.get("/articulos/categorias/:id_categorias", controller.getArticulosByCategoria);


// Otras rutas definidas anteriormente
router.get("/", controller.saludo)
router.get("/usuarios", controller.usuarios)
router.get("/telefonos", controller.telefonos)
router.get("/rol", controller.rol)
router.get("/marcas", controller.marcas)
router.get("/articulos", controller.articulos)
router.get("/categorias", controller.categorias)


module.exports = router;
