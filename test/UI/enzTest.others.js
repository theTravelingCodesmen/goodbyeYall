'use strict'
//this is for testing: 'NavBar', 'MeetTheDevs', 'MissionStatement', 'ImageCarousel', and 'OuterCardBox';

//Note, currently mount() will work for non-containers. 

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavBar, MenuItem, NavDropdown, AirportDropdown } from '../../client/containers/navBar';
import { MeetTheDevs, BootStrapModal, Tooltip, OverlayTrigger, Button, bioInfo } from '../../client/components/meetTheDevs';
import { spy } from 'sinon';
import { OuterCardBox, LinkContainer } from '../../client/components/outerCardBox';
import { MissionStatement } from '../../client/components/missionStatement';
import { ImageCarousel, Carousel } from  '../../client/components/imageCarousel';

// Shallow Rendering
// Full Dom Rendering
// Static Rendered Markup

Window.localStorage = {}

describe('<NavBar />', () =>{
	it('should render <OuterCardBox /> component', () =>{
   expect(shallow(<NavBar />).find('#not')).to.have.length(0);
	})
	it('should contain a logo that is a link to /', () => {
		expect(shallow(<NavBar />).contains(
    	<LinkContainer to={{pathname:'/'}}><div><img src='/assets/images/logo.png'/><div className="logo-text">GoodbyeYall</div></div></LinkContainer>
		))
	})
	it('should contain a link to /Package/American Cities', () => {
		expect(shallow(<NavBar />).contains(
    	 <LinkContainer to={{pathname:'/Package/American Cities'}} className="navbar-button"><MenuItem eventKey={3.4}><div>American Cities</div></MenuItem></LinkContainer>
		))
	})
	it('should contain a link to /Package/Global Explorer', () => {
		expect(shallow(<NavBar />).contains(
    	<LinkContainer to={{pathname:'/Package/Global Explorer'}} className="navbar-button"><MenuItem eventKey={3.3}><div>Global Explorer</div></MenuItem></LinkContainer>
		))
	})
	it('should contain a link to /Package/Seven Wonders', () => {
		expect(shallow(<NavBar />).contains(
      <LinkContainer to={{pathname:'/Package/Seven Wonders'}} className="navbar-button"><MenuItem eventKey={3.1}><div>Seven Wonders</div></MenuItem></LinkContainer>
		))
	})
	it('should contain a link to /Package/Seven Natural Wonders', () => {
		expect(shallow(<NavBar />).contains(
     <LinkContainer to={{pathname:'/Package/Seven Natural Wonders'}} className="navbar-button"><MenuItem eventKey={3.2}><div>Seven Natural Wonders</div></MenuItem></LinkContainer>
		))
	})
	it('contains a logo class using mount', function () {
    expect(shallow(<NavBar />).find('.logo')).to.have.length(1);
  });
})


let obj= bioInfo;
let tooltip = <Tooltip id='' >{obj.tooltiphover}</Tooltip>;
describe('<MeetTheDevs />', () => {
	it('should have nav-spacing div', () => {
		expect(shallow(<MeetTheDevs />).contains(
			<div className='nav-spacing'></div>
		)).to.equal(true);
	})
	it('should have five meet-the-devs divs', () => {
		expect(shallow(<MeetTheDevs />).find(
			'.meet-the-devs'
		)).to.have.length(5);
	})
	it('should have five dev pictures', () => {
		expect(shallow(<MeetTheDevs />).find(
			'.dev-pic'
		)).to.have.length(5);
	})
	it('should contain 5 incons', () => {
		expect(shallow(<MeetTheDevs />).find(
			'.icons')).to.have.length(5)
	})
})

describe('<OuterCardBox />', () => { 
	it('should have nav-spacing div', () => {
		expect(shallow(<OuterCardBox />).contains(
			<div className='nav-spacing'></div>
		)).to.equal(true);
	})
	it('should have a value-prop div', () => {
		expect(shallow(<OuterCardBox />).render().find('.value-prop')).to.have.length(1)
	})
	it('should have a path to the Seven Wonders', () => {
		expect(shallow(<OuterCardBox />).contains(
			<LinkContainer to={{pathname:'/package/Seven Wonders'}}>
				<img className='package-uno' src='/assets/images/postcard-package.jpg'></img>
			</LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to the Global Explorer', () => {
		expect(shallow(<OuterCardBox />).contains(
			<LinkContainer to={{pathname:'/package/Global Explorer'}}>
				<img className='package-uno' src='/assets/images/postcard-package-3.jpg'></img>
			</LinkContainer>	
			)).to.equal(true);
	})
	it('should have a path to the American Cities', () => {
		expect(shallow(<OuterCardBox />).contains(
			<LinkContainer to={{pathname:'/package/American Cities'}}>
				<img className='package-dos' src='/assets/images/postcard-package-4.jpg'></img>
			</LinkContainer>)).to.equal(true);
	})
	it('should have a path to the Natural Wonders', () => {
		expect(shallow(<OuterCardBox />).contains(
			<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}>
				<img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img>
			</LinkContainer>)).to.equal(true);
	})
 	it('contains 12 <LinkContainer/> components, consisting of 4 components directly in the component, 8 components in child component <ImageCarousel /> ', () => {
    const wrapper = mount(<OuterCardBox />);
    expect(wrapper.find(LinkContainer)).to.have.length(12); 
  });
})
 

describe('<MissionStatement />', () => { 
	it('should have nav-spacing div', () => {
	expect(shallow(<MissionStatement />).contains(
			<div className='nav-spacing'></div>
		)).to.equal(true);
	})
	it('should have instructional gif', () => {
		expect(shallow(<MissionStatement />).contains(
			<img className='how-it-works-gif' src='/assets/images/how-it-works.gif'></img>
		)).to.equal(true);
	})
})

describe('<ImageCarousel />', () => { 
	it('should have a path to American Cities via filmstrip-5 ', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/American Cities'}}>
				<Carousel.Item>
      		<img width={910} alt="450x250" src="/assets/images/filmstrip-5.jpg"/>
    		</Carousel.Item>
    	</LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to American Cities via filmstrip-6', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/American Cities'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/filmstrip-6.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Global Explorer via filmstrip-7 ', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Global Explorer'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/filmstrip-7.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Gloal Explorer via filmstrip-8', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Global Explorer'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/filmstrip-8.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Seven Natural Wonders via filmstrip-1', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-1.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Seven Natural Wonders via filmstrip-2', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-2.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Seven Wonders via filmstrip-3', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-3.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
	it('should have a path to Seven Wonders via filmstrip-4', () => {
		expect(shallow(<ImageCarousel />).contains(
			<LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
	      <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-4.jpg"/>
	    </Carousel.Item></LinkContainer>
		)).to.equal(true);
	})
})