const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('abijachari', salt);
      return knex('users').insert({
        username: 'abijachari',
        password: hash,
        full_name: 'Abija Chari',
        email: 'chariabija@gmail.com'
      })

    })
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('abijachari', salt);
      return knex('users').insert({
        username: 'douglas',
        password: hash,
        full_name: 'Douglas Kathurima',
        email: 'douglasdamler@gmail.com',
        admin: true
      })
    });
};