const pool = require("./db2")

const saludo = (req, res) => {
    res.send("<h1>Hola este es un saludo</h1>")
}
const usuarios = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};


const telefonos = (req, res) => {
    pool.query('SELECT * FROM telefonos', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const rol = (req, res) => {
    pool.query('SELECT * FROM rol', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const marcas = (req, res) => {
    pool.query('SELECT * FROM marcas', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const articulos = (req, res) => {
    pool.query('SELECT * FROM articulos', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};
const categorias = (req, res) => {
    pool.query('SELECT * FROM articulos', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    saludo, usuarios, telefonos , rol, marcas, articulos, categorias
}



