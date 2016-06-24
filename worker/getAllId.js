'use strict'

let router = require('express').Router();
let knex = require('../db/db');
let RequestPromise = require("request-promise");


knex.getAllId = function(){
	return knex('users').select('fb_id')
		.then(knex.closeDb)
}


function getAppAccessToken(){
	let options = {
		method: 'GET',
		uri: 
	},
	headers: {
		"Content-Type": "application/json"
	}
}



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


knex.getAllId();
