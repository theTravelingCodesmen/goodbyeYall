'use strict'

import React from 'react';
import { shallow, mount, render} from 'enzyme';

import D3CacheGraph from './d3CacheGraph';
import FlightData from './flightData';
import BootStrapModal from './dynamicModals';
import getd3Cachegraph from './d3CacheGraphFetch';
import ImageCarousel from './imageCarousel';
import CardTitle from '../components/cardTitle';
import PackageDestinations from './packageDestinations';
import PassiveDestination from './passiveDestination';
import ActiveDestination from '../components/activeDestination';

import OuterCardBox from '../components/outerCardBox';
import MissionStatement from '../components/missionStatement';
import MeetTheDevs from '../components/meetTheDevs';
import CardBox from '../containers/cardBox';
import UserForm from '../components/userForm';
import AirportDropdown from './airportDropdown';





describe('',function(){
	it('message',function(){
		expect(shallow().contains()).to.equal(true);
	});
	it('message',function(){
		expect(shallow().is())to.equal(true);
	});
	it('message',function(){
		expect(mount().find().length).to.equal();
	});
})