'use strict'

import React from 'react';

class CardTitle extends React.Component{
	render(){
		return (
			<div className='card-title' >{this.props.title}</div>
		)
	}
}

export { CardTitle };
export default CardTitle;
