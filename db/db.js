'use strict'
//
// db.js
//
// KNEX database library
// plus additional database helper functions
//
let path = require('path');

let config = require('./knexfile')
let env = process.env.NODE_ENV || 'development'
let knex = require('knex')(config[env])
let _ = require('underscore');

module.exports = knex;

knex.ensureSchema = function () {
  return Promise.all([
    knex.schema.hasTable('destinations').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('destinations', function (table) {
          table.increments('id').primary();
          table.string('title', 255);
          table.string('airport_code', 255);
          table.string('city_name', 255);
          table.string('main_image_url');
          table.string('next_image_url', 255);
          table.string('intro', 1023);
          table.string('country', 255);
        }).then(function (table) {
          console.log('Created destinations table.');
        })
      }
    }),

    knex.schema.hasTable('quotes').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('quotes', function (table) {
          table.increments('id').primary();
          table.integer('origin_code');
          table.integer('destination_code');
          table.integer('price');
          table.string('query_date_time', 255);
          table.string('depart_full_date', 255);
          table.string('return_full_date', 255);
          table.integer('depart_month');
          table.integer('return_month');
          table.integer('depart_year');
          table.integer('return_year');
        }).then(function (table) {
          console.log('Created quotes table.');
        });
      }
    }),

    knex.schema.hasTable('packages').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('packages', function (table) {
          table.increments('id').primary();
          table.string('name', 255);
        }).then(function (table) {
          console.log('Created packages table.');
        });
      }
    })

  ])
}

knex.deleteEverything = function () {
  return knex('destinations').truncate()
    .then(function () {
      return knex('quotes').truncate()
    })
    .then(function () {
      return knex('packages').truncate()
    })
    .then(function () {
      console.log("Deleted destinations, quotes, and packages db tables")
    })
}

knex.closeDb = function () {
  knex.destroy().then(function () {
    console.log("Closed db connection")
  })
}



