'use strict'

//let configAuth = require('./auth');
let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
let pg = require('pg');
let conString = require('../../APIKEYS').PG_CONNECTION_STRING;
let client = new pg.Client(conString);
let facebookApi = require("../../APIKEYS.js").FACEBOOK_API


module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
   done(null, user.id)
 });
  passport.deserializeUser(function(id, done) {
     client.connect(function(err) {
       if (err) {
         return console.error('could not connect to postgres', err);
       }
       client.query('SELECT * FROM users WHERE fb_id =' + id, function(err, result) {
         if (err) {
           return console.error('line 23 error running query', err);
         }
         client.end();
         console.log(result + ' result passport.js')
         return done(err, result[0])
       });
     });
   });
  passport.use(new FacebookStrategy(facebookApi.facebookAuth, function(token, refreshToken, profile, done) {
       // asynchronous
       console.log(token, "type of token", typeof token)
       console.log("type of refreshtoken", typeof refreshToken)
       console.log("refreshtoken", refreshToken);
       console.log('type of profile', profile)
       console.log('type of profile.emails', typeof profile.emails )
       console.log(profile.emails);

      process.nextTick(function() {
         // find the user in the database based on their facebook id
        client.connect(function(err){
          if(err){
            console.error('passport couldnt connect', err)
          }
          client.query('SELECT * FROM users WHERE fb_id = $1', [profile.id], function(err, result) {
            console.log('line 47, result ', result.rows);
            if (err) {
              console.error('line 49 error running query', err);
            }
            
            if (result.rows.length!==0) {
              let user = result.rows[0];
              // client.end();
             return done(null, user);
            } else{
                client.query('INSERT INTO users(token, fb_id, profile_name) VALUES($1, $2,$3)', [token, profile.id, profile.displayName ], 
                function(err, result){
                  if(err){
                    return console.error('problem with inserting user', err)
                  } 
                  console.log('line 58, result.rows = ', result.rows);
                  // client.end();
                  return done(null, result.rows[0]);
                  })
              }
          })
        });
    });
  }))
}
