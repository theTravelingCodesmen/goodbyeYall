'use strict'
let requestPromise = require("request-promise");
let SkyscannerKeys = require("../APIKEYS.js");

function getSessionKey() {
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
      originplace: "DFWA-sky",
      destinationplace: "GIG-sky",
      outbounddate: "2016-06-25",
      inbounddate: "2016-07-05"
    }
  }
  return requestPromise(options)
}

function pollSession() {
    let options = {
    method: 'GET',
    uri: 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0/' + sessionKey + '?apiKey=' + SkyscannerKeys.SKYSCANNER_API,
  }
}

getSessionKey()
  .then(function (sessionKey) {
    console.log(sessionKey)
  })