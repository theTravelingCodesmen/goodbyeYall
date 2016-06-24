'use strict'

let knex = require('../../db/db');
let router = require('express').Router();

module.exports = router;

knex.getCheapestByRoute = function (originCity, destinationCity) {
	return knex('cheapest_route_ever').where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}


knex.getBookNowDetails = function (originCity, destinationCity) {
	return knex('quotes')
		.where({
			originCity:originCity,
			destinationCity:destinationCity
		})
		.select('price', 'deepLink', 'outboundDate', 'inboundDate', 'originCity', 'destinationCity', 'created_at')
}


knex.getCheapestInLastThirtyDays = function (originCity, destinationCity) {
	return knex('last_thirty_days')
	.min('price')
	.where({
		originCity:originCity,
		destinationCity:destinationCity
	})
}


router.use('/selectpackage/:packagename', function(req, res){
  knex('destinations')
  .where({'package_group': req.params.packagename})
  .select('*')
  	.then(function(data){
			return Promise.all(
				data.map( (destination) => {
					//req.headers.originairport is from axios header, which is fetch from client's localstorage
					return knex.getBookNowDetails( req.headers.originairport, destination.airport_code)
				.then( (info) => {
					destination.bookDetails = info.reduce( (prev, curr) => {
					return prev.price < curr.price ? prev : curr
				}, {});
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
