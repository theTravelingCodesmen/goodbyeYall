'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class CardTitle extends React.Component{
	render(){
		return (
			<div className='card-title'>7 Wonders of the World</div>
		)
	}
}

ReactDom.render(
	<CardTitle />, document.querySelector('.card-title')
);

export default CardTitle;