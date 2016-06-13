'use strict'
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let requestpromise = require('request-promise');

let routes = express.Router();
routes.use(express.static(path.join(__dirname, '..', 'client', 'public')));
routes.use('/hello-traveling-codesman', function(req, res){
	res.end('hello travelingcodesman!');
})


if(process.env.NODE_ENV === 'test'){
	module.exports = routes;
} else {
		let app = express();

		// uncomment after favicon moved into public
		// app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
		app.use(logger('dev'));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(cookieParser());
		app.use('/', routes);
		app.use('/skyscanner_api/d3_cache/:location/:currency/:ISO/:dest/:arrival/:depart_time/:arrival_time', function(req, res){
			let skyscanner_endpoint = 'http://partners.api.skyscanner.net/apiservices/browsedates/v1.0';
			skyscanner_endpoint+= '/' + req.params.location;
			skyscanner_endpoint+= '/' + req.params.currency;
			skyscanner_endpoint+= '/' + req.params.ISO;
			skyscanner_endpoint+= '/' + req.params.dest;
			skyscanner_endpoint+= '/' + req.params.arrival;
			skyscanner_endpoint+= '/' + req.params.depart_time;
			skyscanner_endpoint+= '/' + req.params.arrival_time;
			skyscanner_endpoint+= '?apiKey=' + req.query.apiKey;
			requestpromise(skyscanner_endpoint).then(JSON.parse).then(function(resp){
				res.json(resp)
			})
			
		});

		// at api endpoint here when available

		app.listen(process.env.PORT||4000);
	
	};
