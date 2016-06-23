'use strict'

let knex = require('../db/db');


knex.delOldQuotes = function(){
	//get any quotes in the quote tables
	//console.log('datetime for 36 hours ago: ', Date.now()-36*60*60*1000)
	return knex('quotes')
				.where('created_at','<', new Date(Date.now()-30*60*60*1000))
				.where('calculated', true)
				.del()
}

knex.delOldThirtyDayQuote = function(){
	return knex('last_thirty_days')
				.where('created_at','<', new Date(Date.now()-30*24*60*60*1000))
				.del()
}


knex.delOldQuotes()
	.then(function(data){console.log("Total number of rows deleted: ", data)})
	.then(function(){
		console.log('deleted all rows from data table "quotes" that are calculated and more than 36 hours old')
		console.log('==============================');
	})
	knex.delOldThirtyDayQuote()
	.then(function(data){console.log("Total number of rows deleted: ", data)})
	.then(function(){
		console.log('deleted all rows from data table "last_thirty_days" that are more than 30 days old')
		console.log('==============================');
	})
	.then(knex.closeDb)