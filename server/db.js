const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'dulcet',
    host: 'localhost',
    port: 5432,
    database: 'devarticles'
});

module.exports = pool;