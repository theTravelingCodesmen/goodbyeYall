'use strict'

//Note, currently mount() will work for non-containers
//		 does not work with all containers because the redux state uses localStorage in some instances;

import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';
// import { CardBox, PackageDestinations } from '../../client/containers/cardBox';
import { UserForm } from '../../client/components/userForm';
// import AirportDropdown from '../../client/containers/airportDropdown';
import { FlightData } from '../../client/components/flightData';
import BootStrapModal from '../../client/components/dynamicModals';
import { CardTitle } from '../../client/components/cardTitle'; 
import { PassiveDestination, setActiveDestination } from '../../client/containers/passiveDestination';
import ActiveDestination from '../../client/components/activeDestination';

describe('<CardBox />', () =>{
	// requires a solution for localStorage while using jsdom
})


// describe('<UserForm/>', () =>{
// 	it('should have div user-form', () =>{ 
// 		expect(mount(<UserForm	/>).find('.user-form	')).to.equal(true)
// 	})
// })

describe('<FlightData />', () =>{
	it('should render a flight div', () =>{ 
		expect(shallow(<FlightData />).find('.flight')).to.have.length(1)
	})
})

describe('<CardTitle />', () =>{
	it('should render a card-title div', () =>{ 
		expect(shallow(<CardTitle />).find('.card-title')).to.have.length(1)
	})
})

describe('<PassiveDestination />', () =>{
	it('should have a passive-photo', () =>{ 
		expect(mount(<PassiveDestination />).find('.passive-photo'
		)).to.have.length(1)
	})
	// it('should do something on click', () => {
	// 	const onButtonClick = spy();
	// 	const wrapper = mount(<PassiveDestination	onButtonClick = {onButtonClick} />)
	// 	wrapper.find('.passive-photo').simulate('click')
	// 	expect(onButtonClick.calledOnce).to.equal(true)
	// })
})

