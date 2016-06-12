'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class CardTitle extends React.Component{
	render(){
		return (
			<div className='cardTitle'>7 Wonders of the World</div>
		)
	}
}

ReactDom.render(
	<CardTitle />, document.querySelector('.cardTitle')
);

export default CardTitle;