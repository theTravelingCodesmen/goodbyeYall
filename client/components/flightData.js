"use strict"

import React from 'react';
import getd3LivePriceGraph from '../helper/d3Draw';

//renders D3 chart of active destination
class FlightData extends React.Component {

	render() {
		return (<div className='flight d3-line-chart'></div>)
	}

	componentDidMount(){
    getd3LivePriceGraph.call(null, 'flight',`/avg_price/${localStorage.getItem('originairport')}/${this.props.airport_code}`);
  }

  componentDidUpdate(){
    getd3LivePriceGraph.call(null, 'flight',`/avg_price/${localStorage.getItem('originairport')}/${this.props.airport_code}`);
  }
  
}

export default FlightData;