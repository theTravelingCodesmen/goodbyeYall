'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router

knex.insertUserPrefs = function(prefsObj) {
	return knex('users').insert(prefsObj);
}

router.post('/',function(req, res) {
	console.log(req.body);
	knex.insertUserPrefs(req.body)
		.then(function(data){
			console.log("line 16 after call knex.insertUserPrefs:", data)
		})
		.catch(function (err) {
			console.log("error on line 19",err);
		})
})

