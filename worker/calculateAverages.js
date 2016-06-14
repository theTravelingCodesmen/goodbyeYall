'use strict'

let knex = require('../db/db');


knex.getUncalculatedQuotes = function(outboundMonth,outboundYear,originCity,destinationCity) {
    return knex('quotes').where({
        calculated: false,
        outboundMonth: outboundMonth,
        outboundYear: outboundYear,
        originCity: originCity,
        destinationCity: destinationCity
    })
}

knex.changeCalculatedToTrue = function (array) {
    return Promise.all(array.map(function (row) {
        return knex('quotes')
            .where({'id' : row.id})
            .update({'calculated' : true})
    }))
}

// knex.getUncalculatedQuotes()
//     .then(function(results) {
//         console.log(typeof results);
//         console.log(Array.isArray(results), results)
//         return results;
//     })
//     .then(knex.changeCalculatedToTrue)
//     .then(knex.closeDb)


knex.getAverages = function(outboundMonth,outboundYear,originCity,destinationCity) {
    return knex('averages')
        .where({
        outboundMonth : outboundMonth,
        outboundYear : outboundYear,
        originCity : originCity,
        destinationCity : destinationCity
        })
}

//function below assumes we are getting an array with one object back from knex.getAverages
knex.updateAverages = function (newAverageObject) {
    return knex('averages')
        .where({'id' : newAverageObject.id})
        .update({'avg_price' : newAverageObject.price})
}

// knex.getAverages()
//     .then(function(results) {
//         console.log(typeof results);
//         console.log(Array.isArray(results), results)
//         return results;
//     })
//     // .then(knex.changeCalculatedToTrue)
//     .then(knex.closeDb)


Promise.all([
    knex.getUncalculatedQuotes("06","2016","DFWA-sky","BJSA-sky"),
    knex.getAverages("06","2016","DFWA-sky","BJSA-sky")
    ])
    .then(function (value) {
        let quote = value[0];
        let average = value[1];
        if (average.length === 0) {
            //need to create new average
        } else {
            //need to update current average
        }
        average = average[0] || {};
        console.log("quote: ", quote);
        console.log("average: ", average);
    })



