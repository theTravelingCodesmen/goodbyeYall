'use strict'

let knex = require('../db/db');
let CheapestRouteEver = require('./cheapestRouteEver');
let DeleteOldQuotes = require('./deleteOldQuotes');
let CheapestRouteLastThirtyDays = require('./cheapestRouteLastThirtyDays')

function databaseWorkerManager(){
	CheapestRouteEver.cheapestRouteEverWorker()
		.then( () => {
			return DeleteOldQuotes.deleteOldQuotesWorker()
		})
}

databaseWorkerManager()