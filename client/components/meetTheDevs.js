'use strict'

import React from 'react';
import DynamicModal from './dynamicModals.js';
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

const bioInfo = [
		{person: 'Owen',
		tooltiphover: '',
		devType: 'Stack',
		languagesStrong: 'JavaScript | React | AngularJS | Git | Node.js/Express | SQL | Postgres | HTML/CSS | Bootstrap | jQuery',
		languagesExperienced:	'MongoDB | Heroku | Backbone.js | Mithril | Python | Photoshop',
		personalStatement: [[],[],['I build software to help people solve problems and be more creative. I have written code, apps, songs, and books to bring attention and solutions to important challenges.']],
		gitProjectOneLink:'https://offthegridcamping.herokuapp.com/',
		gitProjectOneTitle:'Off the Grid',
		gitProjectTwoLink:'https://github.com/FoodFor4/Forked',
		gitProjectTwoTitle:'Forked',
		gitProjectThreeLink:'http://hatrackapp.herokuapp.com/',
		gitProjectThreeTitle:'HatRack',
		gitHubPic: 'https://avatars0.githubusercontent.com/u/11080339',
		linkedinLink: 'https://www.linkedin.com/in/owentemple',
		gitHubLink: 'https://github.com/owentemple',
		resumeLink: 'https://drive.google.com/file/d/0ByLxrTPEt8S9bnN1V1JvZDI3Y0U/view?usp=sharing'
	},
		{person: 'Paul-Michael',
		tooltiphover: '',
		devType: 'Full Stack',
		languagesStrong:'JavaScript | ReactJS | Redux | NodeJS | ExpressJS | SQL | HTML | Git',
		languagesExperienced:	'AngularJS | Gulp | Grunt | MongoDB | BackboneJS | CSS | Bootstrap | MithrilJS | JQuery | Mocha | Chai',
		personalStatement: [[''],[''],['Former equity options trader, living in Austin, doing full stack development']],
		gitProjectOneLink:'https://offthegridcamping.herokuapp.com/',
		gitProjectOneTitle:'Off the Grid',
		gitProjectTwoLink:'https://github.com/FoodFor4/Forked',
		gitProjectTwoTitle:'Forked',
		gitProjectThreeLink:'https://github.com/pschreibs85/MVP',
		gitProjectThreeTitle:'Pauls Podcast Database',
		gitHubPic: 'https://avatars3.githubusercontent.com/u/16947596',
		linkedinLink: 'https://www.linkedin.com/in/paulmschreiber',
		gitHubLink: 'https://github.com/pschreibs85',
		resumeLink: 'https://drive.google.com/file/d/0B3r8y6b_n6iceFp1bDBoMFRCOE0/view?usp=sharing'
	},
		{person: 'Vidush',
		tooltiphover: '',
		devType: 'Stack',
		languagesStrong: 'JavaScript | React | Redux | ES2015 | Gulp | Html | Node | Babel | Webpack | Passport | GraphAPI | and JQuery',
		languagesExperienced:	': CSS | Angular | Express | Mithril | Mongoose | Backbone | SQL | websockets | Postgres | Mongo DB | deployment(heroku) | Grunt | bootstrap | mocha/chai',
		personalStatement: [[''],[''],['']],
		gitProjectOneLink:'',
		gitProjectOneTitle:'',
		gitProjectTwoLink:'',
		gitProjectTwoTitle:'',
		gitProjectThreeLink:'',
		gitProjectThreeTitle:'',
		gitHubPic: 'https://avatars1.githubusercontent.com/u/17035769',
		linkedinLink: 'https://www.linkedin.com/in/vidush-rana-579590123',
		gitHubLink: 'https://github.com/Vidushr',
		resumeLink: ''
	},
		{person: 'Sin',
		tooltiphover: '',
		devType: 'Backend/Full Stack',
		languagesStrong: 'JavaScript | SQL | MongoDB | Node | Express | Gulp | Angular | jQuery | Git',
		languagesExperienced:	'React | Python (pandas, matplotlib/seaborn, NumPy) | Data Structure | jwt | socketIO | bootstrap',
		personalStatement: [[],[],['Passionate about data and life long learning, I moved from Phoenix to Austin to lanuch my software engineering career']],
		gitProjectOneLink:'https://goo.gl/GRl1DF',
		gitProjectOneTitle:'Break The Ice - meeting new people at local events',
		gitProjectTwoLink:'https://goo.gl/XVZWWn',
		gitProjectTwoTitle:'Marshmallow - US campground finder ',
		gitProjectThreeLink:'https://github.com/scko823/automatic-data-analysis',
		gitProjectThreeTitle:'Car telemetry data analysis with Python',
		gitHubPic: 'https://avatars3.githubusercontent.com/u/12867107',
		linkedinLink: 'https://www.linkedin.com/in/scko823',
		gitHubLink: 'https://github.com/scko823',
		resumeLink: ''
	},
		{person:'James',
		tooltiphover: '',
		devType: 'Full Stack Developer',
		languagesStrong: 'JavaScript | Angular | React | Node | Express | GIT | SQL | Excel | HTML5',
		languagesExperienced: 'Enzyme | Postgres | Knex | MongoDB | Redux | React-Router | Heroku | SOCKET.IO | @RISK | CSS | Bootstrap | ES6',
		personalStatement: 	[['EDUCATION: ','BA Economics, Univeristy of Massachusetts;', 
													'MS Tech Commericialization, University of Texas (McCombs)'],
												['WORK HISTORY: ', 'Merril Lynch, Morgan Stanley'], 
												['PERSONAL STATEMENT: ','Whether working among the stoic granite-giants of Boston’s '+
													'financial district or absorbing the vibrant culture of Austin’s perpetual progression, '+
													'I have found ways to blend my passions with enhancing my environment through leverage of my '+
													'knowledge and experience. '
												]],
		gitProjectOneLink:'https://github.com/Fitzpatrick1/goodbyeYall',
		gitProjectOneTitle:'GoodByeYall',
		gitProjectTwoLink:'https://github.com/Fitzpatrick1/Break-The-Ice-app',
		gitProjectTwoTitle:'Break The Ice',
		gitProjectThreeLink:'https://github.com/D-Xperts/teamninja',
		gitProjectThreeTitle:'Marshmallow',
		gitHubPic: 'https://avatars0.githubusercontent.com/u/16716625',
		linkedinLink: 'https://www.linkedin.com/in/fitzpatrick1',
		gitHubLink: 'https://github.com/fitzpatrick1',
		resumeLink: 'https://drive.google.com/open?id=0B4nZKPBqvvktT2x5RHV0d3labFU'
	}
]
		let personalStatmentArray = function(arr){
	 		return (
	 			<div>
		 			<div>{arr[0][0]}
		 				<div className='meet-the-devs-modal-line'>{arr[0][1]}</div>
		 				<div className='meet-the-devs-modal-line'>{arr[0][2]}</div>
		 			</div>
		 			<div>{arr[1][0]}
		 				<div className='meet-the-devs-modal-line'>{arr[1][1]}</div>
		 			</div>
		 			<div>{arr[2][0]}
		 				<div className='meet-the-devs-modal-line'>{arr[2][1]}</div>
		 			</div>
	 			</div>
	 			)
 		}
//renders meet the devs component
class MeetTheDevs extends React.Component {
 
	_getDevInfo() {

		return bioInfo.map(function(obj){
			return(
				<div className='meet-the-devs' key={obj.person}>
					<a href="#"><img src={obj.gitHubPic} className='dev-pic'></img></a>
					<div><h5>{obj.person}</h5>
					<div className ='buttons'>
						<div className='bio'>
							<DynamicModal
								bTitle='Bio'
								popoverLink='Programming Languages, Libraries & Frameworks'
								modalHeaderOne='Technical Projects and Experience'
								modalHeaderTwo='About'
								topBody='Recent Projects on GitHub'
								modalTitle={obj.devType}
								PopoverPOne={'STRONG: ' + obj.languagesStrong}
								PopoverPTwo={'EXPERIENCED: ' + obj.languagesExperienced}
								bodyText={personalStatmentArray(obj.personalStatement)}
								item={obj.person}
								popOverTitle='Technical Knowledge'
							>
								<div className='meet-the-devs-modal-line'><a href={obj.gitProjectOneLink} target='_blank'> {' ' + obj.gitProjectOneTitle}</a></div>
								<div className='meet-the-devs-modal-line'><a href={obj.gitProjectTwoLink} target='_blank'> {' ' + obj.gitProjectTwoTitle}</a></div>
								<div className='meet-the-devs-modal-line'><a href={obj.gitProjectThreeLink} target='_blank'> {' ' + obj.gitProjectThreeTitle}</a></div>
							</DynamicModal>
							<a href={obj.resumeLink} target='_blank' className='resume-link pull-right'><Button  bsStyle='info' block> Resume</Button></a>
						</div>
							<div className='icons'>
								<div className='pull-left'> <a href={obj.linkedinLink} target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div className='pull-right'> <a href={obj.gitHubLink} target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
				</div>
			)
		});
	}

	render(){
		const bios = this._getDevInfo();
		return (
			<div>
				<div className='nav-spacing'></div>
				<div className='meet-the-devs-wrapper'>
					{bios}
				</div>
			</div>
		)
	}

}

// 'export' is for enzyme testing, 'export default' is for regular react functionality
export { MeetTheDevs, DynamicModal, Tooltip, OverlayTrigger, Button, bioInfo }

export default MeetTheDevs;

