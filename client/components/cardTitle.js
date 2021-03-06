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

// 'export' is for enzyme testing, 'export default' is for regular react functionality
export { CardTitle };

export default CardTitle;
