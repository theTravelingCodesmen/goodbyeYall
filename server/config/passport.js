'use strict'
let configAuth = require('./auth');
let FacebookStrategy = require('passport-facebook').Strategy;
let pg = require('pg');
let conString = require('../../APIKEYS').PG_CONNECTION_STRING;
let client = new pg.Client(conString);

module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
   done(null, user.id;)
 });
 passport.deserializerUser(function(id, done) {
   // User.findById(id, function(err, user){
   //     done(err, user);
   // });
   client.connect(function(err) {
     if (err) {
       return console.error('could not connect to postgres', err);
     }
     client.query('SELECT * FROM users WHERE fb_id =' + id, function(err, result) {
       if (err) {
         return console.error('error running query', err);
       }
       client.end();
       console.log(result + 'line 26 result passport.js')
       done(err, result[0])
     });
   });
 });
 passport.use(new FacebookStrategy({
     clientId: configAuth.facebookAuth.clientId,
     clientSecret: configAuth.facebookAuth.clientSecret,
     callbackURL: configAuth.facebookAuth.callbackURL
   },

   function(token, refreshToken, profile, done) {

     // asynchronous
     process.nextTick(function() {

       // find the user in the database based on their facebook id
       User.findOne({
         'facebook.id': profile.id
       }, function(err, user) {

         // if there is an error, stop everything and return that
         // ie an error connecting to the database
         if (err)
           return done(err);

         // if the user is found, then log them in
         if (user) {
           return done(null, user); // user found, return that user
         } else {
           // if there is no user found with that facebook id, create them
           var newUser = new User();

           // set all of the facebook information in our user model
           newUser.facebook.id = profile.id; // set the users facebook id                   
           newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
           newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
           newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

           // save our user to the database
           newUser.save(function(err) {
             if (err)
               throw err;

             // if successful, return the new user
             return done(null, newUser);
           });
         }

       });
     });

   }));

};
=======
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
>>>>>>> d0dac6c2ae665ef82c226c30f3306442f6eb9ee1
