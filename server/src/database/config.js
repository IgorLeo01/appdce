const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dce',
    password: '1234',
    port: 5432,
})

module.exports = pool