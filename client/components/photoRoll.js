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
					<PhotoOne className={'chichen col-md-2 col-sm-10' }  src={'chichen_itza.png'} />
					<PhotoTwo className={'christ col-md-2 col-sm-10'} src={'christ_the_redeemer.png'} />
					<PhotoThree className={'colusseum col-md-2 col-sm-10'} src={'colusseum.png'} />
					<PhotoFour className={'machu col-md-2 col-sm-10'} src={'machu_picchu.png'} />
					<PhotoFive className={'petra col-md-2 col-sm-10'} src={'petra.png'} />
					<PhotoSix className={'taj col-md-2 col-sm-10'} src={'taj_mahal.png'} />
				</ul>
			</div>
		)
	}
}

export default PhotoRoll;
