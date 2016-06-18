'use strict'
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let skyscanner_api = require('./apis/skyscanner_api');
let avg_price = require('./apis/avg_api');
let select_package = require('./apis/packages');

let routes = express.Router();
routes.use(express.static(path.join(__dirname, '..', 'client', 'public')));
routes.use('/hello-traveling-codesman', function(req, res){
	res.end('hello travelingcodesman!');
});
routes.use('/skyscanner_api', skyscanner_api);
routes.use('/avg_price', avg_price);
routes.use('/packages', select_package);


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
		// app.use('/skyscanner_api', skyscanner_api);
		// at api endpoint here when available

		app.listen(process.env.PORT||4000);
	
	};
