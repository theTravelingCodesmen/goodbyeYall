'use strict'
let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
let pg = require('pooled-pg');
pg.defaults.poolSize = 6;
let conString, facebookApi;

if(process.env.NODE_ENV==='production'){
  conString = process.env.DATABASE_URL
  facebookApi = {
    'facebookAuth' : {
    'clientID'      : process.env.FB_CLIENT_ID, // your App ID
    'clientSecret'  : process.env.FB_CLIENT_SECRET, // your App Secret
    'callbackURL'   : 'http://www.goodbyeyall.com/auth/facebook/callback',
    'profileFields' : ['id', 'displayName', 'email', 'photos']
    }
  }
} else {
  conString = require('../../APIKEYS').PG_CONNECTION_STRING;
  facebookApi = require("../../APIKEYS.js").FACEBOOK_API
}


module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
  //console.log ("line 12 ", user)
   done(null, user)
 });
  passport.deserializeUser(function(user, done) {
    //console.log('line 16 deserializeUser ', user)
    pg.connect(conString, function(err, client, pg_done){ 
     if (err) {
       return console.error('could not connect to postgres', err);
     }
     client.query('SELECT * FROM users WHERE fb_id =' + user.id.toString(), function(err, result) {
       if (err) {
         return console.error('line 24 error running query', err);
       }
       //console.log(result + ' result passport.js')
       return done(err, result.rows[0])
     });
    })
   });
  passport.use(new FacebookStrategy(facebookApi.facebookAuth, function(token, refreshToken, profile, done) {
       // asynchronous
       // console.log(token, "type of token", typeof token)
       // console.log("type of refreshtoken", typeof refreshToken)
       // console.log("refreshtoken", refreshToken);
       // console.log('type of profile', profile)
       // console.log('type of profile.emails', typeof profile.emails )
       // console.log(profile.photos);

      process.nextTick(function() {
         // find the user in the database based on their facebook id
        pg.connect(conString, function(err, client, pg_done){
          if(err){
            console.error('passport couldnt connect', err)
          }
          client.query('SELECT * FROM users WHERE fb_id = $1', [profile.id], function(err, result) {
            // if (result){
            //   console.log('line 48, result ', result.rows);
            // }
            if (err) {
              console.error('line 51 error running query', err);
            }
            
            if (result.rows.length!==0) {
              let user = result.rows[0];
             return done(null, {token:user.token, id:user.fb_id});
            } else{
                client.query('INSERT INTO users(token, fb_id, profile_name, profile_email, profile_photo) VALUES($1, $2, $3, $4, $5)', 
                  [token, profile.id, profile.displayName, profile.emails[0].value, profile.photos[0].value], 
                function(err, result){
                  if(err){
                    return console.error('line 62 problem with inserting user', err)
                  } 
                  //console.log('line 64, result = ', result);
                  return done(null, {token:token, id:profile.id});
                  })
              }
          })
        });
    });
  }))
}
