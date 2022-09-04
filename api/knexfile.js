const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../api/.env') });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.DATABASENAME
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${process.env.DATABASENAME}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },

  
};
