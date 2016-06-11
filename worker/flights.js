'use strict'
let requestPromise = require("request-promise");
let SkyscannerKeys = require("../APIKEYS.js");

let arrivalCities = ["RIOA-sky", "BJSA-sky", "CUZ-sky", "AMMA-sky", "CUN-sky", "ROME-sky", "DEL-sky"];
let departureCities = ["DFWA-sky", "HOUA-sky"];

Date.prototype.addDays = function(days){
    var outbounddate = new Date();
    outbounddate.setDate(outbounddate.getDate() + days);
    return outbounddate.toISOString().slice(0,10);
}

let arrivalCitiesTest = ["RIOA-sky"];
let departureCitiesTest = ["DFWA-sky"];
let today = new Date;
let outbounddateTest = [today.addDays(7)];
let inbounddateTest = [today.addDays(17)];



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
      outbounddate: outbounddate,
      inbounddate: inbounddate
    }
  }
  return requestPromise(options)
}

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

getSessionKey(arrivalCitiesTest[0], departureCitiesTest[0], outbounddateTest[0], inbounddateTest[0])
  .then(function (sessionKey) {
    console.log(sessionKey);
    return sessionKey;
  })
  .then(pollSession)
  .then(function (resp){
    let response = JSON.parse(resp)
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








