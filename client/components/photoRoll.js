'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import PhotoOne from '../components/photoSlotOne'
import PhotoTwo from '../components/photoSlotTwo'
import PhotoThree from '../components/photoSlotThree'
import PhotoFour from '../components/photoSlotFour'
import PhotoFive from '../components/photoSlotFive'
import PhotoSix from '../components/photoSlotSix'

class PhotoRoll extends React.Component {
	render() {
		return(
			<div className='photoRoll'>
				<ul class='ul'>
					<PhotoOne className={'chichen'} src={'chichen_itza.png'} />
					<PhotoTwo className={'christ'} src={'christ_the_redeemer.png'} />
					<PhotoThree className={'colusseum'} src={'colusseum.png'} />
					<PhotoFour className={'machu'} src={'machu_picchu.png'} />
					<PhotoFive className={'petra'} src={'petra.png'} />
					<PhotoSix className={'taj'} src={'taj_mahal.png'} />
				</ul>
			</div>
		)
	}
}

ReactDOM.render(
	<PhotoRoll />, document.querySelector('.photo-roll')
);

export default PhotoRoll;
