'use strict'

import d3LineDraw from '../helper/d3Draw';

function transformLivePriceData(price){
	//only need to sort price correctly
	  function compare(a, b) {
	    if (a.date < b.date) {
	      return -1;
	    }
	    if (a.date > b.date) {
	      return 1;
	    }
	    return 0;
	  };

	return price.sort(compare);
}

let getd3LivePriceGraph = d3LineDraw.bind(null, 'flight', '/avg_price/DFWA-sky/BJSA-sky', transformLivePriceData);

export default getd3LivePriceGraph;