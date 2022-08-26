const bycrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, databasePassword) {
    return bycrypt.compare(userPassword, databasePassword);
}

function createUser (req) {
    const salt = bycrypt.genSaltSync();
    const hash = bycrypt.hashSync(req.body.password, salt);
    
    return knex('users')
    .insert({
        username: req.body.username,
        password: hash,
        email: req.body.email
    })
    .returning('*');
}

module.exports = {
    comparePass,
    createUser
}