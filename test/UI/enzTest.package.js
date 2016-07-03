'use strict'

import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
// import { CardBox, PackageDestinations } from '../../client/containers/cardBox';
// import UserForm from '../../client/components/userForm';
// import AirportDropdown from '../../client/containers/airportDropdown';
// import D3CacheGraph from '../../client/components/d3CacheGraph';
import { FlightData } from '../../client/components/flightData';
// import BootStrapModal from '../../client/components/dynamicModals';
// import getd3Cachegraph from '../../client/components/d3CacheGraphFetch';
import { CardTitle } from '../../client/components/cardTitle'; 
import { PassiveDestination } from '../../client/containers/passiveDestination';
// import ActiveDestination from '../../client/components/activeDestination';

describe('<CardBox />', () =>{
	// it('should render packageDestinations', () =>{
	// 	expect(shallow(<CardBox />).constains(
	// 	)).to.equal(true) 
	// )}
})


// describe('', () =>{
// 	it('', () =>{ expect()}


// describe('', () =>{
// 	it('', () =>{ expect()}


// describe('', () =>{
// 	it('', () =>{ expect()}


// describe('', () =>{
// 	it('', () =>{ expect()}


describe('<FlightData />', () =>{
	it('should render a flight div', () =>{ 
		expect(shallow(<FlightData />).find('.flight')).to.have.length(1)
	})
})


// describe('', () =>{
// 	it('', () =>{ expect()}


// describe('', () =>{
// 	it('', () =>{ expect()}


describe('<CardTitle />', () =>{
	it('should render a card-title div', () =>{ 
		expect(shallow(<CardTitle />).find('.card-title')).to.have.length(1)
	})
})

describe('<PassiveDestination />', () =>{
	it('should have ', () =>{ 
		expect(mount(<PassiveDestination />).find('.passive-photo'
		)).to.have.length(1)
	})
})


// describe('', () =>{
// 	it('', () =>{ expect()}