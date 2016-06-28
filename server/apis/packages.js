
'use strict'

let knex = require('../../db/db');
let router = require('express').Router();
let requestPromise = require('request-promise');
let WEATHER_API;
if (process.env.NODE_ENV!=='production'){
  WEATHER_API = require('../../APIKEYS.js').WEATHER_API
} else{
  WEATHER_API = process.env.WEATHER_API;
}

module.exports = router;

knex.getCheapestByRoute = function (originCity, destinationCity) {
    return knex('cheapest_route_ever').where({
        originCity:originCity,
        destinationCity:destinationCity
    })
}


knex.getBookNowDetails = function (originCity, destinationCity) {
    return knex('quotes')
        .where({
            originCity:originCity,
            destinationCity:destinationCity
        })
        .select('price', 'deepLink', 'outboundDate', 'inboundDate', 'originCity', 'destinationCity', 'created_at')
}


knex.getCheapestInLastThirtyDays = function (originCity, destinationCity) {
    return knex('last_thirty_days')
    .min('price')
    .where({
        originCity:originCity,
        destinationCity:destinationCity
    })
}


router.use('/selectpackage/:packagename', function(req, res){
 knex('destinations')
 .where({'package_group': req.params.packagename})
 .select('*')
     .then(function(data){
            return Promise.all(
                data.map( (destination) => {
                    //req.headers.originairport is from axios header, which is fetch from client's localstorage
                    return knex.getBookNowDetails( req.headers.originairport, destination.airport_code)
                .then( (info) => {
                    destination.bookDetails = info.reduce( (prev, curr) => {
                    return prev.price < curr.price ? prev : curr
                }, {});
                    return destination
                })
            }))
     })
     .then((data) => {
         return Promise.all(
             data.map((destination) =>{
                let inDate = destination.bookDetails.outboundDate.toJSON().slice(5,10).replace("-","")
                let outDate = destination.bookDetails.inboundDate.toJSON().slice(5,10).replace("-","")
                // console.log(inDate,outDate);
                // console.log('line 62===================',inDate, outDate);
                console.log('package.js line 68')
                 return requestPromise.get(`http://api.wunderground.com/api/${WEATHER_API}/planner_${inDate}${outDate}/q/${destination.weather}.json`)
                 .then(data => {
                     return JSON.parse(data)
                 })
                 .then(weatherData => {
                     // console.log("line 63 package.js", weatherData)
                     // destination.temperature = {};
                     // destination.temperature.high = weatherData.trip.temp_high.avg.F
                     // destination.temperature.low = weatherData.trip.temp_low.avg.F
                     return destination
                 })
             }))
     })
     .then((data) => {
        return Promise.all(
            data.map((destination) => {
                console.log("destination", destination)
                return requestPromise.get(`https://travelbriefing.org/${destination.country}?format=json`)
                .then(data => {
                    return JSON.parse(data)
                })
                .then(countryData =>{
                    console.log('packages line 89', countryData)
                    destination.countryData.languages = countryData.languages
                    destination.countryData.electricity.Plugs = countryData.electricity.Plugs
                    destination.countryData.telephone.callingcode = countryData.telephone.callingcode
                    destination.countryData.vaccinations = countryData.vaccinations
                    destination.countryData.currency.name = countryData.currency.name
                    destination.countryData.currency.rate = countryData.rate
                    destination.countryData.weather = countryData.weather.January.tAvg 
                    destination.countryData.water = countryData.water.short
                    return destination
                })
            }))
     })
         .then(data => {
             // console.log(data)
             return data
         })
     .then( (data) => {
         res.send(data)
     })
     .catch( (err) => {
         console.log(err)
     })
})