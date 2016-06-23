// Component for Flight data
"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import getd3LivePriceGraph from '../helper/d3Draw';


class FlightData extends React.Component {

	render() {
		return (
			<div className='flight d3-line-chart' ></div>
		)
	}
  componentDidMount(){
  	console.log('line 19 airport_code', this.props.airport_code)
    getd3LivePriceGraph.call(null, 'flight',`/avg_price/${localStorage.getItem('originairport')}/${this.props.airport_code}`);
  }
  componentDidUpdate(){
  	console.log('line 23 airport_code', this.props.airport_code)
    getd3LivePriceGraph.call(null, 'flight',`/avg_price/${localStorage.getItem('originairport')}/${this.props.airport_code}`);
  }
}

export default FlightData;