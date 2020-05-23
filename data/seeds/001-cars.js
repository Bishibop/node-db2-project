exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { id: 1,
          VIN: '0932inslkdn9023',
          make: 'BMW',
          model: '3 Series',
          milage: 38500
        },
        { id: 2,
          VIN: '132l1kj3kjnweflkn',
          make: 'Jeep',
          model: 'Grand Cherokee',
          milage: 4500
        },
        { id: 3,
          VIN: '94309rn09fj029e',
          make: 'Mercedes',
          model: 'C Class',
          milage: 158938
        },
      ]);
    });
};
