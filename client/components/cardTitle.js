'use strict'

import React from 'react';

//renders the package destination
class CardTitle extends React.Component{
	render(){
		return (
			<div className='card-title' >{this.props.title}</div>
		)
	}
}

export default CardTitle;