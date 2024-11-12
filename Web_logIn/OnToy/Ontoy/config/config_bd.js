import mysql from 'mysql2/promise';

const bdOpciones = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Name,
    waitForConnections: true,
    connectionLimit: 10
};
const pool = mysql.createPool(bdOpciones);
export default pool;