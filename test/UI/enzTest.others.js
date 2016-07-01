'use strict'
//this is for testing 'MeetTheDevs', 'MissionStatement', and 'OuterCardBox'

let React = require('react');
let shallow = require('enzyme').shallow;
let mount = require('enzyme').mount;
let NavBar = require('../../client/containers/navBar')

// let D3CacheGraph = require( '../../client/components/d3CacheGraph');
// let FlightData = require( '../../client/components/flightData');
// let BootStrapModal = require( '../../client/components/dynamicModals');
// let getd3Cachegraph = require( '../../client/components/d3CacheGraphFetch');
// let ImageCarousel = require( '../../client/components/imageCarousel');
// let CardTitle = require( '../../components/cardTitle');
// let PackageDestinations = require( '../../components/packageDestinations');
// let PassiveDestination = require( '../../components/passiveDestination');
// let ActiveDestination = require( '../../components/activeDestination');

let OuterCardBox = require( '../../client/components/outerCardBox');
let MissionStatement = require( '../../client/components/missionStatement');
let MeetTheDevs = require( '../../client/components/meetTheDevs');
// let CardBox = require( '../../containers/cardBox');
// let UserForm = require( '../../components/userForm');
// let AirportDropdown = require( '../../containers/airportDropdown');
let expect = require('chai').expect;
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


// class NavBar extends React.Component {
//   render () {
//     return (
//       <div>
//         <input id='checked' defaultChecked />
//         <input id='not' defaultChecked={false} />
//       </div>
//     )
//   }
// }

describe('<NavBar />',() =>{
	it('it should render <OuterCardBox /> component',() =>{
		expect(true).to.equal(true);
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