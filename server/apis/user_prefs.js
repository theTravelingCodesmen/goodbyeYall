'use strict'

let router = require('express').Router();

module.exports = router

router.post('/',function(req, res) {
	console.log(req.body);
})
