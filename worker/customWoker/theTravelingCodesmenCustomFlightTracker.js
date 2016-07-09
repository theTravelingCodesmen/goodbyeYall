'use strict'

//////////////////////////////////////////////
//////INSTRUCTIONS///////////////////////////
////////////////////////////////////////////


// 1. Insert origin into originCities array
//   e.g. let originCities = ["AUS-sky"];
let originCities = ["AUS-sky"];
// 2. Insert destination into destinationCities array
//   e.g let destinationCities = ["MKE-sky"];
let destinationCities = ["DEN-sky"];
// 3. Insert date into departureDates array 
//   e.g. let departureDates = ["2016-08-10"];
// NOTE: you can put in multiple dates
let departureDates = ["2016-08-1o"];
// 4. Insert date into returnDates array
//   e.g. let returnDates = ["2016-08-16"];
// NOTE: you can put in multiple dates
let returnDates = ["2016-08-16"];
// 5. In terminal run the file.
//   e.g. node worker/customWorker/theTravelingCodesmenCustomFlightTracker.js



let RequestPromise = require("request-promise");
let PromiseThrottle = require("promise-throttle");
let Knex = require('../../db/db');
if (process.env.NODE_ENV!=='production'){
  var SkyscannerKeys = require("../../APIKEYS.js");
}


let promiseThrottle = new PromiseThrottle({
  requestsPerSecond: 1,          // up to 10 requests per second 
  promiseImplementation: Promise  // the Promise library you are using 
});


//
//POST request to skyscanner to get session key
function getSessionKey(originplace, destinationplace, outbounddate, inbounddate) {
  console.log("getting session key");
  let options = {
    method: 'POST',
    uri: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0',
    transform: (body, response, resolveWithFullResponse) => {
      return response.headers.location.split("/").slice(-1)[0];
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    form: {
      apiKey: process.env.SKYSCANNER_API || SkyscannerKeys.SKYSCANNER_API,
      country: "US",
      currency: "USD",
      locale: "en-US",
      originplace: originplace,
      destinationplace: destinationplace,
      outbounddate: outbounddate,
      inbounddate: inbounddate
    }
  }
  return RequestPromise(options)
}


//
//GET request to skyscanner to get flight info
function pollSession(sessionKey) {
  console.log("pollSession called");
  let options = {
    method: 'GET',
    uri: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0/' + sessionKey + '?apiKey=' + (process.env.SKYSCANNER_API || SkyscannerKeys.SKYSCANNER_API),
    headers:{
      Accept: "application/json"
    }
  }
  return RequestPromise(options)
}


//
//returs an object with the lowest price for a 10-day round-trip with a given departure date, and a deep link to book
function searchSkyscannerByDate(departureDate, returnDate, originCity, destinationCity) {
  let outboundDate = departureDate;
  let inboundDate = returnDate;

  return getSessionKey(originCity, destinationCity, outboundDate, inboundDate)
    .then( (sessionKey) => {
      console.log("sessionKey:", sessionKey);
      return sessionKey;
    })
    .then(pollSession)
    .then( (resp) => {
      let response = JSON.parse(resp)
      return response.Itineraries
        .map( (val) => {
          return val.PricingOptions
          .map( (ops) => {
            return  {
                      price: ops.Price,
                      originCity: originCity,
                      destinationCity: destinationCity,
                      outboundDate: outboundDate.toISOString().slice(0,10),
                      inboundDate: inboundDate.toISOString().slice(0,10),
                      outboundMonth: outboundDate.toISOString().slice(5,7),
                      outboundYear: outboundDate.toISOString().slice(0,4),
                      deepLink: ops.DeeplinkUrl
                    }
          })
        })
        .reduce( (prev, current) => {
          return prev.concat(current)
        }, [])
        .reduce( (prev, current) => {
          return prev.price < current.price ? prev : current
        }, [])
    })
    .then ( (objToInsertIntoDb) => {
      console.log(objToInsertIntoDb);
      return objToInsertIntoDb
    })
}


//
// Insert flight object into quotes table
Knex.insertQuotesIntoDb = function(flightObj) {
  return flightObj !== [] ? Knex('custom_quotes').insert(flightObj) : undefined
}


//
//generates argments array for searchSkyscannerByDate function
function generateArgumentsArray() {  
  let results = [];
  originCities.forEach( (city) => {
    destinationCities.forEach( (dest) => {
      departureDates.forEach( (date) => {
        returnDates.forEach( (rDate) => {
          results.push([date, rDate, city, dest])
        })
      })
    })
  })
  return results
}


//
//starts the chain that handles all of the functions which gets skyscanner to cache data
function masterDataGenerator() {
  let theMasterArray = generateArgumentsArray()
    .map( (infoArray) => {
      return promiseThrottle.add(searchSkyscannerByDate.bind(this, ...infoArray))
    })
  Promise.all(theMasterArray)
}

//
//reruns all api calls to skyscanner and inserts results into db
function theTravelingCodesmenCustomFlightTracker() {
  let theMasterArray = generateArgumentsArray()
    .map( (infoArray) => {
      return promiseThrottle
        .add(searchSkyscannerByDate.bind(this, ...infoArray))
    })
  Promise.all(theMasterArray
    .map( (promiseFromSkyscanner) => {
      return promiseFromSkyscanner
        .then(Knex.insertQuotesIntoDb)
    })
  )
  .then(Knex.closeDb);
}


masterDataGenerator()
setTimeout(theTravelingCodesmenCustomFlightTracker, 6000)


