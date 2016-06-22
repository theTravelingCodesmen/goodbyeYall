'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import OuterCardBox from './outerCardBox';
// import MissionStatement from './missionStatement'
// import MeetTheDevs from './meetTheDevs'
import { Route, IndexRoute, browserHistory } from 'react-router';
// import routes from '../routes'
// import CardBox from './cardBox'


function LandingPage(){
		return(

				<Route path="/" component={NavBar}>
					<IndexRoute component={OuterCardBox} / >
				</Route>
		)
	}


// switch render function to here from CardBox



export default LandingPage;



						// {showing}
						// <MissionStatement />
						// <MeetTheDevs />