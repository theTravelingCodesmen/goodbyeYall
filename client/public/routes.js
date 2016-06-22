'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from '../components/navBar'
import OuterCardBox from '../components/outerCardBox'
import MissionStatement from '../components/missionStatement'
// import MeetTheDevs from '../components/meetTheDevs'
import { Route, IndexRoute } from 'react-router'
// import routes from '../routes'
import CardBox from '../components/cardBox'


class Test extends React.Component {
	render(){
		return (<div>test</div>)
	}
	
}

export default(
					// <div> 
					// 	<NavBar />
					// 	<div className='nav-spacing'></div>
					// 	<Router history={browserHistory} routes={routes} />
					// 	{this.props.children}
					// </div>
				<Route path="/" component={NavBar}>
					<IndexRoute component={OuterCardBox} / >
					<Route path="/package/seven-wonder" component={CardBox} />
					<Route path="/how" component={MissionStatement} />
				</Route>
)
