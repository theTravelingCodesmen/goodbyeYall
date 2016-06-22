'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import CardBox from './cardBox';
import ImageCarousel from './imageCarousel';
import { Link } from 'react-router';

class OuterCardBox extends React.Component {
	render(){
		return (
			<div >
				<div className='row'>
					<img className='value-prop col-md-8' src='/assets/images/value-prop.jpg'></img>

				</div>
				<div>
					<div className='center-div row'>
						<Link to='/CardBox' className='btn'>
						<img className='package-uno' src='/assets/images/postcard-package.jpg'></img>
						</Link>
						<Link to='/CardBox' className='btn'>
						<img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img>
						</Link>
					</div>
				</div>
				<ImageCarousel />
			</div>
		)
	}
}


export default OuterCardBox;
