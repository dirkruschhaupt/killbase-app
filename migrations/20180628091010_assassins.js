//makes assassins table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', function(table) {
    table.increments();
    table.string('assassins_name');
    table.string('weapon');
    table.integer('age');
    table.integer('price');
    table.decimal('rating', 2, 1);
    table.integer('kills');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};
