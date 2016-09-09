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

let originCities = ["DFWA-sky", "HOUA-sky", "AUS-sky"];
let destinationCities1 = ['AMMA-sky', 'RIOA-sky', 'ROME-sky', 'DEL-sky', 'CUN-sky', 'BJSA-sky', 'CUZ-sky', 'HRE-sky', 'REYK-sky'];
let destinationCities2 = ['PHXA-sky', 'SYD-sky', 'MEX-sky', 'LOND-sky', 'BKKT-sky', 'PARI-sky', 'DXBA-sky', 'ISTA-sky', 'SIN-sky'];
let destinationCities3 = ['SELA-sky', 'LAX-sky', 'CHIA-sky', 'DEN-sky', 'LAS-sky', 'SFO-sky', 'NYCA-sky', 'MIAA-sky', 'TYOA-sky'];
let destinationCities4 = ['HKG-sky', 'FLR-sky', 'BERL-sky', 'LIM-sky', 'OGG-sky', 'NAN-sky', 'JMK-sky', 'IBZ-sky', 'AUA-sky', 'GCM-sky'];
let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
let years = ["2016", "2017"];

//create array of all permutations of month, year, origin and destination
function generateAveragesArgumentsArray(destinationCities) {
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
  console.log('Calculating Averages Part 1 of 4')
  return Promise.all(generateAveragesArgumentsArray(destinationCities1).map(function(array) {
    return updateOrCalculateAverage.apply(null, array);
  }))
  .then( () => {
    console.log('Calculating Averages Part 2 of 4')
    return Promise.all(generateAveragesArgumentsArray(destinationCities2).map(function(array) {
      return updateOrCalculateAverage.apply(null, array);
    }))
  })
  .then( () => {
    console.log('Calculating Averages Part 3 of 4')
    return Promise.all(generateAveragesArgumentsArray(destinationCities3).map(function(array) {
      return updateOrCalculateAverage.apply(null, array);
    }))
  })
  .then( () => {
    console.log('Calculating Averages Part 4 of 4')
    return Promise.all(generateAveragesArgumentsArray(destinationCities4).map(function(array) {
      return updateOrCalculateAverage.apply(null, array);
    }))
  })
}

// calculateAveragesWorker()
//   .then(knex.closeDb)
//make sure to add to the years array

module.exports = {
  calculateAveragesWorker: calculateAveragesWorker
}


