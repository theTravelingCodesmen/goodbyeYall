'use strict'
let requestPromise = require("request-promise");
let SkyscannerKeys = require("../APIKEYS.js");

let originCities = ["DFWA-sky", "HOUA-sky"];
let arrivalCities = ["RIOA-sky", "BJSA-sky", "CUZ-sky", "AMMA-sky", "CUN-sky", "ROME-sky", "DEL-sky"];

let originCitiesTest = ["DFWA-sky"];
let arrivalCitiesTest = ["RIOA-sky"];
let today = new Date;

//adds a given number of days to a date

Date.prototype.addDays = function(days) {
  let flightDate = new Date(this.getTime())
  flightDate.setDate(flightDate.getDate() + days);
  return flightDate;
}

//POST request to skyscanner to get session key

function getSessionKey(originplace, destinationplace, outbounddate, inbounddate) {
  console.log("getSessionKey called with arguments:", originplace, destinationplace, outbounddate, inbounddate);
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

function searchSkyscannerByDate(departureDate, originCity){
  let outboundDate = departureDate;
  let inboundDate = new Date(departureDate.getTime()).addDays(10);

  getSessionKey(originCity, arrivalCitiesTest[0], outboundDate, inboundDate)
    .then( (sessionKey) => {
      console.log("sessionKey:", sessionKey);
      return sessionKey;
    })
    .then(pollSession)
    .then( (resp) => {
      let response = JSON.parse(resp)
      //make this a return statement instead of console.log
      console.log(response.Itineraries
        .map( (val) => {
          return val.PricingOptions
          .map( (ops) => {
            return  {
                      price: ops.Price,
                      originCity: originCity,
                      outboundDate: outboundDate,
                      inboundDate: inboundDate,
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
  return dates;
}

let departureDates = generateFlightDates(14)
console.log(departureDates)

originCities.forEach( (city) => {
  departureDates.forEach( (date) => {
    return searchSkyscannerByDate(date, city)
  }) 
})


// for (var i = 0; i < departureDates.length; i++) {
//   searchSkyscannerByDate(departureDates[i])
// }






