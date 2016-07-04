'use strict'

import React from 'react';
import ImageCarousel from './imageCarousel';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

//renders outer card box i.e. landing page
class OuterCardBox extends React.Component {
	
	compontentDidMount () {}

	render(){
		return (
			<div >
				<div className='nav-spacing'></div>
				<div className='value-prop'>	
					<h1 className='main'>We do the work, you do the travel</h1>
					<h2 className='sub'>Thousands of flights. One low price.</h2>
					<h5 className='call-to-action'>Choose a travel theme or <a className="call-to-action-link" href="http://www.facebook.com/dialog/oauth?client_id=1071311906250508&scope=email&response_type=token&redirect_uri=http://localhost:4000/Preferences">log in</a> to get started</h5>
				</div>
				<div>
					<div className='center-div row'>
						<LinkContainer to={{pathname:'/package/American Cities'}}><img className='package-dos' src='/assets/images/postcard-package-4.jpg'></img></LinkContainer>
						<LinkContainer to={{pathname:'/package/Global Explorer'}}><img className='package-uno' src='/assets/images/postcard-package-3.jpg'></img></LinkContainer>
					</div>
					<div className='center-div row'>
						<LinkContainer to={{pathname:'/package/Seven Wonders'}}><img className='package-uno' src='/assets/images/postcard-package.jpg'></img></LinkContainer>
						<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img></LinkContainer>
					</div>
					<div className='center-div row'>
						<LinkContainer to={{pathname:'/package/Foodie Cities'}}><img className='package-uno' src='/assets/images/postcard-package-5.jpg'></img></LinkContainer>
						<LinkContainer to={{pathname:'/package/Party Islands'}}><img className='package-dos' src='/assets/images/postcard-package-6.jpg'></img></LinkContainer>
					</div>
				</div>
				<ImageCarousel />
			</div>
		)
	}
}

export { OuterCardBox, LinkContainer };

export default OuterCardBox;
