// npm install mysql2
// db.js
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'ejemplo',
});

// Exportar el pool de conexiones para que pueda ser utilizado en otros módulos
module.exports = pool;
