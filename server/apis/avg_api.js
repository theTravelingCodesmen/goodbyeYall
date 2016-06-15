'use strict'

let router = require('express').Router();
let knex = require('../../db/db');


knex.getAvgByRoute = function(originCity, destCity){
	return knex('averages').where('avg_price','>',1).where({
		originCity:originCity,
		destinationCity:destCity
	})
}

knex.getCheapestPriceByRoute = function(){
	return knex('averages').select('destinationCity', 'originCity').min('avg_price').where('avg_price','>',1).groupBy('destinationCity', 'originCity');
}



module.exports = router;


router.get('/:originCity/:destCity', function(req, res){
	knex.getAvgByRoute(req.params.originCity,req.params.destCity)
		.then((array)=>array.map(price=>{ 
			let date = price.outboundYear+'-'+price.outboundMonth
			return {
				price:price.avg_price,
				date: date
			}
		}))
		.then((array)=>res.send(array))
});

router.get('/cheapest', function(req, res){
	knex.getCheapestPriceByRoute().then(function(data){
		console.log(data)
	})
})