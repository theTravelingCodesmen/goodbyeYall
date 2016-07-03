'use strict'

let router = require('express').Router();
let knex = require('../../db/db');


knex.getAvgByRoute = function(originCity, destCity){
	return knex('averages')
		.where('avg_price','>',1)
		.where({
			originCity:originCity,
			destinationCity:destCity
		})
}


router.get('/:originCity/:destCity', function(req, res){
	knex.getAvgByRoute(req.params.originCity,req.params.destCity)
		.then( (array) => array.map( price => { 
			let date = price.outboundYear+'-'+price.outboundMonth
			return {
				price:price.avg_price,
				date: date
			}
		}))
		.then( (array) => res.send(array) )
});


module.exports = router;
