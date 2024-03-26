//npm install pg
// db.js
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'postgres.hetfaqksgxjlcxatxcvl',
    host: 'aws-0-us-west-1.pooler.supabase.com',
    database: 'postgres',
    password: '?3#Kf2h+$Qf6C8W',
    port: 5432, // Puerto por defecto de PostgreSQL
});

// Manejar errores de conexión
pool.on('error', (err, client) => {
    console.error('Error inesperado en el pool de conexiones:', err);
    process.exit(-1);
});

// Exportar el pool de conexiones para que pueda ser utilizado en otros módulos
module.exports = pool;
