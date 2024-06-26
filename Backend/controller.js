const pool = require("./db2")

const saludo = (req, res) => {
    res.send("<h1>Hola este es un saludo</h1>")
}
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

const categorias = (req, res) => {
    pool.query('SELECT * FROM categorias', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results.rows);
    });
};


const getArticulosByCategoria = async (req, res) => {
    const { id_categorias } = req.params;
    let response = parseInt(id_categorias);
    console.log(typeof id_categorias);
    console.log(response);
    try {
        const query = 'SELECT * FROM articulos WHERE id_categorias = (SELECT id_categorias FROM categorias WHERE id_categorias = $1)';
        const respuesta = await pool.query(query, [response]);
        // Solo envía las filas seleccionadas al cliente
        res.status(200).json(respuesta.rows);
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
// 
const getArticulosByDetalles = async (req, res) => {
    const { idDetalles} = req.params;
    let response = parseInt(idDetalles);
    console.log(typeof idDetalles);
    console.log(response);
    try {
        const query = 'SELECT * FROM articulos WHERE id_articulos = $1;';
        const respuesta = await pool.query(query, [response]);
        res.status(200).json(respuesta.rows);
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};



module.exports = {
    saludo, usuarios, telefonos , rol, marcas, articulos, categorias, getArticulosByCategoria, getArticulosByDetalles}