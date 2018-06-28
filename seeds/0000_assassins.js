
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        {assassins_name: 'Alexander Duggan', weapon: 'Sniper rifle', age: 31, price: 45, rating: 7.5, kills: 28},
        {assassins_name: 'Anton Chigurh', weapon: 'Pneumatic bolt gun', age: 52, price: 40, rating: 9, kills: 72},
        {assassins_name: null, weapon: 'Pistol', age: 28, price: 20, rating: 6.5, kills: 35},
        {assassins_name: 'Jason Bourne', weapon: 'Parkour', age: 27, price: 25, rating: 7, kills: 48},
        {assassins_name: 'John Wick', weapon: 'Lots of guns', age: 35, price: 50, rating: 9.5, kills: 433},
        {assassins_name: 'Jules Winnfield', weapon: 'Pistol', age: 26, price: 15, rating: 6.5, kills: 13},
        {assassins_name: 'Leon', weapon: 'Everything', age: 41, price: 30, rating: 8.5, kills: 87},
        {assassins_name: 'Nikita Mears', weapon: 'Silenced pistols', age: 28, price: 30, rating: 7, kills: 32},
        {assassins_name: 'Pickle Rick', weapon: 'Lasers and office supplies', age: 60, price: 0, rating: 8, kills: 24}
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('codenames').insert([
          {assassin_id: 1, code_name: 'The Jackal'},
          {assassin_id: 2, code_name: 'Old Man'},
          {assassin_id: 3, code_name: 'Ghost Dog'},
          {assassin_id: 4, code_name: ''},
          {assassin_id: 5, code_name: 'Baba Yaga'},
          {assassin_id: 6, code_name: ''},
          {assassin_id: 7, code_name: 'The Professional'},
          {assassin_id: 8, code_name: 'Nikita'},
          {assassin_id: 8, code_name: 'La Femme Nikita'},
          {assassin_id: 9, code_name: 'Solenya'}
        ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('targets').insert([
        {targets_name: 'Butch Coolidge', location: 'Los Angeles', photo: 'https://goo.gl/LCquZj', security_level: 3},
        {targets_name: 'The Jaguar', location: 'Russian Embassy', photo: 'https://goo.gl/6JWsiv', security_level: 9},
        {targets_name: 'Norman Stansfield', location: 'Manhattan', photo: 'https://i.imgur.com/mdIk33E.jpg', security_level: 7},
        {targets_name: 'Santino D Antonio', location: 'Continental Hotel', photo: 'https://goo.gl/fUPkYy', security_level: 10},
        {targets_name: 'Sonny Volerio', location: 'Queens', photo: 'https://goo.gl/8DHYUS', security_level: 4}
      ])
    })
    .then(function () {
    // Inserts seed entries
      return knex('clients').insert([
        {clients_name: 'Marcellus Wallace'},
        {clients_name: 'Concreto'},
        {clients_name: 'Mathilda'},
        {clients_name: 'Winston'},
        {clients_name: 'Ray Vargo'}
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {target_id: 1, client_id: 1, budget: 40, completed: false, assassins_id: null},
        {target_id: 2, client_id: 2, budget: 70, completed: false, assassins_id: null},
        {target_id: 3, client_id: 3, budget: 35, completed: false, assassins_id: null},
        {target_id: 4, client_id: 4, budget: 25, completed: false, assassins_id: null},
        {target_id: 5, client_id: 5, budget: 10, completed: false, assassins_id: null}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('assassins_contracts').insert([
        {assassins_id: 6, contract_id: 1},
        {assassins_id: 1, contract_id: 2},
        {assassins_id: 5, contract_id: 2},
        {assassins_id: 7, contract_id: 3},
        {assassins_id: 9, contract_id: 5},
        {assassins_id: 6, contract_id: 4},
        {assassins_id: 8, contract_id: 3},
        {assassins_id: 3, contract_id: 1}
      ]);
    });
};
