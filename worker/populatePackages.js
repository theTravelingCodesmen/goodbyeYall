'use strict'

let knex = require ('../db/db');

knex.truncateTable('packages');


let sevenWonders = {
    name: "Seven Wonders of the World"
};

let sevenNaturalWonders = {
    name: "Seven Natural Wonders of the World"
}

let packagesArray = [sevenWonders, sevenNaturalWonders];


// insert destination into destinations database
knex.insertPackage = function(packageObject) {
    return knex('packages').insert(packageObject);
}


Promise.all(
packagesArray.map(function (tripPackage) {
    return knex.insertPackage(tripPackage);
}))
    .then(function () {
        console.log("Inserted all packages");
    })
    .catch(function(error) {
        console.log("There was an error inserting all the packages:", error);
    })
    .then(knex.closeDb)
