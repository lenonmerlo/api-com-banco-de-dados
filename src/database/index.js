require("dotenv").config(); // Importa as variáveis de ambiente
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback);
}

module.exports = { query };
