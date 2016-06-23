'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class MeetTheDevs extends React.Component {
	render(){
		return (
				<div className='meet-the-devs'>
				<div className='nav-spacing'></div>
					<div><img src='/assets/images/owen.jpg' className='dev-pic'></img>
						<div>Owen Temple
							<ul>
								<li>https://github.com/owentemp</li>
								<li> <a href='https://www.linkedin.com/in/owentemple'>linkedin</a></li>
							</ul>
						</div>
					</div>
						<div>Paul Schreiber
							<ul>
								<li>https://github.com/pschreibs85</li>
								<li>https://www.linkedin.com/in/paulmschreibe</li>
							</ul>
						</div>
						<div>Vidush Rana
							<ul>
								<li>https://github.com/Vidushr</li>
								<li>https://www.linkedin.com/in/vidush-rana-579590123 </li>
							</ul>
						</div>
						<div>Sin Ko
							<ul>
								<li>https://github.com/scko823</li>
								<li>https://www.linkedin.com/in/scko823</li>
							</ul>
						</div>
						<div>James Fitzpatrick
							<ul>
								<li>https://github.com/fitzpatrick1</li>
								<li></li>
							</ul>
						</div>
				</div>
			)
	}
}

export default MeetTheDevs;
