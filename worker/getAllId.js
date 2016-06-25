'use strict'

let router = require('express').Router();
let knex = require('../db/db');
let RequestPromise = require("request-promise");
let ApiKeys = require('../APIKEYS');
let accessTokenString;


// let testUserId ='10107762894943180';
// let testAccessToken = '1071311906250508|tcn74O778myEtGAFYWSUu8tBSH8';
let testNotification = 'Please work';


//
//returns all fb user ids from users table
knex.getAllId = function(){
	return knex('users').select('fb_id')
		// .then( (x) => {console.log(x)})
		// .then(knex.closeDb)
}


//
//GET reqest to Facebook oauth to get new App Access Token
function getAppAccessToken(){
	let options = {
		method: 'GET',
		uri: 'https://graph.facebook.com/oauth/access_token?client_id=' + ApiKeys.FACEBOOK_API.facebookAuth.clientID + '&client_secret=' + ApiKeys.FACEBOOK_API.facebookAuth.clientSecret + '&grant_type=client_credentials'
	}
	return RequestPromise(options)
}


//
//POST request to Facebook Graph API to send user a Facebook notification
///need to add href as forth param
function sendFbNotification(receipientUserId, appAccessToken, notification){
	let options = {
		method: 'POST',
		uri: 'https://graph.facebook.com/' + receipientUserId + '/notifications?access_token=' + appAccessToken + '&template=' + notification + '&href=/'
	}
	return RequestPromise(options)
}


//
//Promise chain that will send a notification to all users
function facebookNotifyAllUsers(notification){
	getAppAccessToken()
	.then ( (accessToken) => {
		console.log("Successfully grabbed accessToken:", accessToken)
		return accessToken.toString().slice(13);
	})
	.catch( (err) => {
		console.log("Error getting app access_token", err)
	})
	.then( (accessTokenString) => {
		accessTokenString = accessTokenString;
		return knex.getAllId()
			.map((obj)=> {
				return obj.fb_id
			})
	.then( (userIdArray) => {
		return Promise.all(userIdArray
			.map((fb_id)=> {
				return sendFbNotification(fb_id, accessTokenString, notification)
			})
		)
	})
	.then(knex.closeDb)
	})
}

facebookNotifyAllUsers("You are being spammed by GoodbyeYall.com")



