//makes codenames table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('codenames', function(table) {
    table.integer('assassins_id').references('assassins.id').onDelete('CASCADE');
    table.string('code_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('codenames');
};
