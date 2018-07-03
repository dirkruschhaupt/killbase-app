'use strict'

let env = process.env.NODE_ENV || 'development';
let config = require('./knexfile')[env];
let knex = require('knex')(config);
// let knexPath = path.join(__dirname, 'knexfile.js');

module.exports = knex;
