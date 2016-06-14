'use strict'

import React from 'react';
import ReactDom from 'reactdom'

class CardBox extends React.Component {
	render() {
		return(
			<div className='card-box'>
				<div class='card-title'>cardTitle
					<PhotoRoll />
				</div>
			</div>
			

		)
	}
}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;
