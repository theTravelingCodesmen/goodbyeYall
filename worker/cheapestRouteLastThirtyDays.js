// calculate the cheapest ever price by route 

// first go thru the quotes dt, and grab the cheapest price by route, ignore outbound and inbound date

// in the array got back, do a .map (function(route))
	// get the origin and dest city from the dt (cheapest_route_ever)
	// compare the two obj
	// if the new price is cheaper, update the cheapest_route_ever row (by id)
'use strict'
let knex = require('../db/db');

knex.getCheapestRouteInQuotesByDate = function(){
	// look into the quotes datatable and grab the cheapest routes by origin/dest
	return knex('quotes').where('created_at','>', new Date(Date.now()-24*60*60*1000)).select('originCity','destinationCity').min('price as price').groupBy('originCity', 'destinationCity')
}

knex.insertIntoLastThirtyDays = function(obj){
	//obj represent the current cheapest route price in the quotes datatable
	//obj format 
  // {originCity: 'DFWA-sky',destinationCity: 'AMMA-sky', min: 813.86 }
 	return knex('last_thirty_days').insert(obj)
}

knex.getCheapestRouteInQuotesByDate().then(function(data){
	data = data.sort(function(x, y){
		if (x.originCity < y.originCity)return 1
		if (x.originCity > y.originCity)return -1
		if (x.originCity === y.originCity){
			if (x.destinationCity < y.destinationCity)return 1
			if (x.destinationCity > y.destinationCity)return -1
		}
	})
	console.log(data)
	return data
})
.then(function(cheapestQuotes){
	return Promise.all(cheapestQuotes.map(knex.insertIntoLastThirtyDays))
})
.then(knex.closeDb);