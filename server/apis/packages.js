'use strict'

let knex = require('../../db/db');
let router = require('express').Router();

router.use('/selectpackage/:packagename', function(req, res){
  knex('destinations').where({'package_group': req.params.packagename}).select('*')
  	.then(function(data){
  	res.send(data);
  	})
 
})

module.exports = router;