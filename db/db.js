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
          table.string('origin', 255);
          table.string('destination', 255);
          table.integer('price');
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.string('depart_full_date', 255);
          table.string('return_full_date', 255);
          table.integer('depart_month');
          table.integer('return_month');
          table.integer('depart_year');
          table.integer('return_year');
          table.string('deep_link', 2000);
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
    }),

    knex.schema.hasTable('averages').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('averages', function (table) {
          table.increments('id').primary();
          table.integer('avg_price');
          table.integer('count');
          table.integer('month');
          table.integer('year');
          table.string('origin', 255);
          table.string('destination', 255);
        }).then(function (table) {
          console.log('Created averages table.');
        });
      }
    })

  ])
}


//
// Insert all elements of a quotes array into the quotes table
//
knex.insertEverything = function(quoteArr) {
  return Promise.all(_.map(quoteArr, function(quote) {
    return knex('quotes').insert(quote)
      .then(function (res) {
        console.log("Added entry to quotes table: ", res);
      })
      .catch(function (err) {
        console.log("Error inserting into quotes table': ", err);
      })
  })).then(function() {
    return quoteArr;
  });
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
      return knex('averages').truncate()
    })
    .then(function () {
      console.log("Deleted destinations, quotes, packages, and averages db tables")
    })
}

knex.closeDb = function () {
  knex.destroy().then(function () {
    console.log("Closed db connection")
  })
}







