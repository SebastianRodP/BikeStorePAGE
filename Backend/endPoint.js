    const express = require('express');
    const app = express();
    const pool = require('./db');

    app.get('/articulos/:idCategorias', async (req, res) => {
    try {
        const { idCategorias } = req.params;
        const result = await pool.query('SELECT * FROM articulos WHERE idCategorias = $1', [idCategorias]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    });

    app.listen(5000, () => console.log('Server started on port 3000'));