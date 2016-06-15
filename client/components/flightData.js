// Component for Flight data
"use strict"

import React from 'react'
import ReactDOM from 'react-dom'


class FlightData extends React.Component {
	render() {
		return (
			<div className={this.props.className}>Placeholder for flight data and still need ajax request</div>
		)
	}
}

ReactDOM.render(
	<FlightData />, document.querySelector('.flight')
);

export default FlightData;