'use strict'

let router = require('express').Router();
let knex = require('../db/db');
let RequestPromise = require("request-promise");
let ApiKeys = require('../APIKEYS')



let testUserId ='10107762894943180';
let testAccessToken = '1071311906250508|tcn74O778myEtGAFYWSUu8tBSH8';
let testNotification = 'Please work';

//
//returns all fb user ids from users table
knex.getAllId = function(){
	return knex('users').select('fb_id')
		.then(knex.closeDb)
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



getAppAccessToken()
	.then ( (accessToken) => {
		console.log("Successfully grabbed accessToken:", accessToken)
		return accessToken.toString().slice(13);
	})
	.catch( (err) => {
		console.log("Error getting app access_token", err)
	})
	.then( (accessTokenString) => {
		return sendFbNotification('10107762894943180', accessTokenString, 'This is the real test')
	})
	.then( (successResp) => {
		console.log(successResp)
	})
	.catch( (err) => {
		console.log("Error sending Facebook notification", err)
	})

knex.getAllId()







// FB.getLoginStatus(function(response) {
// 	if (response.status === 'connected') {
// 		let accessToken = response.authResponse.accessToken;
// 			FB.api('/'+1071311906250508+'/notifications?'+accessToken+'&template=NewPosted&href=/cheapest/', 'POST', {}, function (response) {
// 				if (!response || response.error) {
// 					console.log('Error occured:' + response.error.message);
// 				}else{
// 					console.log('Post ID: ' + response.id);
// 				}
// 			});
// 	}
// });  


// FB.api('/RECEIPIENT_USERID/notifications',
// 	'post',
// 	{
// 		access_token: APP_ACCESS_TOKEN,
//     href: '/cheapest'        
//     template: "You have been added as adminstrator to goodbyeyall app",
//   }, 
//   function(response){
//   	if (!response || response.error){
//     	console.log('Error occurred');
//     } else {
//       console.log('Success :D');
//     	}
//   };

// https://graph.facebook.com/endpoint?
// GET /oauth/access_token?
//     client_id={app-id}
//     client_secret={app-secret}
//     grant_type=client_credentials


///////example get req to get app access token
// https://graph.facebook.com/oauth/access_token?client_id={app-id}&client_secret={app-secret}&grant_type=client_credentials



//1071311906250508|tcn74O778myEtGAFYWSUu8tBSH8


//knex.getAllId();
