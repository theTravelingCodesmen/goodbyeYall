'use strict'

let router = require('express').Router();
let knex = require('../../db/db');
let requestPromise = require('request-promise');
module.exports = router

knex.insertUserPrefs = function(prefsObj) {
	return knex('users').insert(prefsObj);
}
knex.fetchExistingPrefs = function(fb_id){
	return knex('users').where({fb_id:fb_id}).select('*')
}
router.get('/existing_pref/:fb_id',function(req, res) {
	console.log(req.params.fb_id);
	knex.fetchExistingPrefs(req.params.fb_id)
		.then((data)=>console.log(data))

})


router.post('/',function(req, res) {
	console.log(req.body);
	let prefsObj=Object.assign({}, req.body);
	if (req.body.token){
		requestPromise(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${req.body.token}`)
			.then((data)=>{
				data = JSON.parse(data);
				prefsObj.fb_id = data.id;
				prefsObj.profile_name = data.name;
				prefsObj.profile_email = data.email;
				prefsObj.profile_photo = data.picture.data.url;
				// console.log('line 24 prefsObj before insert into db', prefsObj)
				return prefsObj
			})
			.then(knex.insertUserPrefs)
			.then(()=>{
				res.send(prefsObj);
			});
	}
	// knex.insertUserPrefs(req.body)
	// 	.then(function(data){
	// 		console.log("line 16 after call knex.insertUserPrefs:", data)
	// 	})
	// 	.catch(function (err) {
	// 		console.log("error on line 19",err);
	// 	})
})

