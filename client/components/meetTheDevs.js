'use strict'

import React from 'react';
import BootStrapModal from './bootstrapModals.js';
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

const bioInfo = [
		{person: 'Owen',
		label: 'Bio',
		tooltiphover: 'hire me!!!',
		devType: 'Stack',
		languagesStrong: 'STRONG:  JavaScript | React | AngularJS | Git | Node.js/Express | SQL | Postgres | HTML/CSS | Bootstrap | jQuery',
		languagesExperienced:	'EXPERIENCED:  MongoDB | Heroku | Backbone.js | Mithril | Python | Photoshop',
		bio: 'stuff',
		personalStatement: 'hire me',
		gitProjectOneLink:'',
		gitProjectOneTitle:'',
		gitProjectTwoLink:'',
		gitProjectTwoTitle:'',
		gitProjectThreeLink:'',
		gitProjectThreeTitle:'',
		gitHubPic: 'https://avatars0.githubusercontent.com/u/11080339',
		linkedinLink: 'https://www.linkedin.com/in/owentemple',
		gitHubLink: 'https://github.com/owentemp',
		resumeLink: ''
	},
		{person: 'Paul',
		label: 'Bio',
		tooltiphover: 'hire me!!!',
		devType: 'Stack',
		languagesStrong:'STRONG: JavaScript | ReactJS | Redux | NodeJS | ExpressJS | SQL | HTML | Git', 
		languagesExperienced:	'EXPERIENCED: AngularJS | Gulp | Grunt | MongoDB | BackboneJS | CSS | Bootstrap | MithrilJS | JQuery | Mocha | Chai',
		bio: 'stuff',
		personalStatement: 'hire me',
		gitProjectOneLink:'',
		gitProjectOneTitle:'',
		gitProjectTwoLink:'',
		gitProjectTwoTitle:'',
		gitProjectThreeLink:'',
		gitProjectThreeTitle:'',
		gitHubPic: 'https://avatars3.githubusercontent.com/u/16947596',
		linkedinLink: 'https://www.linkedin.com/in/paulmschreibe',
		gitHubLink: 'https://github.com/pschreibs85',
		resumeLink: ''
	},
		{person: 'Vidush',
		label: 'Bio',
		tooltiphover: 'hire me!!!',
		devType: 'Stack',
		languagesStrong: 'STRONG: JavaScript | React | Redux | ES2015 | Gulp | Html | Node | Babel | Webpack | Passport | GraphAPI | and JQuery',
		languagesExperienced:	'EXPERIENCED: CSS | Angular | Express | Mithril | Mongoose | Backbone | SQL | websockets | Postgres | Mongo DB | deployment(heroku) | Grunt | bootstrap | mocha/chai',
		bio: 'stuff',
		personalStatement: 'hire me',
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
		label: 'Bio',
		tooltiphover: 'hire me!!!',
		devType: 'Stack',
		languagesStrong: 'STRONG: 	JavaScript | SQL | MongoDB | Node | Express | Gulp | Angular | jQuery | Git',
		languagesExperienced:	'EXPERIENCED:	React | Python (pandas, matplotlib/seaborn, NumPy) | Data Structure | jwt | socketIO | bootstrap',
		bio: 'stuff',
		personalStatement: 'hire me',
		gitProjectOneLink:'',
		gitProjectOneTitle:'',
		gitProjectTwoLink:'',
		gitProjectTwoTitle:'',
		gitProjectThreeLink:'',
		gitProjectThreeTitle:'',
		gitHubPic: 'https://avatars3.githubusercontent.com/u/12867107',
		linkedinLink: 'https://www.linkedin.com/in/scko823',
		gitHubLink: 'https://github.com/scko823',
		resumeLink: ''
	},
		{person:'James', 
		label: 'Bio.',
		tooltiphover: 'hire me!!!',
		devType: 'Stack',
		languagesStrong: 'STRONG: JavaScript | Angular | React | Node | Express | GIT | SQL | Excel | HTML5',
		languagesExperienced: 'EXPERIENCED: Postgres | Knex | MongoDB | Redux | Heroku | SOCKET.IO | @RISK | CSS | Bootstrap | ES6',
		bio: 'stuff',
		personalStatement: 	'Building effective teams, strategically aligning companies with market trends, '  +
												'and product development focused on solution-creation rather than just function creation ' +
												'--- these are my passions.',
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

class MeetTheDevs extends React.Component {

_getDevInfo() {

	return bioInfo.map(function(obj){


let tooltip = <Tooltip>{obj.tooltiphover}</Tooltip>;


		return( 
			<div className='meet-the-devs'>
				<OverlayTrigger overlay={tooltip} placement='right'><a href="#"><img src={obj.gitHubPic} className='dev-pic'></img></a></OverlayTrigger>
				<div><h5>{obj.person}</h5>
				<div className ='buttons'>
					<div className='bio'>
						<BootStrapModal 
							bTitle='Bio' 
							popoverLink='Coding Languages'
							modalHeaderOne='Technical Skills'
							modalHeaderTwo='This is my story'
							topBody='Recent GitHub Projects'
							modalTitle={obj.devType} 
							PopoverPOne={obj.languagesStrong}
							PopoverPTwo={obj.languagesExperienced} 
							bodyText={obj.personalStatement} 
							item={obj.person} 
							popOverTitle='Technical Knowledge' 						
							>
							<div>Project One:<a href={obj.gitProjectOneLink} target='_blank'> {' ' + obj.gitProjectOneTitle}</a></div>
							<div>Project Two:<a href={obj.gitProjectTwoLink} target='_blank'> {' ' + obj.gitProjectTwoTitle}</a></div>
							<div>Project Three:<a href={obj.gitProjectThreeLink} target='_blank'> {' ' + obj.gitProjectThreeTitle}</a></div>
						</BootStrapModal>
						<div>{"      "}</div>
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
					<div className='nav-spacing'>
					</div>
					<div className='meet-the-devs-wrapper'>
						{bios}
					</div>
				</div>
			)

	}

}

export default MeetTheDevs;







