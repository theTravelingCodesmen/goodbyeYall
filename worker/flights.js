'use strict'
let requestPromise = require("request-promise");
let SkyscannerKeys = require("../APIKEYS.js");

let arrivalCities = ["RIOA-sky", "BJSA-sky", "CUZ-sky", "AMMA-sky", "CUN-sky", "ROME-sky", "DEL-sky"];
let departureCities = ["DFWA-sky", "HOUA-sky"];

let arrivalCitiesTest = ["RIOA-sky"];
let departureCitiesTest = ["DFWA-sky"];
let today = new Date;

//adds a given number of days to a date

Date.prototype.addDays = function(days){
  let flightDate = new Date;
  console.log(flightDate);
  flightDate.setDate(flightDate.getDate() + days);
  return flightDate;
}

//POST request to skyscanner to get session key

function getSessionKey(originplace, destinationplace, outbounddate, inbounddate) {
  console.log("getSessionKey called with arguments:", originplace, destinationplace, outbounddate, inbounddate);
  let options = {
    method: 'POST',
    uri: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0',
    transform: function (body, response, resolveWithFullResponse) {
      return response.headers.location.split("/").slice(-1)[0];
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    form: {
      apiKey: SkyscannerKeys.SKYSCANNER_API,
      country: "US",
      currency: "USD",
      locale: "en-US",
      originplace: originplace,
      destinationplace: destinationplace,
      outbounddate: outbounddate.toISOString().slice(0,10),
      inbounddate: inbounddate.toISOString().slice(0,10)
    }
  }
  return requestPromise(options)
}

//GET request to skyscanner to get flight info

function pollSession(sessionKey) {
  console.log("pollSession called");
  let options = {
    method: 'GET',
    uri: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0/' + sessionKey + '?apiKey=' + SkyscannerKeys.SKYSCANNER_API,
    headers:{
      Accept: "application/json"
    }
  }
  return requestPromise(options)
}

//returs an object with the lowest price for a 10-day round-trip with a given departure date, and a deep link to book

function searchSkyscannerByDate(departureDate){
  let outbounddateTest = departureDate.addDays(14);
  let inbounddateTest = departureDate.addDays(24);

  getSessionKey(arrivalCitiesTest[0], departureCitiesTest[0], outbounddateTest, inbounddateTest)
    .then(function (sessionKey) {
      console.log("sessionKey:", sessionKey);
      return sessionKey;
    })
    .then(pollSession)
    .then(function (resp){
      let response = JSON.parse(resp)
      //make this a return statement instead of console.log
      console.log(response.Itineraries
        .map(function(val){
          return val.PricingOptions
          .map(function(ops){
            return  {
                      Price: ops.Price,
                      DeepLink: ops.DeeplinkUrl
                    }
          })
        })
        .reduce(function(prev, current){
          return prev.concat(current)
        }, [])
        .reduce(function(prev, current){
          return prev.Price < current.Price ? prev : current
        }, [])
      )
    })
}

//generates an array of flight dates for the next year

function generateFlightDates(daysOut){
  let dates = [];
  let daysAdded = daysOut;
  let count = 0
  while(count < 50){
    dates.push(today.addDays(daysAdded));
    daysAdded += 7;
    count++;
  }
  console.log(dates);
  return dates;
}

// generateFlightDates(24)
searchSkyscannerByDate(today)







