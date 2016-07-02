'use strict'
//this is for testing 'MeetTheDevs', 'MissionStatement', and 'OuterCardBox'

let React = require('react');
let Component = require('react').component;
let shallow = require('enzyme').shallow;
let mount = require('enzyme').mount;
let expect = require('chai').expect;
// let function componentDidMount = require('react').componentDidMount();
import { NavBar } from '../../client/containers/navBar';
import {MeetTheDevs, BootStrapModal, Tooltip, OverlayTrigger, Button, bioInfo } from '../../client/components/meetTheDevs';
import { spy } from 'sinon';
import { OuterCardBox, LinkContainer } from '../../client/components/outerCardBox';
import { MissionStatement } from '../../client/components/missionStatement';
import { ImageCarousel } from  '../../client/components/imageCarousel';

// Shallow Rendering
// Full Dom Rendering
// Static Rendered Markup



// describe('',() =>{
// 	it('message',() =>{
// 		expect(shallow().contains()).to.equal(true);
// 	});
// 	it('message',() =>{
// 		expect(shallow().is())to.equal(true);
// 	});
// 	it('message',() =>{
// 		expect(mount().find().length).to.equal();
// 	});
// 	it('calls componentDidMount', () =>{
// 		const wrapper = mount(xxxxx);
// 		expect(xxxxx.prototype.componentDidMount.calledOnce).to.equal(true);
// 	})
// })

  // let componentWillMount = function(){
  //   localStorage.setItem('originairport', (localStorage.getItem('originairport')|| "AUS-sky"));
  //   this.profilePhoto = (localStorage.getItem('goodbyeyall.profile_photo'));
  // }

  // let logout = function(){
  //   localStorage.removeItem('goodbyeyall.fb_id');
  //   this.props.changeLogin(false);
  //   window.location.assign('/');
  // }


describe('<NavBar />', () =>{
	it('it should render <OuterCardBox /> component', () =>{
		const wrapper = shallow(<NavBar />)
		// const wrapper = mount(<NavBar />)
		// wrapper.setProps({ bar: 'foo' });
   expect(wrapper.find('#not')).to.have.length(0);
	});
	// it('message',() =>{
	// 	expect(shallow(<NavBar />).find((<MissionStatement />)to.have.length(1);
	// });
	// it('message',() =>{
	// 	expect(mount().find().length).to.equal();
	// });
	// it('calls componentDidMount', () =>{
	// 	const wrapper = mount(xxxxx);
	// 	expect(xxxxx.prototype.componentDidMount.calledOnce).to.equal(true);
	// })
})


let obj= bioInfo;
let tooltip = <Tooltip id='' >{obj.tooltiphover}</Tooltip>;
describe('<MeetTheDevs />', () => {
	it('should have five meet-the-devs divs', () => {
		expect(shallow(<MeetTheDevs />).find('.meet-the-devs')).to.have.length(5);
	})
		it('should have five dev pictures', () => {
		expect(shallow(<MeetTheDevs />).find('.dev-pic')).to.have.length(5);
	})
		// it('should have pull left and pull right in icon div', () => {
		// 	expect(shallow(<MeetTheDevs />).find('.icons').hasClass('pull-left')).to.be(true);
		// });
	// 	it('should have ten buttons', () => {
	// expect(mount(<MeetTheDevs />).find('Button')).to.have.length(10);
	// })
		// it('should have a BootStrapModal', () => {
		// 	expect(shallow(<MeetTheDevs />).find('meet-the-devs-dynamic-modal'
		// 		).props()).to.have.length(13);
		// })
	// 	it('calls componentDidMount', () =>{
	// 	const wrapper = mount(<MeetTheDevs />);
	// 	expect(MeetTheDevs.prototype.componentDidMount.calledOnce).to.equal(true);
	// })
		// it('calls componentDidMount', () => {
	 //   spy(MeetTheDevs.prototype, 'componentDidMount');
	 //   const wrapper = mount(<MeetTheDevs />);
	 //   expect(MeetTheDevs.componentDidMount().calledOnce()).to.equal(true)
	 // });
	 // it('should have a profile picture', () => {
	 // 	expect(shallow(<MeetTheDevs />).find('meet-the-devs-overlay-trigger').at(0).render().find('dev-pic')).to.have.length(1)
	 // });
	 // it('', () => {
	 // 	expect(shallow(<MeetTheDevs />))
	 // })
	 // .props()
	 // .simulate(event)
})

describe('<OuterCardBox />', () => { 
	it('should have nav-spacing div', () => {
	expect(shallow(<OuterCardBox />).contains(
			<div className='nav-spacing'></div>
		)).to.equal(true);
	})
	it('should have a path to the Seven Wonders', () => {
	expect(shallow(<OuterCardBox />).contains(
		<LinkContainer to={{pathname:'/package/Seven Wonders'}}><img className='package-uno' src='/assets/images/postcard-package.jpg'></img></LinkContainer>
		)).to.equal(true);
	})
		it('should have a path to the Global Explorer', () => {
		expect(shallow(<OuterCardBox />).contains(<LinkContainer to={{pathname:'/package/Global Explorer'}}><img className='package-uno' src='/assets/images/postcard-package-3.jpg'></img></LinkContainer>	
			)).to.equal(true);
	})
		it('should have a path to the American Cities', () => {
		expect(shallow(<OuterCardBox />).contains(<LinkContainer to={{pathname:'/package/American Cities'}}><img className='package-dos' src='/assets/images/postcard-package-4.jpg'></img></LinkContainer>)).to.equal(true);
	})
		it('should have a path to the Natural Wonders', () => {
		expect(shallow(<OuterCardBox />).contains(	<LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><img className='package-dos' src='/assets/images/postcard-package-natural.jpg'></img></LinkContainer>)).to.equal(true);
	})
})

describe('<MissionStatement />', () => { 
		it('should have nav-spacing div', () => {
		expect(shallow(<MissionStatement />).contains(
				<div className='nav-spacing'></div>
			)).to.equal(true);
	})
})

describe('<ImageCarousel />', () => { 

})