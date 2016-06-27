'use strict'

import React from 'react';
import ReactDom from 'react-dom';
// import CardBox from './cardBox'
import ImageCarousel from './imageCarousel';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class OuterCardBox extends React.Component {
	render(){
		return (
			<div >
				<div className='nav-spacing'></div>
				<div className='value-prop main'>
					<h1>We do the math, you do the travel</h1>
				</div>
				<div className='value-prop sub'>
					<h4>Thousands of flights screened for the cheapest time to go in the next year</h4>
					<h5>Choose a travel theme to get started</h5>
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
