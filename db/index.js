const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'email-collector',
    password: process.env.DB_KEY,
    port: 5432,
})



module.exports = pool;