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
				<div className = 'row'>
					<CardTitle className={'card-title col-md-12'} />
				</div>
				<div className = 'row'>
					<PhotoRoll />
				</div>
				<div className = 'row'>
					<div className='active-photo-container'>
						<ActivePhoto className={'active-photo col-md-12'} />
					</div>
				</div>
			</div>

		)
	}
}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;

