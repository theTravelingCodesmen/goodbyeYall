'use strict'
//this is for testing 'MeetTheDevs', 'MissionStatement', and 'OuterCardBox'

let React = require('react');
let Component = require('react').component;
let shallow = require('enzyme').shallow;
let mount = require('enzyme').mount;
let expect = require('chai').expect;
// let NavBar = require('../../client/containers/navBar');
import { NavBar } from '../../client/containers/navBar';
import {MeetTheDevs} from '../../client/components/meetTheDevs';
// let OuterCardBox = require( '../../client/components/outerCardBox');
// let MissionStatement = require( '../../client/components/missionStatement');
// let MeetTheDevs = require( '../../client/components/meetTheDevs');
// let ImageCarousel = require( '../../client/components/imageCarousel');


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

class Fixture extends React.Component {
  render () {
    return (
      <div>
        <input id='checked' defaultChecked />
        <input id='not' defaultChecked={false} />
      </div>
    )
  }
}

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

describe('<MeetTheDevs />', () => {
	it('should have five meet-the-devs divs', () => {
		expect(shallow(<MeetTheDevs />).find('.meet-the-devs')).to.have.length(5);
	});
		it('should have five dev pictures', () => {
		expect(shallow(<MeetTheDevs />).find('.dev-pic')).to.have.length(5);
	});
		// it('should have pull left and pull right in icon div', () => {
		// 	expect(shallow(<MeetTheDevs />).find('.icons').hasClass('pull-left')).to.be(true);
		// });
		it('should have ten buttons', () => {
	expect(mount(<MeetTheDevs />).find('Button')).to.have.length(10);
	});
	// 	it('calls componentDidMount', () =>{
	// 	const wrapper = mount(<MeetTheDevs />);
	// 	expect(MeetTheDevs.prototype.componentDidMount.calledOnce).to.equal(true);
	// })

})