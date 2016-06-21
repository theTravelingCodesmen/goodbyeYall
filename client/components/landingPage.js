'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from './navBar'
import OuterCardBox from './outerCardBox'
import MissionStatement from './missionStatement'
import MeetTheDevs from './meetTheDevs'
import {Router, browserHistory} from 'react-router'
import routes from '../routes'
import CardBox from './cardBox'


class LandingPage extends React.Component {
	render(){

let showing = <OuterCardBox />		
//if(showpackage)
//else{showing = <OutCardBox />}

		return(
					<div> 
						<NavBar />
						<div className='nav-spacing'></div>
						<Router history={browserHistory} routes={routes} />
						{this.props.children}
					</div>
		)
	}
}

// switch render function to here from CardBox

ReactDOM.render(
	<LandingPage />, document.querySelector('.landing-page')
);


export default LandingPage;



						// {showing}
						// <MissionStatement />
						// <MeetTheDevs />