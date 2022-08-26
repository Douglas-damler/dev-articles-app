const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
const environment = process.env.NODE_ENV;
const config = require('../../../knexfile')[environment]
module.exports = require('knex')(config);

