'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import PassiveDestination from '../components/passiveDestination'
import ActiveDestination from '../components/activeDestination'


class PhotoRoll extends React.Component {
	render() {
		return(
			<div className='row photo-roll'>
				<ul className='photo-roll' >
					<PassiveDestination className='chichen col-md-2 col-sm-6 col-xs-12'   src='chichen_itza.png' />
				</ul>
			</div>
			<ActiveDestination className='activeDestination'/>
		)
	}
}

export default PhotoRoll;
