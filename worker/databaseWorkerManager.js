'use strict'

const knex = require('../db/db');
const CheapestRouteLastThirtyDays = require('./cheapestRouteLastThirtyDays');
const CheapestRouteEver = require('./cheapestRouteEver');
const CalculateAverages = require('./calculateAverages');
const DeleteOldQuotes = require('./deleteOldQuotes');


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