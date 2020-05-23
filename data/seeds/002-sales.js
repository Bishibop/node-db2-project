exports.seed = function(knex) {
  return knex('sales').truncate()
    .then(function () {
      return knex('sales').insert([
        {id: 1, buyer_name: 'David Sinclaire', price: '34000.00', car_id: 1},
        {id: 5, buyer_name: 'John Doe', price: '3000.00', car_id: 2},
        // There is no car with id 9. Why doesn't this throw an error?
        // Tested the foreign key constraint in SQLStudio and it works.
        {id: 8, buyer_name: 'Nora Davis', price: '95000.00', car_id: 9},
      ]);
    });
};
