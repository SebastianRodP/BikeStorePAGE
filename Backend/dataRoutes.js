const express = require("express")
const router = express.Router()
const app = express()
const controller = require("./controller.js")

router.get("/", controller.saludo)
router.get("/usuarios", controller.usuarios)
router.get("/telefonos", controller.telefonos)
router.get("/rol", controller.rol)
router.get("/marcas", controller.marcas)
router.get("/articulos",controller.articulos)
router.get("/categorias",controller.categorias)
router.get("/articulos/:idCategoria", controller.artCategorias )

module.exports = router
