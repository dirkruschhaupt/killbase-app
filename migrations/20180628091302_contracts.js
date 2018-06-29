//creates contracts tables
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function(table) {
    table.increments();
    table.integer('target_id').notNullable();
    table.foreign('target_id').references('targets.id').onDelete('CASCADE');
    table.integer('client_id').notNullable();
    table.foreign('client_id').references('clients.id').onDelete('CASCADE');
    table.integer('budget');
    table.boolean('completed').notNullable().defaultTo(false);
    table.integer('assassins_id');
    table.foreign('assassins_id').references('assassins.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts');
};
