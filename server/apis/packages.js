'use strict'

let knex = require('../../db/db');
let router = require('express').Router();

knex.getCheapestByRoute = function (originCity, destinationCity) {
	return knex('cheapest_route_ever').where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}



knex.getBookNowDetails = function (originCity, destinationCity) {
	return knex('quotes').where({
		originCity:originCity,
		destinationCity:destinationCity
	}).select('price', 'deepLink', 'outboundDate', 'inboundDate', 'originCity', 'destinationCity', 'created_at')
		.then((arr) => {
			return arr.reduce( (prev, curr) => {
				return prev.price < curr.price ? prev : curr
			})
		})
		.then( (x) => {
			console.log(x)
			return x
		})
		.catch((err) => { 
			console.log(err)
		})
}


knex.getCheapestInLastThirtyDays = function (originCity, destinationCity) {
	return knex('last_thirty_days').min('price').where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}


router.use('/selectpackage/:packagename', function(req, res){
  knex('destinations').where({'package_group': req.params.packagename}).select('*')
  	.then(function(data){
  		return Promise.all(data.map( (destination) => {
  		  			//remove hard coding of HOUA-sky
  		  			return knex.getBookNowDetails('HOUA-sky', destination.airport_code)
  		  			.then( (data) => {
  		  				destination.bookDetails = data;
  		  				return destination
  		  			})
  		  		}))
  	})
  	.then( (data) => {
  		res.send(data)
  	})
  	.catch( (err) => {
  		console.log(err)
  	})
})

module.exports = router;