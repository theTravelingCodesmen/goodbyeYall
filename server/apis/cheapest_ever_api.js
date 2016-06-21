'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router;


knex.getCheapestByRoute = function (originCity, destinationCity) {
	return knex('cheapest_route_ever').where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}


router.get('/:originCity/:destinationCity', function(req, res){
	knex.getCheapestByRoute(req.params.originCity,req.params.destinationCity)
		.then((arr) => {
			res.send(arr[0])
		})
		.catch((err) => { 
			console.log(err)
		})
})