'use strict'

import React from 'react';
import ReactDom from 'react-dom';

class CardTitle extends React.Component{
	render(){
		return (
			<div className='card-title' >{this.props.title}</div>
		)
	}
}


export default CardTitle;
