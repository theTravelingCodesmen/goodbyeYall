'use strict'

import React from 'react';
import ReactDom from 'react-dom';
// import CardBox from './cardBox'
import ImageCarousel from './imageCarousel'

class OuterCardBox extends React.Component {
	render(){
		return (
			<div >
			<div className='nav-spacing'></div>
				<div className='row'>
					<img className='value-prop col-md-8' src='/assets/images/value-prop.jpg'></img> 
				
				</div>
				<div>
					<div className='center-div row'>		
						<img className='package-uno' src='/assets/images/postcard-package.jpg'></img> 
						<img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img>
					</div>
				</div>
				<ImageCarousel />
			</div>
		)
	}
}


export default OuterCardBox;