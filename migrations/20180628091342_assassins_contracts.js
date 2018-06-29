//creates assassins_contracts tables
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins_contracts', function(table) {
    table.integer('assassins_id').unsigned().notNullable();
    table.foreign('assassins_id').references('assassins.id').onDelete('CASCADE');
    table.integer('contract_id').unsigned().notNullable();
    table.foreign('contract_id').references('contracts.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins_contracts');
};
