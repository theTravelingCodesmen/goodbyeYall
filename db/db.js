'use strict'
let config = require('./knexfile')
let env = process.env.NODE_ENV || 'development'
let knex = require('knex')(config[env])

//just to test the connection to remote db
knex.schema.hasTable('test').then(function(exist){
	console.log('Is test table exist? ', exist);
}).catch(function(err){
	console.log('err on line 9', err);
}).then(function(){
	//close the connection to remote db
	knex.destroy();
})

module.exports = knex;