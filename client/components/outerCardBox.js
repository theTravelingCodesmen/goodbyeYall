'use strict'

import React from 'react';
import ImageCarousel from './imageCarousel';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class OuterCardBox extends React.Component {
	render(){
		return (
			<div >
				<div className='nav-spacing'></div>
				<div className='value-prop'>
					<h1 className='main'>We do the math, you do the travel</h1>
					<h4 className='sub'>Thousands of flights screened to find the cheapest time to go in the next year</h4>
					<h5 className='call-to-action'>Choose a travel theme to get started</h5>
				</div>
				<div>
					<div className='center-div row'>
						<LinkContainer to={{pathname:'/package/Seven Wonders'}}><img className='package-uno' src='/assets/images/postcard-package.jpg'></img></LinkContainer>
						<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img></LinkContainer>
					</div>
				</div>
				<ImageCarousel />
			</div>
		)
	}
}


export default OuterCardBox;
