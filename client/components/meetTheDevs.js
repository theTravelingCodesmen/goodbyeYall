'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import BootStrapModal from './bootstrapModals.js'

const bioInfo = {
	Owen: [
		{Label: "Bio"},
		{DevType: "Stack"},
		{Languages: []},
		{Bio: "stuff"},
		{Person: "Owen"},
		{PersonalStatement: "hire me"}
	],
		Paul			: [
			{Label: "Bio."},
			{DevType: "Stack"},
			{Languages: []},
			{Bio: "stuff"},
			{Person: "Owen"},
			{PersonalStatement: "hire me"}
		],
		Vidush		: [
			{Label: "Bio."},
			{DevType: "Stack"},
			{Languages: []},
			{Bio: "stuff"},
			{Person: "Owen"},
			{PersonalStatement: "hire me"}
		],
		Sin				: [
			{Label: "Bio."},
			{DevType: "Stack"},
			{Languages: []},
			{Bio: "stuff"},
			{Person: "Owen"},
			{PersonalStatement: "hire me"}
		],
		James			: [
			{Label: "Bio."},
			{DevType: "Stack"},
			{Languages: ['JAVASCRIPT', 'ANGULARJS', 'REACTJS',  'NODEJS', 'EXPRESS', 'GIT', 'SQL', 'EXCEL', 'HTML5',
									'POSTGRESQL', 'KNEX.JS', 'MONGODB', 'REDUX', 'HEROKU', 'SOCKET.IO', '@RISK', 'BOOTSTRAP', 'ES6']},
			{Bio: "stuff"},
			{Person: "Owen"},
			{PersonalStatement: "hire me"}
		]
}


class MeetTheDevs extends React.Component {
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







