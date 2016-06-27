'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import BootStrapModal from './bootstrapModals.js'

const bioInfo = [
		{person: 'Owen',
		label: "Bio",
		devType: "Stack",
		languages: [],
		bio: "stuff",
		personalStatement: "hire me",
		gitHubPic: 'https://avatars0.githubusercontent.com/u/11080339',
		linkedinLink: 'https://www.linkedin.com/in/owentemple',
		gitHUbLink: 'https://github.com/owentemp'
	},
		{person: 'Paul',
		label: "Bio",
		devType: "Stack",
		languages: [],
		bio: "stuff",
		personalStatement: "hire me",
		gitHubPic: 'https://avatars3.githubusercontent.com/u/16947596',
		linkedinLink: 'https://www.linkedin.com/in/paulmschreibe',
		gitHUbLink: 'https://github.com/pschreibs85'
	},
		{person: 'Vidush',
		label: "Bio",
		devType: "Stack",
		languages: [],
		bio: "stuff",
		personalStatement: "hire me",
		gitHubPic: 'https://avatars1.githubusercontent.com/u/17035769',
		linkedinLink: 'https://www.linkedin.com/in/vidush-rana-579590123',
		gitHUbLink: 'https://github.com/Vidushr'
	},
		{person: 'Sin',
		label: "Bio",
		devType: "Stack",
		languages: [],
		bio: "stuff",
		personalStatement: "hire me",
		gitHubPic: 'https://avatars3.githubusercontent.com/u/12867107',
		linkedinLink: 'https://www.linkedin.com/in/scko823',
		gitHUbLink: 'https://github.com/scko823'
	},
		{person:"James", 
		label: "Bio.",
		devType: "Stack",
		languages: ['JAVASCRIPT', 'ANGULARJS', 'REACTJS',  'NODEJS', 'EXPRESS', 'GIT', 'SQL', 'EXCEL', 'HTML5',
								'POSTGRESQL', 'KNEX.JS', 'MONGODB', 'REDUX', 'HEROKU', 'SOCKET.IO', '@RISK', 'BOOTSTRAP', 'ES6'],
		bio: "stuff",
		personalStatement: "hire me",
		gitHubPic: 'https://avatars0.githubusercontent.com/u/16716625',
		linkedinLink: 'https://www.linkedin.com/in/fitzpatrick1',
		gitHUbLink: 'https://github.com/fitzpatrick1'
		}
]

class MeetTheDevs extends React.Component {

_getDevinfo() {
	return bioInfo.map(function(obj){
		return( 
			<div className="meet-the-devs"><img src='https://avatars0.githubusercontent.com/u/11080339' className='dev-pic'></img>
				<div><h5>{obj.person}</h5>
					<div className="bio">
						<BootStrapModal bTitle='Bio' devType={obj.devType} languages={obj.languages} bodyText={obj.personalStatement} person={obj.person} />
					</div>
					<div className='icons'>
						<div> <a href='https://www.linkedin.com/in/owentemple' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
						<div> <a href='https://github.com/owentemp' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
					</div>
				</div>
			</div>	
		)
	});
}

	render(){
		return (
				<div>
				<div className='nav-spacing'></div>
					<div className='meet-the-devs-wrapper'>
					<div className="meet-the-devs"><img src='https://avatars0.githubusercontent.com/u/11080339' className='dev-pic'></img>
						<div><h5>Owen Temple</h5>
							<div className="bio"><BootStrapModal />
							</div>
							<div className='icons'>
								<div><a href='https://www.linkedin.com/in/owentemple' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div> <a href='https://github.com/owentemp' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
					<div className="meet-the-devs"><img src='https://avatars3.githubusercontent.com/u/16947596' className='dev-pic'></img>
						<div><h5>Paul Schreiber</h5>
								<div className="bio"><BootStrapModal />
								</div>
							<div className='icons'>
								<div><a href='https://www.linkedin.com/in/paulmschreibe' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div> <a href='https://github.com/pschreibs85' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
					<div className="meet-the-devs"><img src='https://avatars1.githubusercontent.com/u/17035769' className='dev-pic'></img>
						<div><h5>Vidush Rana</h5>
								<div className="bio"><BootStrapModal />
								</div>
							<div className='icons'>
								<div><a href='https://www.linkedin.com/in/vidush-rana-579590123' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div> <a href='https://github.com/Vidushr' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
					<div className="meet-the-devs"><img src='https://avatars3.githubusercontent.com/u/12867107' className='dev-pic'></img>
						<div><h5>Sin Ko</h5>
								<div className="bio"><BootStrapModal />
								</div>
							<div className='icons'>
								<div><a href='https://www.linkedin.com/in/scko823' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div> <a href='https://github.com/scko823' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
					<div className="meet-the-devs"><img src='https://avatars0.githubusercontent.com/u/16716625' className='dev-pic'></img>
						<div><h5>James Fitzpatrick</h5>
								<div className="bio"><BootStrapModal />
								</div>
							<div className='icons'>
								<div><a href='https://www.linkedin.com/in/fitzpatrick1' target='_blank'><img className='linkedin' src='/assets/images/linkedin.jpg'/></a></div>
								<div> <a href='https://github.com/fitzpatrick1' target='_blank'><img className='github' src='/assets/images/GitHub.png'/></a></div>
							</div>
						</div>
					</div>
					</div>

				</div>
			)
	}
}

export default MeetTheDevs;







