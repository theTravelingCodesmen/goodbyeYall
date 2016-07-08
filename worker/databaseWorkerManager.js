'use strict'

let knex = require('../db/db');
let CheapestRouteLastThirtyDays = require('./cheapestRouteLastThirtyDays');
let CheapestRouteEver = require('./cheapestRouteEver');
let CalculateAverages = require('./calculateAverages');
let DeleteOldQuotes = require('./deleteOldQuotes');


function databaseWorkerManager(){
	CheapestRouteLastThirtyDays.cheapestRouteLastThirtyDaysWorker()
		.then( () => {
			return CheapestRouteEver.cheapestRouteEverWorker()
		})
		.then( () => {
			return DeleteOldQuotes.deleteOldQuotesWorker()
		})
		.then( () => {
			return CalculateAverages.calculateAveragesWorker()
		})
		.then(knex.closeDb)
}

databaseWorkerManager()