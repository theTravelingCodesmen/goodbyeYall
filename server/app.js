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
let cheapest_ever_api = require('./apis/cheapest_ever_api');
let last_thirty_days_api = require('./apis/last_thirty_days_api');
let book_now_quote_api = require('./apis/book_now_quote_api');

let routes = express.Router();
routes.use(express.static(path.join(__dirname, '..', 'client', 'public')));
routes.use('/hello-traveling-codesman', function(req, res){
	res.end('hello travelingcodesman!');
});
// add api endpoints when available
routes.use('/skyscanner_api', skyscanner_api);
routes.use('/avg_price', avg_price);
routes.use('/packages', select_package);
routes.use('/cheapest_ever_api', cheapest_ever_api);
routes.use('/last_thirty_days_api', last_thirty_days_api);
routes.use('/book_now_quote_api', book_now_quote_api);


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
		app.listen(process.env.PORT||4000);
	
	};
