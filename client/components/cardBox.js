'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoRoll from '../components/photoRoll'
import ActivePhoto from '../components/activePhoto'


class CardBox extends React.Component {
	render() {
		return(
			<div className='container'>

					<CardTitle className='card-title col-md-12' />


					<PhotoRoll className='row' />


						<ActivePhoto className='active-photo' />

			</div>

		)
	}
}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;

