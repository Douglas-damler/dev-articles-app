const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'devarticles',
  password: 'abijachari',
  port: 5432
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

module.exports = pool
