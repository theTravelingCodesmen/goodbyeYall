'use strict'
let knex = require('../../db/db');


function fetchDestinationsFromDb(selectedPackage){
	console.log(knex.pullDestinationsByPackage)
}
fetchDestinationsFromDb("Seven Wonders of the World");