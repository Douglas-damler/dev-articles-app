/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('pid').notNullable();
        table.string('title', 255).notNullable();
        table.string('body').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.string('author').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users')
        table.foreign('author').references('username').inTable('users')
        table.timestamp('date_created').notNullable();
        table.integer('likes').notNullable().defaultTo(0);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
