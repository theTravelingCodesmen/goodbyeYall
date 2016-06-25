'use strict'

let router = require('express').Router();
let knex = require('../../db/db');

module.exports = router

knex.insertUserPrefs = function(prefsObj) {
	return knex('users').insert(prefsObj);
}

router.post('/',function(req, res) {
	console.log(req.body);

})

