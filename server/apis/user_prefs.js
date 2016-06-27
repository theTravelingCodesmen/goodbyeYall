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
		.then((data)=>res.send({
			'DFWA-sky': data['DFWA-sky'],
    	'HOUA-sky': data['HOUA-sky'],
    	'Seven Wonders': data['Seven Wonders'],
    	'Seven Natural Wonders': data['Seven Natural Wonders'],
    	'profile_name':data['profile_name']
		}))
})

router.post('/',function(req, res) {
	console.log(req.body);
	let prefsObj=Object.assign({}, req.body);
	if (req.body.token){
		// if token in req body, we can assuming user is logged in the first time
		requestPromise(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${req.body.token}`)
			.then((data)=>{
				data = JSON.parse(data);
				prefsObj.fb_id = data.id;
				prefsObj.profile_name = data.name;
				prefsObj.profile_email = data.email;
				prefsObj.profile_photo = data.picture.data.url;
				return prefsObj
			})
			.then(knex.insertUserPrefs)
			.then(()=>{
				res.send(prefsObj);
			});
	}
	if (req.body.fb_id){
		//if there is a fb_id in req.body, assume user is logged in and user already has a preference
		let newPref ={};
		newPref['DFWA-sky'] = req.body['DFWA-sky'];
		newPref['HOUA-sky']=req.body['HOUA-sky'];
		newPref['Seven Wonders']=req.body['Seven Wonders'];
		newPref['Seven Natural Wonders']=req.body['Seven Natural Wonders'];
		newPref['fb_id']=req.body.fb_id;
		knex('users').where("fb_id",req.body.fb_id).select()
			.then((existing_pref)=>{
				if (existing_pref.length>0){
					return knex('users').where("fb_id",req.body.fb_id).update(newPref)
				}
			})
			.then(()=>res.send(newPref))
	}
})

