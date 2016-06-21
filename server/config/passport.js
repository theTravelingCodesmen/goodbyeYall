'use strict'

//let configAuth = require('./auth');
let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
let pg = require('pooled-pg');
pg.defaults.poolSize = 6;
let conString = require('../../APIKEYS').PG_CONNECTION_STRING;
//let client = new pg.Client(conString);
let facebookApi = require("../../APIKEYS.js").FACEBOOK_API


module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
  console.log ("line 14 ", user)
   done(null, user)
 });
  passport.deserializeUser(function(user, done) {
    console.log('line 18 deserializeUser ', user)
    pg.connect(conString, function(err, client, pg_done){
      
       if (err) {
         return console.error('could not connect to postgres', err);
       }
       client.query('SELECT * FROM users WHERE fb_id =' + user.id.toString(), function(err, result) {
         if (err) {
           return console.error('line 26 error running query', err);
         }
         // client.end();
         console.log(result + ' result passport.js')
         return done(err, result.rows[0])
       });
    })
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
        pg.connect(conString, function(err, client, pg_done){
          if(err){
            console.error('passport couldnt connect', err)
          }
          client.query('SELECT * FROM users WHERE fb_id = $1', [profile.id], function(err, result) {
            if (result){
              console.log('line 51, result ', result.rows);
            }
            if (err) {
              console.error('line 54 error running query', err);
            }
            
            if (result.rows.length!==0) {
              let user = result.rows[0];
              // client.end();
             return done(null, {token:user.token, id:user.fb_id});
            } else{
                client.query('INSERT INTO users(token, fb_id, profile_name, profile_email) VALUES($1, $2, $3, $4)', [token, profile.id, profile.displayName, profile.emails[0].value], 
                function(err, result){
                  if(err){
                    return console.error('problem with inserting user', err)
                  } 
                  console.log('line 67, result = ', result);
                  // client.end();
                  return done(null, {token:token, id:profile.id});
                  })
              }
          })
        });
    });
  }))
}
