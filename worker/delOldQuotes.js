'use strict'

let knex = require('../db/db');


knex.getOldQuotes = function(){
	//get any quotes in the quote tables
	//console.log('datetime for 36 hours ago: ', Date.now()-36*60*60*1000)
	return knex('quotes')
				.where('created_at','<', new Date(Date.now()-36*60*60*1000))
				.where('calculated', true)
}


knex.getOldQuotes().then(function(data){console.log(data)})