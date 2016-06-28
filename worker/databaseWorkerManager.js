'use strict'

let knex = require('../db/db');
let CheapestRouteLastThirtyDays = require('./cheapestRouteLastThirtyDays');
let CheapestRouteEver = require('./cheapestRouteEver');
let CalculateAverages = require('./calculateAverages');
let DeleteOldQuotes = require('./deleteOldQuotes');

function databaseWorkerManager(){
	CheapestRouteLastThirtyDays.cheapestRouteLastThirtyDaysWorker()
	CheapestRouteEver.cheapestRouteEverWorker()
	CalculateAverages.calculateAveragesWorker()
	DeleteOldQuotes.deleteOldQuotesWorker()
}

// databaseWorkerManager()