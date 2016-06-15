'use strict'

import d3LineDraw from '../helper/d3Draw';



/// the end point on the server is skyscanner_api/d3_cache/:location/:currency/:ISO/:dest/:arrival/:depart_time/:arrival_time
let url = "/US/USD/en-US/LON/JFK/2016/2016?apiKey=tr381925555151402243435952656975";

let endpoint = '/skyscanner_api/d3_cache'+url





function transformCacheData(price){
  //this transform json data from api to skyscanner to d3 friendly format
  //input price cache data from skyscanner
  //output array of objs for d3 plotting [{date:, price:}.....]
  price = price.Dates;
  price.OutboundDates = price.OutboundDates.map(function(obj){ return {price:obj.Price, date:obj.PartialDate}});
  price.InboundDates = price.InboundDates.map(function(obj){ return {price:obj.Price, date:obj.PartialDate}});
  //custom sorting function
  function compare(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  };

  price.OutboundDates = price.OutboundDates.sort(compare);
  price.InboundDates = price.InboundDates.sort(compare);

  let shorter = price.InboundDates.length > price.OutboundDates.length ? price.OutboundDates : price.InboundDates;
  price.total = [];

  shorter.forEach(function(obj){
    let date = obj.date;
    let inboundPrice = price.InboundDates.filter(function(obj){return obj.date ===date})[0].price;
    let outboundPrice = price.OutboundDates.filter(function(obj){return obj.date ===date})[0].price;
    price.total.push({date:date, price:inboundPrice+outboundPrice})
  });
  return price.total.slice();
}


let getd3Cachegraph = d3LineDraw.bind(null, 'd-three-cache',endpoint, transformCacheData)
export default getd3Cachegraph;
