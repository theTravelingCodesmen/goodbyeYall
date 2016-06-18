'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardBox from './cardBox'
import NavBar from './navBar'


class LandingPage extends React.Component {
	render(){
		return(
					<div> 
						<NavBar />
					
					</div>
			)
	}
}

// switch render function to here from CardBox

ReactDOM.render(
	<LandingPage />, document.querySelector('.landing-page')
);
export default LandingPage;


	// <row>
	// 						<div>
	// 							<Screen />
	// 							<div>
	// 								<div className='package-pne'></div>
	// 								<div className='package-two'></div>
	// 							</div>
	// 						</div>
	// 					</row>