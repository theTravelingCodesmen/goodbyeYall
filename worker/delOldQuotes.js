'use strict'

let knex = require('../db/db');


knex.delOldQuotes = function(){
	//get any quotes in the quote tables
	//console.log('datetime for 36 hours ago: ', Date.now()-36*60*60*1000)
	return knex('quotes')
				.where('created_at','<', new Date(Date.now()-36*60*60*1000))
				.where('calculated', true)
				.del()
}


knex.delOldQuotes()
	.then(function(data){console.log("Total number of rows deleted: ", data)})
	.then(function(){
		console.log('==============================');
		console.log('deleted all quotes that are calculated and older than 36 hours old')
	})
	.then(knex.closeDb)