/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id');
        table.string('comment').notNullable();
        table.string('author').notNullable();
        table.integer('user_id').notNullable();
        table.integer('post_id').notNullable();
        table.integer('likes').notNullable().defaultTo(0);
        table.integer('dislikes').notNullable().defaultTo(0);
        table.timestamp('date_created').defaultTo(knex.fn.now());
        table.foreign('author').references('username').inTable('users');
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('post_id').references('pid').inTable('posts');

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
