const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs')
const dataRoutes = require("./dataRoutes.js")
const cors = require("cors"); // Importa el middleware cors

// Configuracion de Swagger

const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configuración de Rutas
// Agrega CORS a tu aplicación
app.use(cors());
app.use('/', dataRoutes);

// Puerto en el que el servidor escuchará las peticiones
const puerto = 3000

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
