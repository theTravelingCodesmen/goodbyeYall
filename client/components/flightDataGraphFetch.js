'use strict'

import d3LineDraw from '../helper/d3Draw';



let getd3LivePriceGraph = d3LineDraw.bind(null, 'flight', '/avg_price/DFWA-sky/BJSA-sky');

export default getd3LivePriceGraph;