'use strict'
let api = require('../APIKEYS');


module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || api.PG_CONNECTION_STRING
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || api.PG_CONNECTION_STRING
  }
};