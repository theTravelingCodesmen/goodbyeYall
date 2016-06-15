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
			<div className='card-box'>
				<div className={'card-title'}>
					<PhotoRoll />
				</div>
			</div>
			<div className='active-photo-container'>
				<ActivePhoto className={'active-photo'} src={'wall_of_china.jpeg'} />
			</div>
			</div>

		)
	}
}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;
