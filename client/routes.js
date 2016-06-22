import React from 'react'
import {Route, IndexRoute} from 'react-router'

import CardBox from './components/cardBox'
import OuterCardBox from './components/outerCardBox';
import LandingPage from './components/landingPage';
import MissionStatement from './components/missionStatement.js'


const TestComp = () => {
	return(<div>Hi</div>)
}

export default (
	<Route path="/" component={LandingPage}>
		<IndexRoute	component={OuterCardBox} />
		<Route path='/CardBox' component={TestComp} />
                        <Route path='/mission' component={MissionStatement} />
	</Route>
);




// These will be children of CardBox but this.props.children needs to be called in that component
//  <Route path='SevenWonders' component ={CardBox} />
//  <Route path='SevenNaturalWonders' component ={CardBox} />
