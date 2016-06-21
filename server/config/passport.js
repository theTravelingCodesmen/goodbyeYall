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
           return console.error('error running query', err);
         }
         client.end();
         console.log(result + ' result passport.js')
         return done(err, result[0])
       });
     });
   });
  passport.use(new FacebookStrategy(facebookApi.facebookAuth, function(token, refreshToken, profile, done) {
       // asynchronous
      process.nextTick(function() {
         // find the user in the database based on their facebook id
        client.connect(function(err){
          if(err){
            console.error('passport couldnt connect', err)
          }
          client.query('SELECT * FROM users where fb_id =' + id, function(err, result) {
            if (err) {
              return console.error('error running query', err);
            }
            let user = result[0];
            if (user) {
             return done(null, user);
            } else{
                client.query('INSERT INTO users(token, fb_id, profileName, profileEmail) VALUES($1, $2,$3,$4)', [token, profile.id, profile.name.givenName + ' ' + profile.name.familyName, profile.emails[0].value], 
                function(err, result){
                  if(err){
                    return console.error('problem with inserting user', err)
                  } 
                  return done(null, result[0]);
                  })
              }
          })
        });
    });
  }))
}
