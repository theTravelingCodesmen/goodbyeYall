'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router;

knex.getCheapestInLastThirtyDays = function (originCity, destinationCity) {
	return knex('last_thirty_days').min('price').where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}

router.get('/:originCity/:destinationCity', function(req, res){
	knex.getCheapestInLastThirtyDays(req.params.originCity,req.params.destinationCity)
		.then((arr) => {
			res.send(arr[0])
		})
		.catch((err) => { 
			console.log(err)
		})
})