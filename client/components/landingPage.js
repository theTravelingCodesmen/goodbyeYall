'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from './navBar'
import OutCardBox from './outerCardBox'
import MissionStatement from './missionStatement'
import MeetTheDevs from './meetTheDevs'


class LandingPage extends React.Component {
	render(){

let showing = <OutCardBox />		
//if(showpackage)
//else{showing = <OutCardBox />}

		return(
					<div> 
						<NavBar />
						{showing}
						<MissionStatement />
						<MeetTheDevs />
					</div>
		)
	}
}

// switch render function to here from CardBox

ReactDOM.render(
	<LandingPage />, document.querySelector('.landing-page')
);
export default LandingPage;

