exports.up = function(knex) {

  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('VIN').unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.integer('milage').notNullable();
    tbl.enu('transmission_type', ['manual', 'automatic']).defaultTo('manual');
    tbl.enu('title_status', [
      'clear',
      'salvage',
      'junk',
      'bonded',
      'reconstructed',
      'affidavit',
      'rebuilt'
    ]).defaultTo('clear');
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
