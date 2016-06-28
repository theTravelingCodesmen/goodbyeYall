'use strict'

let knex = require('../db/db');


knex.getUncalculatedQuotes = function(outboundMonth,outboundYear,originCity,destinationCity) {
  return knex('quotes')
    .where({
      calculated: false,
      outboundMonth: outboundMonth,
      outboundYear: outboundYear,
      originCity: originCity,
      destinationCity: destinationCity
    })
}

knex.changeCalculatedToTrue = function (array) {
  return Promise.all(array.map(function (row) {
    return knex('quotes')
      .where({'id' : row.id})
      .update({'calculated' : true})
  }))
}

knex.getAverages = function(outboundMonth,outboundYear,originCity,destinationCity) {
  return knex('averages')
    .where({
      outboundMonth : outboundMonth,
      outboundYear : outboundYear,
      originCity : originCity,
      destinationCity : destinationCity
    })
}

//function below assumes we are getting an array with one object back from knex.getAverages
knex.updateAverages = function (newAverageObject) {
  return knex('averages')
    .where({'id' : newAverageObject.id})
    .update({'avg_price' : newAverageObject.price})
}

let calculateFlightAverage = function(acc, quote) {
  acc.count++;
  acc.price = (acc.price * (acc.count-1) + quote.price) / acc.count;
  return acc;
}

function updateOrCalculateAverage (outboundMonth, outboundYear, originCity, destinationCity) {
  return Promise.all([
    knex.getUncalculatedQuotes(outboundMonth, outboundYear, originCity, destinationCity),
    knex.getAverages(outboundMonth, outboundYear, originCity, destinationCity)
    ])
    .then(function (value) {
      let quotes = value[0];
      let average = value[1];
      if (average.length === 0) {
        //need to create new average
        let newAverage = quotes.reduce(calculateFlightAverage,
          {count:0, price:0}
          );
        return knex('averages').insert({
          avg_price: newAverage.price,
          count:newAverage.count,
          originCity: originCity,
          destinationCity: destinationCity,
          outboundMonth: outboundMonth,
          outboundYear: outboundYear
        })
        .catch(function(err) {
          console.log("error inserting new average:",err);
        })
        .then(knex.getUncalculatedQuotes.bind(null,outboundMonth, outboundYear, originCity, destinationCity))
        .then(knex.changeCalculatedToTrue)
        .catch(function(err) {
          console.log("error toggling calculated quotes to true:", err);
        })
      } 
      else {
        //need to update current average
        let currentAverage = average[0];
        let newAverage = quotes.reduce(calculateFlightAverage,
          {
          count:currentAverage.count,
          price:currentAverage.avg_price,
          id: currentAverage.id
          });
        return knex('averages')
          .where({id:newAverage.id})
          .update({
            count:newAverage.count,
            avg_price:newAverage.price
          })
          .then(knex.getUncalculatedQuotes.bind(null,outboundMonth, outboundYear, originCity, destinationCity))
          .then(knex.changeCalculatedToTrue)
          .catch(function(err) {
            console.log("error toggling calculated quotes to true:", err);
          })
      }
    })
}

let originCities = ["DFWA-sky", "HOUA-sky"];
let destinationCities = ["RIOA-sky", "BJSA-sky", "CUZ-sky", "AMMA-sky", "CUN-sky", "ROME-sky", "DEL-sky", "HRE-sky", "REYK-sky", "PHXA-sky", "SYD-sky", "MEX-sky"];
let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
let years = ["2016", "2017", "2018"];

//create array of all permutations of month, year, origin and destination
function generateAveragesArgumentsArray() {
  let results = [];
  originCities.forEach( (origin) => {
    destinationCities.forEach( (dest) => {
      months.forEach( (month) => {
        years.forEach( (year) => {
            results.push([month, year, origin, dest])
        })
      })
    })
  })
  return results
}

//
//updates 'averages' table by averaging in new quotes from 'quotes' table
function calculateAveragesWorker() {
  Promise.all(generateAveragesArgumentsArray().map(function(array) {
    return updateOrCalculateAverage.apply(null, array);
  }))
    .then(knex.closeDb);
}

module.exports = {
  calculateAveragesWorker: calculateAveragesWorker
}


