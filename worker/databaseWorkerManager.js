'use strict'

let knex = require('../db/db');
let CheapestRouteEver = require('./cheapestRouteEver')
let DeleteOldQuotes = require('./delOldQuotes')

function databaseWorkerManager(){
	CheapestRouteEver.cheapestRouteEverWorker()

}

databaseWorkerManager()