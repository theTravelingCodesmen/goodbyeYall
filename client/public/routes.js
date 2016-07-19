'use strict'

import React from 'react';
import NavBar from '../containers/navBar';
import OuterCardBox from '../components/outerCardBox';
import MissionStatement from '../components/missionStatement';
import MeetTheDevs from '../components/meetTheDevs';
import { Route, IndexRoute } from 'react-router';
import CardBox from '../containers/cardBox';
import UserForm from '../components/userForm';

export default(
				<Route path="/" component={NavBar}>
					<IndexRoute component={OuterCardBox} />
					<Route path="/Package/:package_name" component={CardBox} />
					<Route path="/HowItWorks" component={MissionStatement} />
					<Route path="/MeetTheDevs" component={MeetTheDevs} />
					<Route path="/Preferences" component={UserForm} />
				</Route>
)