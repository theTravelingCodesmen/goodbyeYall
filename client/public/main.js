import React from 'react'
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoRoll from '../components/photoRoll'
import Intro from '../components/intro'
import d3CacheGraph from '../components/d3CacheGraph'
import FlightData from '../components/flightData'



class Test extends React.Component {
	render(){
		return (
			<div>
			Hello World!
			</div>						

		)
	}
	componentWillMount(){
		console.log('about to mount')
	}
};


ReactDOM.render( <Test />, document.getElementById('app'))