'use strict'

let router = require('express').Router();
let knex = require('../../db/db');
let requestPromise = require('request-promise');

module.exports = router

knex.insertUserPrefs = function(prefsObj) {
	return knex('users').insert(prefsObj);
}

knex.fetchExistingPrefs = function(fb_id){
	return knex('users').where("fb_id",fb_id).select()
}

router.get('/existing_pref/:fb_id',function(req, res) {
	knex.fetchExistingPrefs(req.params.fb_id)
		.then((data)=>{
			data = data[0];
			res.send({
			'DFWA-sky': data['DFWA-sky'],
    	'HOUA-sky': data['HOUA-sky'],
    	'AUS-sky': data['AUS-sky'],
    	'Seven Wonders': data['Seven Wonders'],
    	'Seven Natural Wonders': data['Seven Natural Wonders'],
			'Global Explorer': data['Global Explorer'],
			'American Cities': data['American Cities'],
			'Foodie Cities': data['Foodie Cities'],
			'Party Islands': data['Party Islands'],
    	'profile_name':data['profile_name']
			})
		})
})

router.get('/is_exist/:token', function(req, res){
	let fb_id;
	requestPromise(`https://graph.facebook.com/me?fields=id&access_token=${req.params.token}`)
		.then((data)=>{
			data = JSON.parse(data);
			if(data.id){
				fb_id = data.id
			}
		})
		.then(()=>{
			return knex('users').where('fb_id',fb_id)
		})
		.then((data)=>{
			data.length>0 ? res.json({found:true, fb_id:data[0].fb_id, profile_photo:data[0].profile_photo}) : res.json({found:false})
		})
})

router.post('/',function(req, res) {
	let prefsObj=Object.assign({}, req.body);
	if (req.body.token && !req.body.fb_id){
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
		newPref['AUS-sky']=req.body['AUS-sky'];
		newPref['Seven Wonders']=req.body['Seven Wonders'];
		newPref['Seven Natural Wonders']=req.body['Seven Natural Wonders'];
		newPref['Global Explorer']=req.body['Global Explorer'];
		newPref['American Cities']=req.body['American Cities'];
		newPref['Foodie Cities']=req.body['Foodie Cities'];
		newPref['Party Islands']=req.body['Party Islands'];
		newPref['fb_id']=req.body.fb_id;
		knex('users').where("fb_id",req.body.fb_id).select()
			.then((existing_pref)=>{
				if (existing_pref.length>0){
					newPref.profile_photo = existing_pref[0].profile_photo;
					return knex('users').where("fb_id",req.body.fb_id).update(newPref)
				}
			})
			.then(()=>res.send(newPref))
	}
})

