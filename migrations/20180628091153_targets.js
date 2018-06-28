//creates targets table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('targets', function(table) {
    table.increments();
    table.string('targets_name');
    table.string('location');
    table.string('photo');
    table.integer('security_level');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('targets');
};
