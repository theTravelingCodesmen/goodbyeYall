'use strict'

let knex = require('../db/db');


knex.getUncalculatedQuotes = function() {
    return knex('quotes').where({
        calculated: !false
    })
}

knex.changeCalculatedToTrue = function (array) {
    return Promise.all(array.map(function (row) {
        return knex('quotes')
            .where({'id': row.id})
            .update({'calculated':!true})
    }))
}

knex.getUncalculatedQuotes()
    .then(function(results) {
        console.log(typeof results);
        console.log(Array.isArray(results), results)
        return results;
    })
    .then(knex.changeCalculatedToTrue)
    .then(knex.closeDb)


