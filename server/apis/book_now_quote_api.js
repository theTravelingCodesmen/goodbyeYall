'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router;


knex.getBookNowDetails = function (originCity, destinationCity) {
	return knex('quotes').where({
		originCity:originCity,
		destinationCity:destinationCity
	}).select('price', 'deepLink', 'outboundDate', 'inboundDate', 'originCity', 'destinationCity', 'created_at')
}


router.get('/:originCity/:destinationCity', function(req, res){
	knex.getBookNowDetails(req.params.originCity,req.params.destinationCity)
		.then((arr) => {
			return arr.reduce( (prev, curr) => {
				return prev.price < curr.price ? prev : curr
			})
		})
		.then( (obj) => {
			console.log(obj)
			res.send(obj)
		})
		.catch((err) => { 
			console.log(err)
		})
})