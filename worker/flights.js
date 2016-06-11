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
  let flightDate = this;
  console.log("addDays function call", flightDate);
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
      // console.log(response.headers);
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
  let outboundDate = departureDate;
  let inboundDate = departureDate.addDays(10);

  console.log("outboundDate and inboundDate:", outboundDate, inboundDate)

  getSessionKey(arrivalCitiesTest[0], departureCitiesTest[0], outboundDate, inboundDate)
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
                      price: ops.Price,
                      deepLink: ops.DeeplinkUrl,
                      outboundDate: outboundDate,
                      inboundDate: inboundDate
                    }
          })
        })
        .reduce(function(prev, current){
          return prev.concat(current)
        }, [])
        .reduce(function(prev, current){
          return prev.price < current.price ? prev : current
        }, [])
      )
    })
}

//generates an array of flight dates for the next year

function generateFlightDates(daysOut){
  let dates = [];
  let daysAdded = daysOut;
  let count = 0;
  //change back to < 52
  while(count < 1){
    dates.push(today.addDays(daysAdded));
    daysAdded += 7;
    count++;
  }
  // console.log(dates);
  return dates;
}

let departueDates = generateFlightDates(14)
// console.log(departueDates)

departueDates.forEach( function(val) {
  return searchSkyscannerByDate(val)
})

// for (var i = 0; i < departueDates.length; i++) {
//   searchSkyscannerByDate(departueDates[i])
// }

// let x = departueDates[0];
// console.log("this is x", x);

// searchSkyscannerByDate(x)

// // searchSkyscannerByDate(departueDates[0])

// // searchSkyscannerByDate(today)





