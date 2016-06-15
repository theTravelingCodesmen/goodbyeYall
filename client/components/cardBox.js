'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoRoll from '../components/photoRoll'
import ActivePhoto from '../components/activePhoto'


class CardBox extends React.Component {
	render() {
		return(
			<div>
				<CardTitle className={'card-title'} />
				<PhotoRoll />
			<div className='active-photo-container'>
				<ActivePhoto className={'active-photo'} />
			</div>
			</div>

		)
	}
}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;

