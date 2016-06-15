'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router;


router.get('/', function(req, res){
	res.send({hello:"world"})
});



// router.get('/d3_cache/:location/:currency/:ISO/:dest/:arrival/:depart_time/:arrival_time', function(req, res){
// 	let skyscanner_endpoint = 'http://partners.api.skyscanner.net/apiservices/browsedates/v1.0';
// 	skyscanner_endpoint+= '/' + req.params.location;
// 	skyscanner_endpoint+= '/' + req.params.currency;
// 	skyscanner_endpoint+= '/' + req.params.ISO;
// 	skyscanner_endpoint+= '/' + req.params.dest;
// 	skyscanner_endpoint+= '/' + req.params.arrival;
// 	skyscanner_endpoint+= '/' + req.params.depart_time;
// 	skyscanner_endpoint+= '/' + req.params.arrival_time;
// 	skyscanner_endpoint+= '?apiKey=' + req.query.apiKey;
// 	requestpromise(skyscanner_endpoint).then(JSON.parse).then(function(resp){
// 		res.json(resp)
// 	})
	
// });
