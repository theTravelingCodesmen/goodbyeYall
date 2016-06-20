// calculate the cheapest ever price by route 

// first go thru the quotes dt, and grab the cheapest price by route, ignore outbound and inbound date

// in the array got back, do a .map (function(route))
	// get the origin and dest city from the dt (cheapest_route_ever)
	// compare the two obj
	// if the new price is cheaper, update the cheapest_route_ever row (by id)
'use strict'
let knex = require('../db/db');

knex.getCheapestRouteInQuotes = function(){
	// look into the quotes datatable and grab the cheapest routes by origin/dest
	return knex('quotes').select('originCity','destinationCity').min('price').groupBy('originCity', 'destinationCity')
}



knex.insertCheapestRoute = function(obj){
	//obj represent the current cheapest route price in the quotes datatable
	//obj format 
  // {originCity: 'DFWA-sky',destinationCity: 'AMMA-sky', min: 813.86 }
 	let currentCheapest = knex('cheapest_route_ever').select('*').where({
  	originCity: obj.originCity,
  	destinationCity: obj.destinationCity
  });
  if (!currentCheapest){
  	return knex('cheapest_route_ever').insert(obj)
  }else{
  	return knex('cheapest_route_ever').where('id','=',currentCheapest.id).update(obj)
  }
}

knex.getCheapestRouteInQuotes().then(function(data){
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
	return Promise.all(cheapestQuotes.map(knex.insertCheapestRoute))
})
.then(knex.closeDb)